[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/section/Header.ts:182](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Header.ts#L182)

## Implements

- [`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md)\<[`Header`](../../interfaces/Header.md)\>

## Constructors

### Constructor

> **new default**(): `HeaderIO`

#### Returns

`HeaderIO`

## Methods

### parse()

> **parse**(`reader`, `world`): [`Header`](../../interfaces/Header.md)

Defined in: [src/section/Header.ts:183](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Header.ts#L183)

#### Parameters

##### reader

[`default`](default.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

[`Header`](../../interfaces/Header.md)

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`parse`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#parse)

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/section/Header.ts:365](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/section/Header.ts#L365)

#### Parameters

##### saver

[`default`](default-1.md)

##### data

[`Header`](../../interfaces/Header.md)

##### world

[`WorldProperties`](../type-aliases/WorldProperties.md)

#### Returns

`void`

#### Implementation of

[`IODefinition`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md).[`save`](../../terraria-world-file/namespaces/Section/interfaces/IODefinition.md#save)
