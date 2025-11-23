[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/TownManager.ts:11](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/TownManager.ts#L11)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`TownManager`](../../interfaces/TownManager.md)\>

## Constructors

### Constructor

> **new default**(): `TownManagerIO`

#### Returns

`TownManagerIO`

## Methods

### parse()

> **parse**(`reader`, `world`): [`TownManager`](../../interfaces/TownManager.md)

Defined in: [src/section/TownManager.ts:12](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/TownManager.ts#L12)

#### Parameters

##### reader

[`default`](default.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

[`TownManager`](../../interfaces/TownManager.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/TownManager.ts:30](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/TownManager.ts#L30)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`TownManager`](../../interfaces/TownManager.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
