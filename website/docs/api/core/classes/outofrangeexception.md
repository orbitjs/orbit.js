---
id: "OutOfRangeException"
title: "Class: OutOfRangeException"
sidebar_label: "OutOfRangeException"
sidebar_position: 0
custom_edit_url: null
---

Exception raised when a value is outside an allowed range.

## Hierarchy

- [`Exception`](Exception.md)

  ↳ **`OutOfRangeException`**

## Constructors

### constructor

• **new OutOfRangeException**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Overrides

[Exception](Exception.md).[constructor](Exception.md#constructor)

#### Defined in

[packages/@orbit/core/src/exception.ts:24](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/core/src/exception.ts#L24)

## Properties

### message

• **message**: `string`

#### Inherited from

[Exception](Exception.md).[message](Exception.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[Exception](Exception.md).[name](Exception.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[Exception](Exception.md).[stack](Exception.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### value

• **value**: `number`

#### Defined in

[packages/@orbit/core/src/exception.ts:22](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/core/src/exception.ts#L22)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[Exception](Exception.md).[stackTraceLimit](Exception.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[Exception](Exception.md).[captureStackTrace](Exception.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### Inherited from

[Exception](Exception.md).[prepareStackTrace](Exception.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11
