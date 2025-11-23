import type BinaryReader from '../BinaryReader'

export type TownRoom = {
  NPCId: number
  position: {
    x: number
    y: number
  }
}
export default function parseTownManager(reader: BinaryReader) {
  return reader.readArray(reader.readInt32(), () => parseTownRoom(reader))
}

function parseTownRoom(reader: BinaryReader): TownRoom {
  return {
    NPCId: reader.readInt32(),
    position: {
      x: reader.readInt32(),
      y: reader.readInt32(),
    },
  }
}

// saveTownManager() {
//   const data = this.world.rooms
//
//   this.saver.saveInt32(data.length)
//
//   data.forEach((room) => {
//     this.saver.saveInt32(room.NPCId)
//     this.saver.saveInt32(room.position.x)
//     this.saver.saveInt32(room.position.y)
//   })
//
//   return this.saver.getPosition()
// }
//
