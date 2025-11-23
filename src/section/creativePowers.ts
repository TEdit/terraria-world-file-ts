import type BinaryReader from '../BinaryReader'

export enum CreativePowerType {
  FreezeTime,
  StartDayImmediately,
  StartNoonImmediately,
  StartNightImmediately,
  StartMidnightImmediately,
  GodModePower,
  ModifyWindDirectionAndStrength,
  ModifyRainPower,
  ModifyTimeRate,
  FreezeRainPower,
  FreezeWindDirectionAndStrength,
  FarPlacementRangePower,
  DifficultySliderPower,
  StopBiomeSpreadPower,
  SpawnRateSliderPerPlayerPower,
}

export default function parseCreativePowers(reader: BinaryReader) {
  return Object.fromEntries(
    reader.readArrayUntil(
      () => reader.readBoolean(),
      () => parseCreativePower(reader),
    ),
  )
}

function parseCreativePower(reader: BinaryReader): [string, number | boolean] {
  let type = reader.readUInt16(),
    typeName = CreativePowerType[type]

  switch (type) {
    case CreativePowerType.FreezeTime:
      return [typeName, reader.readBoolean()]
    case CreativePowerType.ModifyTimeRate:
      return [typeName, reader.readFloat32()]
    case CreativePowerType.FreezeRainPower:
      return [typeName, reader.readBoolean()]
    case CreativePowerType.FreezeWindDirectionAndStrength:
      return [typeName, reader.readBoolean()]
    case CreativePowerType.DifficultySliderPower:
      return [typeName, reader.readFloat32()]
    case CreativePowerType.StopBiomeSpreadPower:
      return [typeName, reader.readBoolean()]
    default:
      return ['unknown', 0]
  }
}

// saveCreativePowers() {
//   const creativePowers = this.world.creativePowers
//
//   this.saver.saveBoolean(true)
//   this.saver.saveInt16(0)
//   this.saver.saveBoolean(creativePowers.freezeTime)
//
//   this.saver.saveBoolean(true)
//   this.saver.saveInt16(8)
//   this.saver.saveFloat32(creativePowers.modifyTimeRate)
//
//   this.saver.saveBoolean(true)
//   this.saver.saveInt16(9)
//   this.saver.saveBoolean(creativePowers.freezeRainPower)
//
//   this.saver.saveBoolean(true)
//   this.saver.saveInt16(10)
//   this.saver.saveBoolean(creativePowers.freezeWindDirectionAndStrength)
//
//   this.saver.saveBoolean(true)
//   this.saver.saveInt16(12)
//   this.saver.saveFloat32(creativePowers.difficultySliderPower)
//
//   this.saver.saveBoolean(true)
//   this.saver.saveInt16(13)
//   this.saver.saveBoolean(creativePowers.stopBiomeSpreadPower)
//
//   this.saver.saveBoolean(false)
//
//   return this.saver.getPosition()
// }
//
