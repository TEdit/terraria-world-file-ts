[**terraria-world-file**](../../../../README.md)

***

[terraria-world-file](../../../../globals.md) / [Section](../README.md) / IODefinition

# Interface: IODefinition\<T\>

Defined in: [src/sections.ts:46](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/sections.ts#L46)

## Type Parameters

### T

`T`

## Methods

### parse()

> **parse**(`reader`, `world`): `T`

Defined in: [src/sections.ts:47](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/sections.ts#L47)

#### Parameters

##### reader

[`default`](../../../../-internal-/classes/default.md)

##### world

[`WorldProperties`](../../../../-internal-/type-aliases/WorldProperties.md)

#### Returns

`T`

***

### save()

> **save**(`saver`, `data`, `world`): `void`

Defined in: [src/sections.ts:48](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/sections.ts#L48)

#### Parameters

##### saver

[`default`](../../../../-internal-/classes/default-1.md)

##### data

`T`

##### world

[`WorldProperties`](../../../../-internal-/type-aliases/WorldProperties.md)

#### Returns

`void`
