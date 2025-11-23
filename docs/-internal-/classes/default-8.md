[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/WeightedPressurePlates.ts:11](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/WeightedPressurePlates.ts#L11)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`WeightedPressurePlates`](../../interfaces/WeightedPressurePlates.md)\>

## Constructors

### Constructor

> **new default**(): `WeightedPressurePlatesIO`

#### Returns

`WeightedPressurePlatesIO`

## Methods

### parse()

> **parse**(`reader`, `world`): [`WeightedPressurePlates`](../../interfaces/WeightedPressurePlates.md)

Defined in: [src/section/WeightedPressurePlates.ts:12](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/WeightedPressurePlates.ts#L12)

#### Parameters

##### reader

[`default`](default.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

[`WeightedPressurePlates`](../../interfaces/WeightedPressurePlates.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/WeightedPressurePlates.ts:29](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/WeightedPressurePlates.ts#L29)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`WeightedPressurePlates`](../../interfaces/WeightedPressurePlates.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
