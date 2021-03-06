---
id: "ReplaceRelatedRecordsRequest"
title: "Interface: ReplaceRelatedRecordsRequest"
sidebar_label: "ReplaceRelatedRecordsRequest"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`TransformRecordRelationshipRequest`](TransformRecordRelationshipRequest.md)

  ↳ **`ReplaceRelatedRecordsRequest`**

## Properties

### op

• **op**: ``"replaceRelatedRecord"``

#### Overrides

[TransformRecordRelationshipRequest](TransformRecordRelationshipRequest.md).[op](TransformRecordRelationshipRequest.md#op)

#### Defined in

[packages/@orbit/jsonapi/src/lib/transform-requests.ts:74](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/jsonapi/src/lib/transform-requests.ts#L74)

___

### options

• `Optional` **options**: [`JSONAPIRequestOptions`](JSONAPIRequestOptions.md)

#### Inherited from

[TransformRecordRelationshipRequest](TransformRecordRelationshipRequest.md).[options](TransformRecordRelationshipRequest.md#options)

#### Defined in

[packages/@orbit/jsonapi/src/lib/transform-requests.ts:31](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/jsonapi/src/lib/transform-requests.ts#L31)

___

### record

• **record**: `RecordIdentity`

#### Inherited from

[TransformRecordRelationshipRequest](TransformRecordRelationshipRequest.md).[record](TransformRecordRelationshipRequest.md#record)

#### Defined in

[packages/@orbit/jsonapi/src/lib/transform-requests.ts:32](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/jsonapi/src/lib/transform-requests.ts#L32)

___

### relatedRecords

• **relatedRecords**: `RecordIdentity`[]

#### Defined in

[packages/@orbit/jsonapi/src/lib/transform-requests.ts:75](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/jsonapi/src/lib/transform-requests.ts#L75)

___

### relationship

• **relationship**: `string`

#### Inherited from

[TransformRecordRelationshipRequest](TransformRecordRelationshipRequest.md).[relationship](TransformRecordRelationshipRequest.md#relationship)

#### Defined in

[packages/@orbit/jsonapi/src/lib/transform-requests.ts:37](https://github.com/orbitjs/orbit/blob/6e0cbd41/packages/@orbit/jsonapi/src/lib/transform-requests.ts#L37)
