import type BinaryReader from '../BinaryReader'
import type { Item, ItemSlot } from './Chests'

export interface TileEntity {
  type: TileEntityType
  id: number
  position: {
    x: number
    y: number
  }
}

export interface TrainingDummy extends TileEntity {
  trainingDummy: {
    npc: number
  }
}

export interface ItemFrame extends TileEntity {
  itemFrame: Item
}

export interface LogicSensor extends TileEntity {
  logicSensor: {
    logicCheck: number
    on: boolean
  }
}

export interface DisplayDoll extends TileEntity {
  displayDoll: {
    items?: ItemSlot[]
    dyes?: ItemSlot[]
  }
}

export enum DisplayDollSlot {
  Armor_Head,
  Armor_Shirt,
  Armor_Legs,
  Acc_1,
  Acc_2,
  Acc_3,
  Acc_4,
  Acc_5,
}

export interface WeaponsRack extends TileEntity {
  weaponsRack: Item
}

export interface HatRack extends TileEntity {
  hatRack: {
    items?: ItemSlot[]
    dyes?: ItemSlot[]
  }
}

export enum HatRackSlot {
  LeftHat,
  RightHat,
}

export interface FoodPlatter extends TileEntity {
  foodPlatter: Item
}

export interface Pylon extends TileEntity {}

export enum TileEntityType {
  TrainingDummy,
  ItemFrame,
  LogicSensor,
  DisplayDoll,
  WeaponsRack,
  HatRack,
  FoodPlatter,
  Pylon,
}

export default function parseTileEntities(reader: BinaryReader) {
  return reader.readArray(reader.readInt32(), () => parseEntity(reader))
}

function parseEntity(reader: BinaryReader) {
  const entity: TileEntity = {
    type: reader.readUInt8() as TileEntityType,
    id: reader.readInt32(),
    position: {
      x: reader.readInt16(),
      y: reader.readInt16(),
    },
  }

  switch (entity.type) {
    case TileEntityType.TrainingDummy:
      return { ...entity, ...parseTrainingDummy(reader) } as TrainingDummy
    case TileEntityType.ItemFrame:
      return { ...entity, ...parseItemFrame(reader) } as ItemFrame
    case TileEntityType.LogicSensor:
      return { ...entity, ...parseLogicSensor(reader) } as LogicSensor
    case TileEntityType.DisplayDoll:
      return { ...entity, ...parseDisplayDoll(reader) } as DisplayDoll
    case TileEntityType.WeaponsRack:
      return { ...entity, ...parseWeaponsRack(reader) } as WeaponsRack
    case TileEntityType.HatRack:
      return { ...entity, ...parseHatRack(reader) } as HatRack
    case TileEntityType.FoodPlatter:
      return { ...entity, ...parseFoodPlatter(reader) } as FoodPlatter
    case TileEntityType.Pylon:
      return entity as Pylon
    default:
      return entity
  }
}

function parseTrainingDummy(reader: BinaryReader): Partial<TrainingDummy> {
  return {
    trainingDummy: {
      npc: reader.readInt16(),
    },
  }
}

function parseItemFrame(reader: BinaryReader): Partial<ItemFrame> {
  return {
    itemFrame: parseItem(reader),
  }
}

function parseLogicSensor(reader: BinaryReader): Partial<LogicSensor> {
  return {
    logicSensor: {
      logicCheck: reader.readUInt8(),
      on: reader.readBoolean(),
    },
  }
}

function parseDisplayDoll(reader: BinaryReader): Partial<DisplayDoll> {
  const items = reader.readBits(8),
    dyes = reader.readBits(8)

  return {
    displayDoll: {
      items: items.map((bit): ItemSlot => (bit ? parseItem(reader) : null)),
      dyes: dyes.map((bit): ItemSlot => (bit ? parseItem(reader) : null)),
    },
  }
}

function parseWeaponsRack(reader: BinaryReader): Partial<WeaponsRack> {
  return {
    weaponsRack: parseItem(reader),
  }
}

function parseHatRack(reader: BinaryReader): Partial<HatRack> {
  const items = reader.readBits(8),
    dyes = reader.readBits(8)

  return {
    hatRack: {
      items: items.map((bit): ItemSlot => (bit ? parseItem(reader) : null)),
      dyes: dyes.map((bit): ItemSlot => (bit ? parseItem(reader) : null)),
    },
  }
}

function parseFoodPlatter(reader: BinaryReader): Partial<FoodPlatter> {
  return {
    foodPlatter: parseItem(reader),
  }
}

function parseItem(reader: BinaryReader): Item {
  return {
    id: reader.readInt16(),
    prefix: reader.readUInt8(),
    stack: reader.readInt16(),
  }
}

