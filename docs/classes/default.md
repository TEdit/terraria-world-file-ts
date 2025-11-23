[**terraria-world-file**](../README.md)

***

[terraria-world-file](../globals.md) / default

# Class: default

Defined in: [src/FileReader.ts:27](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/FileReader.ts#L27)

## Constructors

### Constructor

> **new default**(): `FileReader`

#### Returns

`FileReader`

## Methods

### loadBuffer()

> **loadBuffer**(`buffer`): `Promise`\<`FileReader`\>

Defined in: [src/FileReader.ts:55](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/FileReader.ts#L55)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

`Promise`\<`FileReader`\>

***

### loadFile()

> **loadFile**(`loader`, `path`): `Promise`\<`FileReader`\>

Defined in: [src/FileReader.ts:49](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/FileReader.ts#L49)

#### Parameters

##### loader

(`path`) => `Promise`\<`ArrayBuffer`\>

##### path

`string`

#### Returns

`Promise`\<`FileReader`\>

***

### parse()

> **parse**\<`T`\>(`options?`): [`SelectedDataMap`](../-internal-/type-aliases/SelectedDataMap.md)\<`T`\>

Defined in: [src/FileReader.ts:61](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/FileReader.ts#L61)

#### Type Parameters

##### T

`T` *extends* (`"fileFormatHeader"` \| `"header"` \| `"worldTiles"` \| `"chests"` \| `"signs"` \| `"NPCs"` \| `"weightedPressurePlates"` \| `"townManager"` \| `"bestiary"` \| `"creativePowers"` \| `"footer"`)[]

#### Parameters

##### options?

[`Options`](../-internal-/type-aliases/Options.md)\<`T`\>

#### Returns

[`SelectedDataMap`](../-internal-/type-aliases/SelectedDataMap.md)\<`T`\>
