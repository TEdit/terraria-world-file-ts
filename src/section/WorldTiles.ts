import type { WorldProperties } from '../FileReader'
import type BinaryReader from '../BinaryReader'
import type BinarySaver from '../BinarySaver'
import type { Section } from '../sections'
import { Liquid, Slope, Tile } from '../types'

export class WorldTilesData {
  public tiles!: Tile[][]
}

const enum FLAG_1 {
  FLAG_2_EXISTS = 1,
  BLOCK_ID_1 = 2,
  WALL_ID_1 = 4,
  LIQUID_ID_1 = 8,
  LIQUID_ID_2 = 16,
  BLOCK_ID_2 = 32,
  RLE_1 = 64,
  RLE_2 = 128,

  IS_WATER = 8,
  IS_LAVA = 16,
  IS_HONEY = 24,
  LIQUID_ID = 24, // LIQUID_ID_1 + LIQUID_ID_2
  LIQUID_ID_OFFSET = 3,
  RLE = 192,
  IS_NOT_EMPTY = 62, // BLOCK_ID + WALL_ID + LIQUID_ID_1 + LIQUID_ID_2 + BLOCK_ID_2
}

const enum FLAG_2 {
  FLAG_3_EXISTS = 1,
  IS_RED_WIRE = 2,
  IS_BLUE_WIRE = 4,
  IS_GREEN_WIRE = 8,
  SLOPE_ID_1 = 16,
  SLOPE_ID_2 = 32,
  SLOPE_ID_3 = 64,

  SLOPE_ID = 112, // SLOPE_ID_1 + SLOPE_ID_2 + SLOPE_ID_3
  SLOPE_ID_OFFSET = 4,
  IS_NOT_EMPTY = 126, //IS_RED_WIRE + IS_BLUE_WIRE + IS_GREEN_WIRE + SLOPE_ID_1 + SLOPE_ID_2 + SLOPE_ID_3
}

const enum FLAG_3 {
  FLAG_4_EXISTS = 1,
  IS_ACTUATOR = 2,
  IS_ACTUATED = 4,
  BLOCK_COLOR_ID = 8,
  WALL_COLOR_ID = 16,
  IS_YELLOW_WIRE = 32,
  WALL_ID_2 = 64,
  IS_SHIMMER_LIQUID = 128,

  IS_NOT_EMPTY = 126, // IS_ACTUATOR + IS_ACTUATED + BLOCK_COLOR_ID + WALL_COLOR_ID + IS_YELLOW_WIRE + WALL_ID_2
}

const enum FLAG_4 {
  IS_INVISIBLE_BLOCK = 2,
  IS_INVISIBLE_WALL = 4,
  IS_FULL_BRIGHT_BLOCK = 8,
  IS_FULL_BRIGHT_WALL = 16,
}

export default class WorldTilesIO implements Section.IODefinition<WorldTilesData> {
  private RLE!: number

  public parse(reader: BinaryReader, world: WorldProperties): WorldTilesData {
    const data = new WorldTilesData()
    this.RLE = 0

    data.tiles = new Array(world.width)

    for (let x = 0; x < world.width; x++) {
      data.tiles[x] = new Array(world.height)

      for (let y = 0; y < world.height; y++) {
        data.tiles[x][y] = this.parseTileData(reader, world)

        while (this.RLE) {
          data.tiles[x][y + 1] = data.tiles[x][y]
          y++
          this.RLE--
        }
      }
    }

    return data
  }

  public save(saver: BinarySaver, data: WorldTilesData, world: WorldProperties): void {
    const worldTilesCount = world.width * world.height

    for (let x = 0; x < world.width; x++) {
      for (let y = 0; y < world.height; ) {
        const tile = data.tiles[x][y]
        this.RLE = 0

        while (JSON.stringify(tile) === JSON.stringify(data.tiles[x][++y]) && y < world.height) {
          if (world.version >= 232 && (tile.blockId == 520 || tile.blockId == 423)) {
            break
          }

          this.RLE++
        }

        this.saveTileData(saver, world, tile)

        if (
          saver.progressCallback &&
          ((x * world.height + y) / worldTilesCount) * 100 > saver.progress + 1 &&
          saver.progress != 100
        ) {
          saver.progressCallback(++saver.progress)
        }
      }
    }
  }

