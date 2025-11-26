[**terraria-world-file**](../README.md)

***

[terraria-world-file](../globals.md) / FileReader

# Class: FileReader

Defined in: [FileReader.ts:27](https://github.com/cokolele/terraria-world-file-ts/blob/c9d6db6f268595de1f724cc85f2bcb33cfa7d811/src/FileReader.ts#L27)

## Constructors

### Constructor

> **new FileReader**(): `FileReader`

#### Returns

`FileReader`

## Methods

### loadBuffer()

> **loadBuffer**(`buffer`): `Promise`\<`FileReader`\>

Defined in: [FileReader.ts:55](https://github.com/cokolele/terraria-world-file-ts/blob/c9d6db6f268595de1f724cc85f2bcb33cfa7d811/src/FileReader.ts#L55)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

`Promise`\<`FileReader`\>

***

### loadFile()

> **loadFile**(`loader`, `path`): `Promise`\<`FileReader`\>

Defined in: [FileReader.ts:49](https://github.com/cokolele/terraria-world-file-ts/blob/c9d6db6f268595de1f724cc85f2bcb33cfa7d811/src/FileReader.ts#L49)

#### Parameters

##### loader

(`path`) => `Promise`\<`ArrayBuffer`\>

##### path

`string`

#### Returns

`Promise`\<`FileReader`\>

***

### parse()

> **parse**\<`T`\>(`options?`): [`WorldSections`](../type-aliases/WorldSections.md)\<`T`\>

Defined in: [FileReader.ts:61](https://github.com/cokolele/terraria-world-file-ts/blob/c9d6db6f268595de1f724cc85f2bcb33cfa7d811/src/FileReader.ts#L61)

#### Type Parameters

##### T

`T` *extends* (`"footer"` \| `"fileFormatHeader"` \| `"header"` \| `"worldTiles"` \| `"chests"` \| `"signs"` \| `"NPCs"` \| `"tileEntities"` \| `"weightedPressurePlates"` \| `"townManager"` \| `"bestiary"` \| `"creativePowers"`)[]

#### Parameters

##### options?

`Options`\<`T`\>

#### Returns

[`WorldSections`](../type-aliases/WorldSections.md)\<`T`\>
