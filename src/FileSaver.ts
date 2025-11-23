import BinarySaver from './BinarySaver'
import sections from './sections'

import type { WorldProperties } from './FileReader'
import type { Section } from './sections'

export default class FileSaver {
  private saver!: BinarySaver

  public save(world: Section.DataMap, progressCallback?: (percent: number) => void): ArrayBuffer {
    this.saver = new BinarySaver()
    this.saver.progressCallback = progressCallback

    const worldProperties: WorldProperties = {
      version: world.fileFormatHeader.version,
      pointers: world.fileFormatHeader.pointers,
      importants: world.fileFormatHeader.importants,
      mapName: world.header.mapName,
      worldId: world.header.worldId,
      height: world.header.maxTilesY,
      width: world.header.maxTilesX,
    }

    const pointers = (Object.entries(sections) as [Section.Name, Section.IO][]).reduce(
      (prev: number[], [sectionName, sectionIO]) => {
        if (worldProperties.version < 225 && ['bestiary', 'creativePowers'].includes(sectionName)) {
          return prev
        }

        sectionIO.save(this.saver, world[sectionName], worldProperties)

        return [...prev, this.saver.getPosition()]
      },
      [],
    )

    pointers.pop()
    while (pointers.length < 10) {
      pointers.push(0)
    }

    this.saver.jumpTo(24)
    this.saver.saveInt16(pointers.length)
    pointers.forEach((pointer) => this.saver.saveInt32(pointer))

    this.saver.trimEnd()
    return this.saver.getBuffer()
  }
}
