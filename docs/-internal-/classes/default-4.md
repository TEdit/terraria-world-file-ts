[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/WorldTiles.ts:11](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/WorldTiles.ts#L11)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`WorldTiles`](../../interfaces/WorldTiles.md)\>

## Constructors

### Constructor

> **new default**(): `WorldTilesIO`

#### Returns

`WorldTilesIO`

## Methods

### parse()

> **parse**(`reader`, `world`): [`WorldTiles`](../../interfaces/WorldTiles.md)

Defined in: [src/section/WorldTiles.ts:14](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/WorldTiles.ts#L14)

#### Parameters

##### reader

[`default`](default.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

[`WorldTiles`](../../interfaces/WorldTiles.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/WorldTiles.ts:37](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/WorldTiles.ts#L37)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`WorldTiles`](../../interfaces/WorldTiles.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