//
// saveTileEntities() {
//   const data = this.world.tileEntities
//
//   this.saver.saveInt32(data.length)
//
//   data.forEach((tileEntity) => {
//     if (tileEntity.targetDummy) this.saver.saveUInt8(0)
//     else if (tileEntity.itemFrame) this.saver.saveUInt8(1)
//     else if (tileEntity.logicSensor) this.saver.saveUInt8(2)
//     else if (tileEntity.displayDoll) this.saver.saveUInt8(3)
//     else if (tileEntity.weaponsRack) this.saver.saveUInt8(4)
//     else if (tileEntity.hatRack) this.saver.saveUInt8(5)
//     else if (tileEntity.foodPlatter) this.saver.saveUInt8(6)
//     else if (tileEntity.teleportationPylon) this.saver.saveUInt8(7)
//
//     this.saver.saveInt32(tileEntity.id)
//     this.saver.saveInt16(tileEntity.position.x)
//     this.saver.saveInt16(tileEntity.position.y)
//
//     if (tileEntity.targetDummy) {
//       this.saver.saveInt16(tileEntity.targetDummy.npc)
//     } else if (tileEntity.itemFrame) {
//       this.saver.saveInt16(tileEntity.itemFrame.itemId)
//       this.saver.saveUInt8(tileEntity.itemFrame.prefix)
//       this.saver.saveInt16(tileEntity.itemFrame.stack)
//     } else if (tileEntity.logicSensor) {
//       this.saver.saveUInt8(tileEntity.logicSensor.logicCheck)
//       this.saver.saveBoolean(tileEntity.logicSensor.on)
//     } else if (tileEntity.displayDoll) {
//       let itemsBits = [],
//         dyesBits = []
//
//       if (tileEntity.displayDoll.items)
//         for (let i = 0; i < 8; i++) itemsBits[i] = tileEntity.displayDoll.items[i] ? true : false
//       this.saver.saveBitsByte(itemsBits)
//
//       if (tileEntity.displayDoll.dyes)
//         for (let i = 0; i < 8; i++) dyesBits[i] = tileEntity.displayDoll.dyes[i] ? true : false
//       this.saver.saveBitsByte(dyesBits)
//
//       for (let j = 0; j < 8; j++)
//         if (itemsBits[j]) {
//           this.saver.saveInt16(tileEntity.displayDoll.items[j].itemId)
//           this.saver.saveUInt8(tileEntity.displayDoll.items[j].prefix)
//           this.saver.saveInt16(tileEntity.displayDoll.items[j].stack)
//         }
//
//       for (let j = 0; j < 8; j++)
//         if (dyesBits[j]) {
//           this.saver.saveInt16(tileEntity.displayDoll.dyes[j].itemId)
//           this.saver.saveUInt8(tileEntity.displayDoll.dyes[j].prefix)
//           this.saver.saveInt16(tileEntity.displayDoll.dyes[j].stack)
//         }
//     } else if (tileEntity.weaponsRack) {
//       this.saver.saveInt16(tileEntity.weaponsRack.itemId)
//       this.saver.saveUInt8(tileEntity.weaponsRack.prefix)
//       this.saver.saveInt16(tileEntity.weaponsRack.stack)
//     } else if (tileEntity.hatRack) {
//       let itemsBits = [],
//         dyesBits = []
//
//       if (tileEntity.hatRack.items)
//         for (let i = 0; i < 2; i++) itemsBits[i] = tileEntity.hatRack.items[i] ? true : false
//
//       if (tileEntity.hatRack.dyes) for (let i = 0; i < 2; i++) dyesBits[i] = tileEntity.hatRack.dyes[i] ? true : false
//
//       this.saver.saveBitsByte([...itemsBits, ...dyesBits])
//
//       for (let j = 0; j < 2; j++)
//         if (itemsBits[j]) {
//           this.saver.saveInt16(tileEntity.hatRack.items[j].itemId)
//           this.saver.saveUInt8(tileEntity.hatRack.items[j].prefix)
//           this.saver.saveInt16(tileEntity.hatRack.items[j].stack)
//         }
//
//       for (let j = 0; j < 2; j++)
//         if (dyesBits[j]) {
//           this.saver.saveInt16(tileEntity.hatRack.dyes[j].itemId)
//           this.saver.saveUInt8(tileEntity.hatRack.dyes[j].prefix)
//           this.saver.saveInt16(tileEntity.hatRack.dyes[j].stack)
//         }
//     } else if (tileEntity.foodPlatter) {
//       this.saver.saveInt16(tileEntity.foodPlatter.itemId)
//       this.saver.saveUInt8(tileEntity.foodPlatter.prefix)
//       this.saver.saveInt16(tileEntity.foodPlatter.stack)
//     }
//   })
//
//   return this.saver.getPosition()
// }