  private parseTileData(reader: BinaryReader, world: WorldProperties): Tile {
    let tile: Tile = {}

    const flags1 = reader.readUInt8()
    let flags2 = 0,
      flags3 = 0,
      flags4 = 0

    if (flags1 & FLAG_1.FLAG_2_EXISTS) {
      flags2 = reader.readUInt8()

      if (flags2 & FLAG_2.FLAG_3_EXISTS) {
        flags3 = reader.readUInt8()

        if (flags3 & FLAG_3.FLAG_4_EXISTS) {
          flags4 = reader.readUInt8()
        }
      }
    }

    if (flags1 & FLAG_1.IS_NOT_EMPTY) {
      if (flags1 & FLAG_1.BLOCK_ID_1) {
        if (flags1 & FLAG_1.BLOCK_ID_2) {
          tile.blockId = reader.readUInt16()
        } else {
          tile.blockId = reader.readUInt8()
        }

        if (world.importants[tile.blockId]) {
          tile.frameX = reader.readInt16()
          tile.frameY = reader.readInt16()
          if (tile.blockId == 144) {
            tile.frameY = 0
          }
        }

        if (flags3 & FLAG_3.BLOCK_COLOR_ID) {
          tile.blockColor = reader.readUInt8()
        }
      }

      if (flags1 & FLAG_1.WALL_ID_1) {
        tile.wallId = reader.readUInt8()

        if (flags3 & FLAG_3.WALL_COLOR_ID) {
          tile.wallColor = reader.readUInt8()
        }
      }

      const liquidType = (flags1 & FLAG_1.LIQUID_ID) >> FLAG_1.LIQUID_ID_OFFSET
      if (liquidType) {
        tile.liquidAmount = reader.readUInt8()

        if (flags3 & FLAG_3.IS_SHIMMER_LIQUID) {
          tile.liquidType = Liquid.Shimmer
        } else {
          tile.liquidType = liquidType as Liquid
        }
      }
    }

    if (flags2) {
      if (flags2 & FLAG_2.IS_NOT_EMPTY) {
        if (flags2 & FLAG_2.IS_RED_WIRE) {
          tile.wireRed = true
        }

        if (flags2 & FLAG_2.IS_BLUE_WIRE) {
          tile.wireBlue = true
        }

        if (flags2 & FLAG_2.IS_GREEN_WIRE) {
          tile.wireGreen = true
        }

        const slope = (flags2 & FLAG_2.SLOPE_ID) >> FLAG_2.SLOPE_ID_OFFSET
        if (slope) {
          tile.slope = slope as Slope
        }
      }

      if (flags3) {
        if (flags3 & FLAG_3.IS_NOT_EMPTY) {
          if (flags3 & FLAG_3.IS_ACTUATOR) {
            tile.actuator = true
          }

          if (flags3 & FLAG_3.IS_ACTUATED) {
            tile.actuated = true
          }

          if (flags3 & FLAG_3.IS_YELLOW_WIRE) {
            tile.wireYellow = true
          }

          if (flags3 & FLAG_3.WALL_ID_2) {
            // we don't have more than 512 wall ids
            reader.skipBytes(1)
            tile.wallId = 256 + tile.wallId!
          }
        }

        if (flags4) {
          if (flags4 & FLAG_4.IS_INVISIBLE_BLOCK) {
            tile.invisibleBlock = true
          }

          if (flags4 & FLAG_4.IS_INVISIBLE_WALL) {
            tile.invisibleWall = true
          }

          if (flags4 & FLAG_4.IS_FULL_BRIGHT_BLOCK) {
            tile.fullBrightBlock = true
          }

          if (flags4 & FLAG_4.IS_FULL_BRIGHT_WALL) {
            tile.fullBrightWall = true
          }
        }
      }
    }

    switch (flags1 & FLAG_1.RLE) {
      case FLAG_1.RLE_1:
        this.RLE = reader.readUInt8()
        break
      case FLAG_1.RLE_2:
        this.RLE = reader.readInt16()
        break
    }

    return tile
  }

