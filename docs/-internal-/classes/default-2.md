[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/FileFormatHeader.ts:16](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/FileFormatHeader.ts#L16)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`FileFormatHeader`](../../interfaces/FileFormatHeader.md)\>

## Constructors

### Constructor

> **new default**(): `FileFormatHeaderIO`

#### Returns

`FileFormatHeaderIO`

## Methods

### parse()

> **parse**(`reader`): [`FileFormatHeader`](../../interfaces/FileFormatHeader.md)

Defined in: [src/section/FileFormatHeader.ts:17](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/FileFormatHeader.ts#L17)

#### Parameters

##### reader

[`default`](default.md)

#### Returns

[`FileFormatHeader`](../../interfaces/FileFormatHeader.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/FileFormatHeader.ts:31](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/FileFormatHeader.ts#L31)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`FileFormatHeader`](../../interfaces/FileFormatHeader.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
