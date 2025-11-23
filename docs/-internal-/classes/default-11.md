[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/CreativePowers.ts:16](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/CreativePowers.ts#L16)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`CreativePowers`](../../interfaces/CreativePowers.md)\>

## Constructors

### Constructor

> **new default**(): `CreativePowersIO`

#### Returns

`CreativePowersIO`

## Methods

### parse()

> **parse**(`reader`): [`CreativePowers`](../../interfaces/CreativePowers.md)

Defined in: [src/section/CreativePowers.ts:17](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/CreativePowers.ts#L17)

#### Parameters

##### reader

[`default`](default.md)

#### Returns

[`CreativePowers`](../../interfaces/CreativePowers.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/CreativePowers.ts:59](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/CreativePowers.ts#L59)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`CreativePowers`](../../interfaces/CreativePowers.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
