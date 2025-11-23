import type BinaryReader from '../BinaryReader'

export type Bestiary = {
  NPCKills: { [k: string]: number }
  NPCSights: { [k: number]: string }
  NPCChats: { [k: number]: string }
}
export default function parseBestiary(reader: BinaryReader): Bestiary {
  return {
    NPCKills: Object.fromEntries(reader.readArray(reader.readInt32(), () => [reader.readString(), reader.readInt32()])),
    NPCSights: reader.readArray(reader.readInt32(), () => reader.readString()),
    NPCChats: reader.readArray(reader.readInt32(), () => reader.readString()),
  }
}

// saveBestiary() {
//   const data = this.world.bestiary
//
//   data.NPCKills = Object.entries(data.NPCKills)
//
//   this.saver.saveInt32(data.NPCKills.length)
//   for (let i = 0; i < data.NPCKills.length; i++) {
//     this.saver.saveString(data.NPCKills[i][0])
//     this.saver.saveInt32(data.NPCKills[i][1])
//   }
//
//   this.saver.saveInt32(data.NPCSights.length)
//   for (let i = 0; i < data.NPCSights.length; i++) this.saver.saveString(data.NPCSights[i])
//
//   this.saver.saveInt32(data.NPCChats.length)
//   for (let i = 0; i < data.NPCChats.length; i++) this.saver.saveString(data.NPCChats[i])
//
//   return this.saver.getPosition()
// }
//
