[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/Bestiary.ts:12](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Bestiary.ts#L12)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`Bestiary`](../../interfaces/Bestiary.md)\>

## Constructors

### Constructor

> **new default**(): `BestiaryIO`

#### Returns

`BestiaryIO`

## Methods

### parse()

> **parse**(`reader`, `world`): [`Bestiary`](../../interfaces/Bestiary.md)

Defined in: [src/section/Bestiary.ts:13](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Bestiary.ts#L13)

#### Parameters

##### reader

[`default`](default.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

[`Bestiary`](../../interfaces/Bestiary.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/Bestiary.ts:25](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Bestiary.ts#L25)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`Bestiary`](../../interfaces/Bestiary.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
