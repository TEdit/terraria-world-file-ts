import type BinaryReader from '../BinaryReader'
import type { WorldProperties } from '../FileReader'
import type BinarySaver from '../BinarySaver'
import type { Section } from '../sections'
import type { GameMode } from '../types'

export class HeaderData {
  public mapName = ''
  public seedText = ''
  public worldGeneratorVersion = new Uint8Array(8)
  public guid = new Uint8Array(16)
  public worldId = 0
  public leftWorld = 0
  public rightWorld = 0
  public topWorld = 0
  public bottomWorld = 0
  public maxTilesY = 0
  public maxTilesX = 0
  public gameMode = 0 as GameMode
  public drunkWorld = false
  public getGoodWorld = false
  public getTenthAnniversaryWorld = false
  public dontStarveWorld = false
  public notTheBeesWorld = false
  public remixWorld = false
  public noTrapsWorld = false
  public zenithWorld = false
  public expertMode = false
  public creationTime = new Uint8Array(8)
  public moonType = 0
  public treeX = [0, 0, 0] as [number, number, number]
  public treeStyle = [0, 0, 0, 0] as [number, number, number, number]
  public caveBackX = [0, 0, 0] as [number, number, number]
  public caveBackStyle = [0, 0, 0, 0] as [number, number, number, number]
  public iceBackStyle = 0
  public jungleBackStyle = 0
  public hellBackStyle = 0
  public spawnTileX = 0
  public spawnTileY = 0
  public worldSurface = 0
  public rockLayer = 0
  public tempTime = 0
  public tempDayTime = false
  public tempMoonPhase = 0
  public tempBloodMoon = false
  public tempEclipse = false
  public dungeonX = 0
  public dungeonY = 0
  public crimson = false
  public downedBoss1 = false
  public downedBoss2 = false
  public downedBoss3 = false
  public downedQueenBee = false
  public downedMechBoss1 = false
  public downedMechBoss2 = false
  public downedMechBoss3 = false
  public downedMechBossAny = false
  public downedPlantBoss = false
  public downedGolemBoss = false
  public downedSlimeKing = false
  public savedGoblin = false
  public savedWizard = false
  public savedMech = false
  public downedGoblins = false
  public downedClown = false
  public downedFrost = false
  public downedPirates = false
  public shadowOrbSmashed = false
  public spawnMeteor = false
  public shadowOrbCount = 0
  public altarCount = 0
  public hardMode = false
  public afterPartyOfDoom = false
  public invasionDelay = 0
  public invasionSize = 0
  public invasionType = 0
  public invasionX = 0
  public slimeRainTime = 0
  public sundialCooldown = 0
  public tempRaining = false
  public tempRainTime = 0
  public tempMaxRain = 0
  public oreTier1 = 0
  public oreTier2 = 0
  public oreTier3 = 0
  public setBG0 = 0
  public setBG1 = 0
  public setBG2 = 0
  public setBG3 = 0
  public setBG4 = 0
  public setBG5 = 0
  public setBG6 = 0
  public setBG7 = 0
  public cloudBGActive = 0
  public numClouds = 0
  public windSpeed = 0
  public anglerWhoFinishedToday = [] as string[]
  public savedAngler = false
  public anglerQuest = 0
  public savedStylist = false
  public savedTaxCollector = false
  public savedGolfer = false
  public invasionSizeStart = 0
  public tempCultistDelay = 0
  public killCount = [] as number[]
  public fastForwardTimeToDawn = false
  public downedFishron = false
  public downedMartians = false
  public downedAncientCultist = false
  public downedMoonlord = false
  public downedHalloweenKing = false
  public downedHalloweenTree = false
  public downedChristmasIceQueen = false
  public downedChristmasSantank = false
  public downedChristmasTree = false
  public downedTowerSolar = false
  public downedTowerVortex = false
  public downedTowerNebula = false
  public downedTowerStardust = false
  public TowerActiveSolar = false
  public TowerActiveVortex = false
  public TowerActiveNebula = false
  public TowerActiveStardust = false
  public LunarApocalypseIsUp = false
  public tempPartyManual = false
  public tempPartyGenuine = false
  public tempPartyCooldown = 0
  public tempPartyCelebratingNPCs = [] as number[]
  public Temp_Sandstorm_Happening = false
  public Temp_Sandstorm_TimeLeft = 0
  public Temp_Sandstorm_Severity = 0
  public Temp_Sandstorm_IntendedSeverity = 0
  public savedBartender = false
  public DD2Event_DownedInvasionT1 = false
  public DD2Event_DownedInvasionT2 = false
  public DD2Event_DownedInvasionT3 = false
  public setBG8 = 0
  public setBG9 = 0
  public setBG10 = 0
  public setBG11 = 0
  public setBG12 = 0
  public combatBookWasUsed = false
  public lanternNightCooldown = 0
  public lanternNightGenuine = false
  public lanternNightManual = false
  public lanternNightNextNightIsGenuine = false
  public treeTopsVariations = [] as number[]
  public forceHalloweenForToday = false
  public forceXMasForToday = false
  public savedOreTierCopper = 0
  public savedOreTierIron = 0
  public savedOreTierSilver = 0
  public savedOreTierGold = 0
  public boughtCat = false
  public boughtDog = false
  public boughtBunny = false
  public downedEmpressOfLight = false
  public downedQueenSlime = false
  public downedDeerclops = false
  public unlockedSlimeBlueSpawn = false
  public unlockedMerchantSpawn = false
  public unlockedDemolitionistSpawn = false
  public unlockedPartyGirlSpawn = false
  public unlockedDyeTraderSpawn = false
  public unlockedTruffleSpawn = false
  public unlockedArmsDealerSpawn = false
  public unlockedNurseSpawn = false
  public unlockedPrincessSpawn = false
  public combatBookVolumeTwoWasUsed = false
  public peddlersSatchelWasUsed = false
  public unlockedSlimeGreenSpawn = false
  public unlockedSlimeOldSpawn = false
  public unlockedSlimePurpleSpawn = false
  public unlockedSlimeRainbowSpawn = false
  public unlockedSlimeRedSpawn = false
  public unlockedSlimeYellowSpawn = false
  public unlockedSlimeCopperSpawn = false
  public fastForwardTimeToDusk = false
  public moondialCooldown = 0
}

