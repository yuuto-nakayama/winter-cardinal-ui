[Winter Cardinal UI - v0.154.0](../index.md) / DTreeItemNonEditableOptions

# Interface: DTreeItemNonEditableOptions<NODE, THEME, EMITTER\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) = [`DTreeNode`](DTreeNode.md) |
| `THEME` | extends [`DThemeTreeItemNonEditable`](DThemeTreeItemNonEditable.md) = [`DThemeTreeItemNonEditable`](DThemeTreeItemNonEditable.md) |
| `EMITTER` | `any` |

## Hierarchy

- [`DTreeItemButtonOptions`](DTreeItemButtonOptions.md)<`NODE`, `THEME`, `EMITTER`\>

  ↳ **`DTreeItemNonEditableOptions`**

## Table of contents

### Properties

- [background](DTreeItemNonEditableOptions.md#background)
- [border](DTreeItemNonEditableOptions.md#border)
- [children](DTreeItemNonEditableOptions.md#children)
- [clear](DTreeItemNonEditableOptions.md#clear)
- [corner](DTreeItemNonEditableOptions.md#corner)
- [cursor](DTreeItemNonEditableOptions.md#cursor)
- [height](DTreeItemNonEditableOptions.md#height)
- [image](DTreeItemNonEditableOptions.md#image)
- [interactive](DTreeItemNonEditableOptions.md#interactive)
- [mask](DTreeItemNonEditableOptions.md#mask)
- [name](DTreeItemNonEditableOptions.md#name)
- [on](DTreeItemNonEditableOptions.md#on)
- [outline](DTreeItemNonEditableOptions.md#outline)
- [padding](DTreeItemNonEditableOptions.md#padding)
- [parent](DTreeItemNonEditableOptions.md#parent)
- [shadow](DTreeItemNonEditableOptions.md#shadow)
- [shortcut](DTreeItemNonEditableOptions.md#shortcut)
- [shortcuts](DTreeItemNonEditableOptions.md#shortcuts)
- [state](DTreeItemNonEditableOptions.md#state)
- [text](DTreeItemNonEditableOptions.md#text)
- [theme](DTreeItemNonEditableOptions.md#theme)
- [title](DTreeItemNonEditableOptions.md#title)
- [visible](DTreeItemNonEditableOptions.md#visible)
- [weight](DTreeItemNonEditableOptions.md#weight)
- [when](DTreeItemNonEditableOptions.md#when)
- [width](DTreeItemNonEditableOptions.md#width)
- [x](DTreeItemNonEditableOptions.md#x)
- [y](DTreeItemNonEditableOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[background](DTreeItemButtonOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[border](DTreeItemButtonOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[children](DTreeItemButtonOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[clear](DTreeItemButtonOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[corner](DTreeItemButtonOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[cursor](DTreeItemButtonOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### height

• `Optional` **height**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A height
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a hight ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a hight ([DScalar](DScalar.md))

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[height](DTreeItemButtonOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[image](DTreeItemButtonOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L45)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[interactive](DTreeItemButtonOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[mask](DTreeItemButtonOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[name](DTreeItemButtonOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DTreeItemTextOnOptions`](DTreeItemTextOnOptions.md)<`NODE`, `EMITTER`\>

Mappings of event names and event handlers.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[on](DTreeItemButtonOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L56)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[outline](DTreeItemButtonOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[padding](DTreeItemButtonOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

___

### parent

• `Optional` **parent**: `Container`

A parent.

In the case of UI classes which pop up (e.g., [DDialog](../classes/DDialog.md) and [DMenu](../classes/DMenu.md)),
if multiple application instances are there, better to set
this to an `application.stage` so that they pick a right application.
By default, they assume the last created application is
the one they belong to at the time when they are created.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[parent](DTreeItemButtonOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[shadow](DTreeItemButtonOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[shortcut](DTreeItemButtonOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[shortcuts](DTreeItemButtonOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[state](DTreeItemButtonOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`string`\>

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[text](DTreeItemButtonOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[theme](DTreeItemButtonOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[title](DTreeItemButtonOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[visible](DTreeItemButtonOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[weight](DTreeItemButtonOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[when](DTreeItemButtonOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L20)

___

### width

• `Optional` **width**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A width
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a width ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a width ([DScalar](DScalar.md))

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[width](DTreeItemButtonOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

___

### x

• `Optional` **x**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A X position
* A position keyword
* A position expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a X position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a X position ([DScalar](DScalar.md))

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[x](DTreeItemButtonOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

___

### y

• `Optional` **y**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A Y position
* A position keyword
* A position expresion (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a Y position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a Y position ([DScalar](DScalar.md))

#### Inherited from

[DTreeItemButtonOptions](DTreeItemButtonOptions.md).[y](DTreeItemButtonOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)