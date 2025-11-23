[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/NPCs.ts:12](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/NPCs.ts#L12)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`NPCs`](../../interfaces/NPCs.md)\>

## Constructors

### Constructor

> **new default**(): `NPCsIO`

#### Returns

`NPCsIO`

## Methods

### parse()

> **parse**(`reader`, `world`): [`NPCs`](../../interfaces/NPCs.md)

Defined in: [src/section/NPCs.ts:13](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/NPCs.ts#L13)

#### Parameters

##### reader

[`default`](default.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

[`NPCs`](../../interfaces/NPCs.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/NPCs.ts:67](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/NPCs.ts#L67)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`NPCs`](../../interfaces/NPCs.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
