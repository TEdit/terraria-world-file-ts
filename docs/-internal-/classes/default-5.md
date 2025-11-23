[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/Chests.ts:11](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Chests.ts#L11)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`Chests`](../../interfaces/Chests.md)\>

## Constructors

### Constructor

> **new default**(): `ChestsIO`

#### Returns

`ChestsIO`

## Methods

### parse()

> **parse**(`reader`, `world`): [`Chests`](../../interfaces/Chests.md)

Defined in: [src/section/Chests.ts:12](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Chests.ts#L12)

#### Parameters

##### reader

[`default`](default.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

[`Chests`](../../interfaces/Chests.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/Chests.ts:51](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Chests.ts#L51)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`Chests`](../../interfaces/Chests.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
