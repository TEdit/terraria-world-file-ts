[**terraria-world-file**](../../README.md)

***

[terraria-world-file](../../globals.md) / [\<internal\>](../README.md) / default

# Class: default

Defined in: [src/BinarySaver.ts:1](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L1)

## Constructors

### Constructor

> **new default**(): `BinarySaver`

#### Returns

`BinarySaver`

## Properties

### progress

> **progress**: `number` = `0`

Defined in: [src/BinarySaver.ts:5](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L5)

***

### progressCallback()?

> `optional` **progressCallback**: (`percent`) => `void`

Defined in: [src/BinarySaver.ts:6](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L6)

#### Parameters

##### percent

`number`

#### Returns

`void`

## Methods

### getBuffer()

> **getBuffer**(): `ArrayBuffer`

Defined in: [src/BinarySaver.ts:20](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L20)

#### Returns

`ArrayBuffer`

***

### getPosition()

> **getPosition**(): `number`

Defined in: [src/BinarySaver.ts:118](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L118)

#### Returns

`number`

***

### jumpTo()

> **jumpTo**(`offset`): `void`

Defined in: [src/BinarySaver.ts:126](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L126)

#### Parameters

##### offset

`number`

#### Returns

`void`

***

### saveArray()

> **saveArray**\<`T`\>(`array`, `lengthSaver`, `valueSaver`): `void`

Defined in: [src/BinarySaver.ts:105](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L105)

#### Type Parameters

##### T

`T`

#### Parameters

##### array

`T`[]

##### lengthSaver

(`length`) => `void`

##### valueSaver

(`value`) => `void`

#### Returns

`void`

***

### saveBits()

> **saveBits**(`bitValues`): `void`

Defined in: [src/BinarySaver.ts:110](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L110)

#### Parameters

##### bitValues

(`number` \| `boolean`)[]

#### Returns

`void`

***

### saveBoolean()

> **saveBoolean**(`value`): `void`

Defined in: [src/BinarySaver.ts:74](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L74)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### saveBytes()

> **saveBytes**(`bytes`): `void`

Defined in: [src/BinarySaver.ts:78](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L78)

#### Parameters

##### bytes

`number`[] | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### saveFloat32()

> **saveFloat32**(`value`): `void`

Defined in: [src/BinarySaver.ts:64](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L64)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### saveFloat64()

> **saveFloat64**(`value`): `void`

Defined in: [src/BinarySaver.ts:69](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L69)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### saveInt16()

> **saveInt16**(`value`): `void`

Defined in: [src/BinarySaver.ts:34](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L34)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### saveInt32()

> **saveInt32**(`value`): `void`

Defined in: [src/BinarySaver.ts:44](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L44)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### saveInt64()

> **saveInt64**(`value`): `void`

Defined in: [src/BinarySaver.ts:54](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L54)

#### Parameters

##### value

`bigint`

#### Returns

`void`

***

### saveInt8()

> **saveInt8**(`value`): `void`

Defined in: [src/BinarySaver.ts:24](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L24)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### saveString()

> **saveString**(`text`, `saveLength`): `void`

Defined in: [src/BinarySaver.ts:82](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L82)

#### Parameters

##### text

`string`

##### saveLength

`boolean` = `true`

#### Returns

`void`

***

### saveUInt16()

> **saveUInt16**(`value`): `void`

Defined in: [src/BinarySaver.ts:39](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L39)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### saveUInt32()

> **saveUInt32**(`value`): `void`

Defined in: [src/BinarySaver.ts:49](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L49)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### saveUInt64()

> **saveUInt64**(`value`): `void`

Defined in: [src/BinarySaver.ts:59](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L59)

#### Parameters

##### value

`bigint`

#### Returns

`void`

***

### saveUInt8()

> **saveUInt8**(`value`): `void`

Defined in: [src/BinarySaver.ts:29](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L29)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### skipBytes()

> **skipBytes**(`count`): `void`

Defined in: [src/BinarySaver.ts:122](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L122)

#### Parameters

##### count

`number`

#### Returns

`void`

***

### trimEnd()

> **trimEnd**(): `void`

Defined in: [src/BinarySaver.ts:130](https://github.com/cokolele/terraria-world-file-ts/blob/bfce9f4c52db3d4b8cad9151c9666524e54d466b/src/BinarySaver.ts#L130)

#### Returns

`void`