export default class HeaderIO implements Section.IODefinition<HeaderData> {
  public parse(reader: BinaryReader, world: WorldProperties): HeaderData {
    const isV140 = world.version >= 225
    const isV144 = world.version >= 269

    const data = new HeaderData()

    data.mapName = reader.readString()
    data.seedText = reader.readString()
    data.worldGeneratorVersion = reader.readBytes(8)
    data.guid = reader.readBytes(16)
    data.worldId = reader.readInt32()
    data.leftWorld = reader.readInt32()
    data.rightWorld = reader.readInt32()
    data.topWorld = reader.readInt32()
    data.bottomWorld = reader.readInt32()
    data.maxTilesY = reader.readInt32()
    data.maxTilesX = reader.readInt32()
    data.gameMode = Number(isV140 && reader.readInt32()) as GameMode
    data.drunkWorld = isV140 && reader.readBoolean()
    data.getGoodWorld = world.version >= 227 && reader.readBoolean()
    data.getTenthAnniversaryWorld = world.version >= 238 && reader.readBoolean()
    data.dontStarveWorld = world.version >= 239 && reader.readBoolean()
    data.notTheBeesWorld = world.version >= 241 && reader.readBoolean()
    data.remixWorld = world.version >= 249 && reader.readBoolean()
    data.noTrapsWorld = world.version >= 266 && reader.readBoolean()
    data.zenithWorld = world.version >= 267 && reader.readBoolean()
    data.expertMode = !isV140 && reader.readBoolean()
    data.creationTime = reader.readBytes(8)
    data.moonType = reader.readUInt8()
    data.treeX = [reader.readInt32(), reader.readInt32(), reader.readInt32()]
    data.treeStyle = [reader.readInt32(), reader.readInt32(), reader.readInt32(), reader.readInt32()]
    data.caveBackX = [reader.readInt32(), reader.readInt32(), reader.readInt32()]
    data.caveBackStyle = [reader.readInt32(), reader.readInt32(), reader.readInt32(), reader.readInt32()]
    data.iceBackStyle = reader.readInt32()
    data.jungleBackStyle = reader.readInt32()
    data.hellBackStyle = reader.readInt32()
    data.spawnTileX = reader.readInt32()
    data.spawnTileY = reader.readInt32()
    data.worldSurface = reader.readFloat64()
    data.rockLayer = reader.readFloat64()
    data.tempTime = reader.readFloat64()
    data.tempDayTime = reader.readBoolean()
    data.tempMoonPhase = reader.readInt32()
    data.tempBloodMoon = reader.readBoolean()
    data.tempEclipse = reader.readBoolean()
    data.dungeonX = reader.readInt32()
    data.dungeonY = reader.readInt32()
    data.crimson = reader.readBoolean()
    data.downedBoss1 = reader.readBoolean()
    data.downedBoss2 = reader.readBoolean()
    data.downedBoss3 = reader.readBoolean()
    data.downedQueenBee = reader.readBoolean()
    data.downedMechBoss1 = reader.readBoolean()
    data.downedMechBoss2 = reader.readBoolean()
    data.downedMechBoss3 = reader.readBoolean()
    data.downedMechBossAny = reader.readBoolean()
    data.downedPlantBoss = reader.readBoolean()
    data.downedGolemBoss = reader.readBoolean()
    data.downedSlimeKing = reader.readBoolean()
    data.savedGoblin = reader.readBoolean()
    data.savedWizard = reader.readBoolean()
    data.savedMech = reader.readBoolean()
    data.downedGoblins = reader.readBoolean()
    data.downedClown = reader.readBoolean()
    data.downedFrost = reader.readBoolean()
    data.downedPirates = reader.readBoolean()
    data.shadowOrbSmashed = reader.readBoolean()
    data.spawnMeteor = reader.readBoolean()
    data.shadowOrbCount = reader.readUInt8()
    data.altarCount = reader.readInt32()
    data.hardMode = reader.readBoolean()
    data.afterPartyOfDoom = world.version >= 257 && reader.readBoolean()
    data.invasionDelay = reader.readInt32()
    data.invasionSize = reader.readInt32()
    data.invasionType = reader.readInt32()
    data.invasionX = reader.readFloat64()
    data.slimeRainTime = reader.readFloat64()
    data.sundialCooldown = reader.readUInt8()
    data.tempRaining = reader.readBoolean()
    data.tempRainTime = reader.readInt32()
    data.tempMaxRain = reader.readFloat32()
    data.oreTier1 = reader.readInt32()
    data.oreTier2 = reader.readInt32()
    data.oreTier3 = reader.readInt32()
    data.setBG0 = reader.readUInt8()
    data.setBG1 = reader.readUInt8()
    data.setBG2 = reader.readUInt8()
    data.setBG3 = reader.readUInt8()
    data.setBG4 = reader.readUInt8()
    data.setBG5 = reader.readUInt8()
    data.setBG6 = reader.readUInt8()
    data.setBG7 = reader.readUInt8()
    data.cloudBGActive = reader.readInt32()
    data.numClouds = reader.readInt16()
    data.windSpeed = reader.readFloat32()
    data.anglerWhoFinishedToday = reader.readArray(reader.readInt32(), () => reader.readString())
    data.savedAngler = reader.readBoolean()
    data.anglerQuest = reader.readInt32()
    data.savedStylist = reader.readBoolean()
    data.savedTaxCollector = reader.readBoolean()
    data.savedGolfer = isV140 && reader.readBoolean()
    data.invasionSizeStart = reader.readInt32()
    data.tempCultistDelay = reader.readInt32()
    data.killCount = reader.readArray(reader.readInt16(), () => reader.readInt32())
    data.fastForwardTimeToDawn = reader.readBoolean()
    data.downedFishron = reader.readBoolean()
    data.downedMartians = reader.readBoolean()
    data.downedAncientCultist = reader.readBoolean()
    data.downedMoonlord = reader.readBoolean()
    data.downedHalloweenKing = reader.readBoolean()
    data.downedHalloweenTree = reader.readBoolean()
    data.downedChristmasIceQueen = reader.readBoolean()
    data.downedChristmasSantank = reader.readBoolean()
    data.downedChristmasTree = reader.readBoolean()
    data.downedTowerSolar = reader.readBoolean()
    data.downedTowerVortex = reader.readBoolean()
    data.downedTowerNebula = reader.readBoolean()
    data.downedTowerStardust = reader.readBoolean()
    data.TowerActiveSolar = reader.readBoolean()
    data.TowerActiveVortex = reader.readBoolean()
    data.TowerActiveNebula = reader.readBoolean()
    data.TowerActiveStardust = reader.readBoolean()
    data.LunarApocalypseIsUp = reader.readBoolean()
    data.tempPartyManual = reader.readBoolean()
    data.tempPartyGenuine = reader.readBoolean()
    data.tempPartyCooldown = reader.readInt32()
    data.tempPartyCelebratingNPCs = reader.readArray(reader.readInt32(), () => reader.readInt32())
    data.Temp_Sandstorm_Happening = reader.readBoolean()
    data.Temp_Sandstorm_TimeLeft = reader.readInt32()
    data.Temp_Sandstorm_Severity = reader.readFloat32()
    data.Temp_Sandstorm_IntendedSeverity = reader.readFloat32()
    data.savedBartender = reader.readBoolean()
    data.DD2Event_DownedInvasionT1 = reader.readBoolean()
    data.DD2Event_DownedInvasionT2 = reader.readBoolean()
    data.DD2Event_DownedInvasionT3 = reader.readBoolean()
    data.setBG8 = Number(isV140 && reader.readUInt8())
    data.setBG9 = Number(isV140 && reader.readUInt8())
    data.setBG10 = Number(isV140 && reader.readUInt8())
    data.setBG11 = Number(isV140 && reader.readUInt8())
    data.setBG12 = Number(isV140 && reader.readUInt8())
    data.combatBookWasUsed = isV140 && reader.readBoolean()
    data.lanternNightCooldown = Number(isV140 && reader.readInt32())
    data.lanternNightGenuine = isV140 && reader.readBoolean()
    data.lanternNightManual = isV140 && reader.readBoolean()
    data.lanternNightNextNightIsGenuine = isV140 && reader.readBoolean()
    data.treeTopsVariations = isV140 ? reader.readArray(reader.readInt32(), () => reader.readInt32()) : []
    data.forceHalloweenForToday = isV140 && reader.readBoolean()
    data.forceXMasForToday = isV140 && reader.readBoolean()
    data.savedOreTierCopper = Number(isV140 && reader.readInt32())
    data.savedOreTierIron = Number(isV140 && reader.readInt32())
    data.savedOreTierSilver = Number(isV140 && reader.readInt32())
    data.savedOreTierGold = Number(isV140 && reader.readInt32())
    data.boughtCat = isV140 && reader.readBoolean()
    data.boughtDog = isV140 && reader.readBoolean()
    data.boughtBunny = isV140 && reader.readBoolean()
    data.downedEmpressOfLight = isV140 && reader.readBoolean()
    data.downedQueenSlime = isV140 && reader.readBoolean()
    data.downedDeerclops = world.version >= 240 && reader.readBoolean()
    data.unlockedSlimeBlueSpawn = isV144 && reader.readBoolean()
    data.unlockedMerchantSpawn = isV144 && reader.readBoolean()
    data.unlockedDemolitionistSpawn = isV144 && reader.readBoolean()
    data.unlockedPartyGirlSpawn = isV144 && reader.readBoolean()
    data.unlockedDyeTraderSpawn = isV144 && reader.readBoolean()
    data.unlockedTruffleSpawn = isV144 && reader.readBoolean()
    data.unlockedArmsDealerSpawn = isV144 && reader.readBoolean()
    data.unlockedNurseSpawn = isV144 && reader.readBoolean()
    data.unlockedPrincessSpawn = isV144 && reader.readBoolean()
    data.combatBookVolumeTwoWasUsed = isV144 && reader.readBoolean()
    data.peddlersSatchelWasUsed = isV144 && reader.readBoolean()
    data.unlockedSlimeGreenSpawn = isV144 && reader.readBoolean()
    data.unlockedSlimeOldSpawn = isV144 && reader.readBoolean()
    data.unlockedSlimePurpleSpawn = isV144 && reader.readBoolean()
    data.unlockedSlimeRainbowSpawn = isV144 && reader.readBoolean()
    data.unlockedSlimeRedSpawn = isV144 && reader.readBoolean()
    data.unlockedSlimeYellowSpawn = isV144 && reader.readBoolean()
    data.unlockedSlimeCopperSpawn = isV144 && reader.readBoolean()
    data.fastForwardTimeToDusk = isV144 && reader.readBoolean()
    data.moondialCooldown = Number(isV144 && reader.readUInt8())

    return data
  }

