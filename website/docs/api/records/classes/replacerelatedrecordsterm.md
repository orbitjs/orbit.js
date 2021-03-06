---
id: "ReplaceRelatedRecordsTerm"
title: "Class: ReplaceRelatedRecordsTerm<RT, RI, R>"
sidebar_label: "ReplaceRelatedRecordsTerm"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `RT` | `string` |
| `RI` | [`RecordIdentity`](../interfaces/RecordIdentity.md) |
| `R` | [`UninitializedRecord`](../interfaces/UninitializedRecord.md) |

## Hierarchy

- [`BaseRecordOperationTerm`](BaseRecordOperationTerm.md)<[`ReplaceRelatedRecordsOperation`](../interfaces/ReplaceRelatedRecordsOperation.md), `RT`, `RI`, `R`\>

  ↳ **`ReplaceRelatedRecordsTerm`**

## Constructors

### constructor

• **new ReplaceRelatedRecordsTerm**<`RT`, `RI`, `R`\>(`transformBuilder`, `record`, `relationship`, `relatedRecords`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RT` | `string` |
| `RI` | [`RecordIdentity`](../interfaces/RecordIdentity.md) |
| `R` | [`UninitializedRecord`](../interfaces/UninitializedRecord.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformBuilder` | [`RecordTransformBuilder`](RecordTransformBuilder.md)<`RT`, `RI`, `R`\> |
| `record` | [`RecordIdentity`](../interfaces/RecordIdentity.md) |
| `relationship` | `string` |
| `relatedRecords` | [`RecordIdentity`](../interfaces/RecordIdentity.md)[] |

#### Overrides

[BaseRecordOperationTerm](BaseRecordOperationTerm.md).[constructor](BaseRecordOperationTerm.md#constructor)

#### Defined in

[packages/@orbit/records/src/record-operation-term.ts:206](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/records/src/record-operation-term.ts#L206)

## Properties

### $transformBuilder

• **$transformBuilder**: [`RecordTransformBuilder`](RecordTransformBuilder.md)<`RT`, `RI`, `R`\>

#### Inherited from

[BaseRecordOperationTerm](BaseRecordOperationTerm.md).[$transformBuilder](BaseRecordOperationTerm.md#$transformbuilder)

#### Defined in

[packages/@orbit/records/src/record-operation-term.ts:31](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/records/src/record-operation-term.ts#L31)

## Methods

### options

▸ **options**(`options`): [`ReplaceRelatedRecordsTerm`](ReplaceRelatedRecordsTerm.md)<`RT`, `RI`, `R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RequestOptions` |

#### Returns

[`ReplaceRelatedRecordsTerm`](ReplaceRelatedRecordsTerm.md)<`RT`, `RI`, `R`\>

#### Inherited from

[BaseRecordOperationTerm](BaseRecordOperationTerm.md).[options](BaseRecordOperationTerm.md#options)

#### Defined in

packages/@orbit/data/dist/modules/operation-term.d.ts:11

___

### toOperation

▸ **toOperation**(): [`ReplaceRelatedRecordsOperation`](../interfaces/ReplaceRelatedRecordsOperation.md)

#### Returns

[`ReplaceRelatedRecordsOperation`](../interfaces/ReplaceRelatedRecordsOperation.md)

#### Inherited from

[BaseRecordOperationTerm](BaseRecordOperationTerm.md).[toOperation](BaseRecordOperationTerm.md#tooperation)

#### Defined in

[packages/@orbit/records/src/record-operation-term.ts:41](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/records/src/record-operation-term.ts#L41)
