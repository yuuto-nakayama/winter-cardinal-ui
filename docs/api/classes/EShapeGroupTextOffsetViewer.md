[Winter Cardinal UI - v0.154.0](../index.md) / EShapeGroupTextOffsetViewer

# Class: EShapeGroupTextOffsetViewer

## Implements

- [`EShapeTextOffset`](../interfaces/EShapeTextOffset.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupTextOffsetViewer.md#constructor)

### Accessors

- [horizontal](EShapeGroupTextOffsetViewer.md#horizontal)
- [vertical](EShapeGroupTextOffsetViewer.md#vertical)

### Methods

- [copy](EShapeGroupTextOffsetViewer.md#copy)
- [deserialize](EShapeGroupTextOffsetViewer.md#deserialize)
- [serialize](EShapeGroupTextOffsetViewer.md#serialize)
- [set](EShapeGroupTextOffsetViewer.md#set)
- [toObject](EShapeGroupTextOffsetViewer.md#toobject)

## Constructors

### constructor

• **new EShapeGroupTextOffsetViewer**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L11)

## Accessors

### horizontal

• `get` **horizontal**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[horizontal](../interfaces/EShapeTextOffset.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L15)

• `set` **horizontal**(`horizontal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[horizontal](../interfaces/EShapeTextOffset.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L19)

___

### vertical

• `get` **vertical**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[vertical](../interfaces/EShapeTextOffset.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L23)

• `set` **vertical**(`vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[vertical](../interfaces/EShapeTextOffset.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L27)

## Methods

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[copy](../interfaces/EShapeTextOffset.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L31)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[deserialize](../interfaces/EShapeTextOffset.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L50)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[serialize](../interfaces/EShapeTextOffset.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L46)

___

### set

▸ **set**(`horizontal?`, `vertical?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal?` | `number` |
| `vertical?` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[set](../interfaces/EShapeTextOffset.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L35)

___

### toObject

▸ **toObject**(): [`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)

#### Returns

[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[toObject](../interfaces/EShapeTextOffset.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-viewer.ts#L39)