  public save(saver: BinarySaver, data: HeaderData, world: WorldProperties): void {
    saver.saveString(data.mapName)
    saver.saveString(data.seedText)
    saver.saveBytes(data.worldGeneratorVersion)
    saver.saveBytes(data.guid)
    saver.saveInt32(data.worldId)
    saver.saveInt32(data.leftWorld)
    saver.saveInt32(data.rightWorld)
    saver.saveInt32(data.topWorld)
    saver.saveInt32(data.bottomWorld)
    saver.saveInt32(data.maxTilesY)
    saver.saveInt32(data.maxTilesX)
    if (world.version >= 225) {
      saver.saveInt32(data.gameMode)
      saver.saveBoolean(data.drunkWorld)

      if (world.version >= 227) {
        saver.saveBoolean(data.getGoodWorld)
      }
      if (world.version >= 238) {
        saver.saveBoolean(data.getTenthAnniversaryWorld)
      }
      if (world.version >= 239) {
        saver.saveBoolean(data.dontStarveWorld)
      }
      if (world.version >= 241) {
        saver.saveBoolean(data.notTheBeesWorld)
      }
      if (world.version >= 249) {
        saver.saveBoolean(data.remixWorld)
      }
      if (world.version >= 266) {
        saver.saveBoolean(data.noTrapsWorld)
      }
      if (world.version >= 267) {
        saver.saveBoolean(data.zenithWorld)
      }
    } else {
      saver.saveBoolean(data.expertMode)
    }
    saver.saveBytes(data.creationTime)
    saver.saveUInt8(data.moonType)
    saver.saveInt32(data.treeX[0])
    saver.saveInt32(data.treeX[1])
    saver.saveInt32(data.treeX[2])
    saver.saveInt32(data.treeStyle[0])
    saver.saveInt32(data.treeStyle[1])
    saver.saveInt32(data.treeStyle[2])
    saver.saveInt32(data.treeStyle[3])
    saver.saveInt32(data.caveBackX[0])
    saver.saveInt32(data.caveBackX[1])
    saver.saveInt32(data.caveBackX[2])
    saver.saveInt32(data.caveBackStyle[0])
    saver.saveInt32(data.caveBackStyle[1])
    saver.saveInt32(data.caveBackStyle[2])
    saver.saveInt32(data.caveBackStyle[3])
    saver.saveInt32(data.iceBackStyle)
    saver.saveInt32(data.jungleBackStyle)
    saver.saveInt32(data.hellBackStyle)
    saver.saveInt32(data.spawnTileX)
    saver.saveInt32(data.spawnTileY)
    saver.saveFloat64(data.worldSurface)
    saver.saveFloat64(data.rockLayer)
    saver.saveFloat64(data.tempTime)
    saver.saveBoolean(data.tempDayTime)
    saver.saveInt32(data.tempMoonPhase)
    saver.saveBoolean(data.tempBloodMoon)
    saver.saveBoolean(data.tempEclipse)
    saver.saveInt32(data.dungeonX)
    saver.saveInt32(data.dungeonY)
    saver.saveBoolean(data.crimson)
    saver.saveBoolean(data.downedBoss1)
    saver.saveBoolean(data.downedBoss2)
    saver.saveBoolean(data.downedBoss3)
    saver.saveBoolean(data.downedQueenBee)
    saver.saveBoolean(data.downedMechBoss1)
    saver.saveBoolean(data.downedMechBoss2)
    saver.saveBoolean(data.downedMechBoss3)
    saver.saveBoolean(data.downedMechBossAny)
    saver.saveBoolean(data.downedPlantBoss)
    saver.saveBoolean(data.downedGolemBoss)
    saver.saveBoolean(data.downedSlimeKing)
    saver.saveBoolean(data.savedGoblin)
    saver.saveBoolean(data.savedWizard)
    saver.saveBoolean(data.savedMech)
    saver.saveBoolean(data.downedGoblins)
    saver.saveBoolean(data.downedClown)
    saver.saveBoolean(data.downedFrost)
    saver.saveBoolean(data.downedPirates)
    saver.saveBoolean(data.shadowOrbSmashed)
    saver.saveBoolean(data.spawnMeteor)
    saver.saveUInt8(data.shadowOrbCount)
    saver.saveInt32(data.altarCount)
    saver.saveBoolean(data.hardMode)
    if (world.version >= 257) {
      saver.saveBoolean(data.afterPartyOfDoom)
    }
    saver.saveInt32(data.invasionDelay)
    saver.saveInt32(data.invasionSize)
    saver.saveInt32(data.invasionType)
    saver.saveFloat64(data.invasionX)
    saver.saveFloat64(data.slimeRainTime)
    saver.saveUInt8(data.sundialCooldown)
    saver.saveBoolean(data.tempRaining)
    saver.saveInt32(data.tempRainTime)
    saver.saveFloat32(data.tempMaxRain)
    saver.saveInt32(data.oreTier1)
    saver.saveInt32(data.oreTier2)
    saver.saveInt32(data.oreTier3)
    saver.saveUInt8(data.setBG0)
    saver.saveUInt8(data.setBG1)
    saver.saveUInt8(data.setBG2)
    saver.saveUInt8(data.setBG3)
    saver.saveUInt8(data.setBG4)
    saver.saveUInt8(data.setBG5)
    saver.saveUInt8(data.setBG6)
    saver.saveUInt8(data.setBG7)
    saver.saveInt32(data.cloudBGActive)
    saver.saveInt16(data.numClouds)
    saver.saveFloat32(data.windSpeed)
    saver.saveInt32(data.anglerWhoFinishedToday.length)
    data.anglerWhoFinishedToday.forEach((e: any) => saver.saveString(e))
    saver.saveBoolean(data.savedAngler)
    saver.saveInt32(data.anglerQuest)
    saver.saveBoolean(data.savedStylist)
    saver.saveBoolean(data.savedTaxCollector)
    if (world.version >= 225) {
      saver.saveBoolean(data.savedGolfer)
    }
    saver.saveInt32(data.invasionSizeStart)
    saver.saveInt32(data.tempCultistDelay)
    saver.saveInt16(data.killCount.length)
    data.killCount.forEach((e: any) => saver.saveInt32(e))
    saver.saveBoolean(data.fastForwardTimeToDawn)
    saver.saveBoolean(data.downedFishron)
    saver.saveBoolean(data.downedMartians)
    saver.saveBoolean(data.downedAncientCultist)
    saver.saveBoolean(data.downedMoonlord)
    saver.saveBoolean(data.downedHalloweenKing)
    saver.saveBoolean(data.downedHalloweenTree)
    saver.saveBoolean(data.downedChristmasIceQueen)
    saver.saveBoolean(data.downedChristmasSantank)
    saver.saveBoolean(data.downedChristmasTree)
    saver.saveBoolean(data.downedTowerSolar)
    saver.saveBoolean(data.downedTowerVortex)
    saver.saveBoolean(data.downedTowerNebula)
    saver.saveBoolean(data.downedTowerStardust)
    saver.saveBoolean(data.TowerActiveSolar)
    saver.saveBoolean(data.TowerActiveVortex)
    saver.saveBoolean(data.TowerActiveNebula)
    saver.saveBoolean(data.TowerActiveStardust)
    saver.saveBoolean(data.LunarApocalypseIsUp)
    saver.saveBoolean(data.tempPartyManual)
    saver.saveBoolean(data.tempPartyGenuine)
    saver.saveInt32(data.tempPartyCooldown)
    saver.saveInt32(data.tempPartyCelebratingNPCs.length)
    data.tempPartyCelebratingNPCs.forEach((e: any) => saver.saveInt32(e))
    saver.saveBoolean(data.Temp_Sandstorm_Happening)
    saver.saveInt32(data.Temp_Sandstorm_TimeLeft)
    saver.saveFloat32(data.Temp_Sandstorm_Severity)
    saver.saveFloat32(data.Temp_Sandstorm_IntendedSeverity)
    saver.saveBoolean(data.savedBartender)
    saver.saveBoolean(data.DD2Event_DownedInvasionT1)
    saver.saveBoolean(data.DD2Event_DownedInvasionT2)
    saver.saveBoolean(data.DD2Event_DownedInvasionT3)

    if (world.version >= 225) {
      saver.saveUInt8(data.setBG8)
      saver.saveUInt8(data.setBG9)
      saver.saveUInt8(data.setBG10)
      saver.saveUInt8(data.setBG11)
      saver.saveUInt8(data.setBG12)

      saver.saveBoolean(data.combatBookWasUsed)
      saver.saveInt32(data.lanternNightCooldown)
      saver.saveBoolean(data.lanternNightGenuine)
      saver.saveBoolean(data.lanternNightManual)
      saver.saveBoolean(data.lanternNightNextNightIsGenuine)

      saver.saveInt32(data.treeTopsVariations.length)
      data.treeTopsVariations.forEach((e: any) => saver.saveInt32(e))

      saver.saveBoolean(data.forceHalloweenForToday)
      saver.saveBoolean(data.forceXMasForToday)

      saver.saveInt32(data.savedOreTierCopper)
      saver.saveInt32(data.savedOreTierIron)
      saver.saveInt32(data.savedOreTierSilver)
      saver.saveInt32(data.savedOreTierGold)

      saver.saveBoolean(data.boughtCat)
      saver.saveBoolean(data.boughtDog)
      saver.saveBoolean(data.boughtBunny)

      saver.saveBoolean(data.downedEmpressOfLight)
      saver.saveBoolean(data.downedQueenSlime)
    }

    if (world.version >= 240) {
      saver.saveBoolean(data.downedDeerclops)
    }

    if (world.version >= 269) {
      saver.saveBoolean(data.unlockedSlimeBlueSpawn)
      saver.saveBoolean(data.unlockedMerchantSpawn)
      saver.saveBoolean(data.unlockedDemolitionistSpawn)
      saver.saveBoolean(data.unlockedPartyGirlSpawn)
      saver.saveBoolean(data.unlockedDyeTraderSpawn)
      saver.saveBoolean(data.unlockedTruffleSpawn)
      saver.saveBoolean(data.unlockedArmsDealerSpawn)
      saver.saveBoolean(data.unlockedNurseSpawn)
      saver.saveBoolean(data.unlockedPrincessSpawn)
      saver.saveBoolean(data.combatBookVolumeTwoWasUsed)
      saver.saveBoolean(data.peddlersSatchelWasUsed)
      saver.saveBoolean(data.unlockedSlimeGreenSpawn)
      saver.saveBoolean(data.unlockedSlimeOldSpawn)
      saver.saveBoolean(data.unlockedSlimePurpleSpawn)
      saver.saveBoolean(data.unlockedSlimeRainbowSpawn)
      saver.saveBoolean(data.unlockedSlimeRedSpawn)
      saver.saveBoolean(data.unlockedSlimeYellowSpawn)
      saver.saveBoolean(data.unlockedSlimeCopperSpawn)
      saver.saveBoolean(data.fastForwardTimeToDusk)
      saver.saveUInt8(data.moondialCooldown)
    }
  }
}