  private saveTileData(saver: BinarySaver, world: WorldProperties, tile: Tile): void {
    let flags1 = 0,
      flags2 = 0,
      flags3 = 0,
      flags4 = 0

    if (this.RLE) {
      flags1 |= this.RLE > 255 ? FLAG_1.RLE_2 : FLAG_1.RLE_1
    }

    if (tile.blockId! >= 0) {
      flags1 |= FLAG_1.BLOCK_ID_1

      if (tile.blockId! > 255) {
        flags1 |= FLAG_1.BLOCK_ID_2
      }
    }

    if (tile.wallId) {
      flags1 |= FLAG_1.WALL_ID_1

      if (tile.wallId > 255) {
        flags3 |= FLAG_3.WALL_ID_2
      }
    }

    if (tile.liquidAmount) {
      if (tile.liquidType == 4) {
        flags1 |= FLAG_1.IS_WATER
        flags3 |= FLAG_3.IS_SHIMMER_LIQUID
      } else {
        flags1 |= tile.liquidType! << FLAG_1.LIQUID_ID_OFFSET
      }
    }

    if (tile.slope) {
      flags2 |= tile.slope << FLAG_2.SLOPE_ID_OFFSET
    }

    flags2 |= tile.wireRed ? FLAG_2.IS_RED_WIRE : 0
    flags2 |= tile.wireBlue ? FLAG_2.IS_BLUE_WIRE : 0
    flags2 |= tile.wireGreen ? FLAG_2.IS_GREEN_WIRE : 0
    flags3 |= tile.wireYellow ? FLAG_3.IS_YELLOW_WIRE : 0
    flags3 |= tile.actuator ? FLAG_3.IS_ACTUATOR : 0
    flags3 |= tile.actuated ? FLAG_3.IS_ACTUATED : 0
    flags3 |= tile.blockColor ? FLAG_3.BLOCK_COLOR_ID : 0
    flags3 |= tile.wallColor ? FLAG_3.WALL_COLOR_ID : 0
    flags4 |= tile.invisibleBlock ? FLAG_4.IS_INVISIBLE_BLOCK : 0
    flags4 |= tile.invisibleWall ? FLAG_4.IS_INVISIBLE_WALL : 0
    flags4 |= tile.fullBrightBlock ? FLAG_4.IS_FULL_BRIGHT_BLOCK : 0
    flags4 |= tile.fullBrightWall ? FLAG_4.IS_FULL_BRIGHT_WALL : 0

    if (flags4) {
      saver.saveUInt8(flags1 | FLAG_1.FLAG_2_EXISTS)
      saver.saveUInt8(flags2 | FLAG_2.FLAG_3_EXISTS)
      saver.saveUInt8(flags3 | FLAG_3.FLAG_4_EXISTS)
      saver.saveUInt8(flags4)
    } else if (flags3) {
      saver.saveUInt8(flags1 | FLAG_1.FLAG_2_EXISTS)
      saver.saveUInt8(flags2 | FLAG_2.FLAG_3_EXISTS)
      saver.saveUInt8(flags3)
    } else if (flags2) {
      saver.saveUInt8(flags1 | FLAG_1.FLAG_2_EXISTS)
      saver.saveUInt8(flags2)
    } else {
      saver.saveUInt8(flags1)
    }

    if (flags1 & FLAG_1.BLOCK_ID_1) {
      if (flags1 & FLAG_1.BLOCK_ID_2) {
        saver.saveUInt16(tile.blockId!)
      } else {
        saver.saveUInt8(tile.blockId!)
      }

      if (world.importants[tile.blockId!]) {
        saver.saveInt16(tile.frameX!)
        saver.saveInt16(tile.frameY!)
      }

      if (flags3 & FLAG_3.BLOCK_COLOR_ID) {
        saver.saveUInt8(tile.blockColor!)
      }
    }

    if (flags1 & FLAG_1.WALL_ID_1) {
      saver.saveUInt8(tile.wallId!)

      if (flags3 & FLAG_3.WALL_COLOR_ID) {
        saver.saveUInt8(tile.wallColor!)
      }
    }

    if (tile.liquidAmount) {
      saver.saveUInt8(tile.liquidAmount)
    }

    if (flags3 & FLAG_3.WALL_ID_2) {
      // we don't have more than 512 wall ids
      saver.saveUInt8(1)
    }

    if (this.RLE > 255) {
      saver.saveUInt16(this.RLE)
    } else if (this.RLE) {
      saver.saveUInt8(this.RLE)
    }
  }
}
