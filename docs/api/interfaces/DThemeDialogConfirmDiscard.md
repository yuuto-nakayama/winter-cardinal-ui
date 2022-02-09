[Winter Cardinal UI - v0.154.0](../index.md) / DThemeDialogConfirmDiscard

# Interface: DThemeDialogConfirmDiscard

## Hierarchy

- [`DThemeDialogConfirm`](DThemeDialogConfirm.md)

  ↳ **`DThemeDialogConfirmDiscard`**

## Table of contents

### Methods

- [closeOn](DThemeDialogConfirmDiscard.md#closeon)
- [getAlpha](DThemeDialogConfirmDiscard.md#getalpha)
- [getBackgroundAlpha](DThemeDialogConfirmDiscard.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDialogConfirmDiscard.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDialogConfirmDiscard.md#getbackgroundtexture)
- [getBorderAlign](DThemeDialogConfirmDiscard.md#getborderalign)
- [getBorderAlpha](DThemeDialogConfirmDiscard.md#getborderalpha)
- [getBorderColor](DThemeDialogConfirmDiscard.md#getbordercolor)
- [getBorderMask](DThemeDialogConfirmDiscard.md#getbordermask)
- [getBorderTexture](DThemeDialogConfirmDiscard.md#getbordertexture)
- [getBorderWidth](DThemeDialogConfirmDiscard.md#getborderwidth)
- [getCancel](DThemeDialogConfirmDiscard.md#getcancel)
- [getClearType](DThemeDialogConfirmDiscard.md#getcleartype)
- [getColor](DThemeDialogConfirmDiscard.md#getcolor)
- [getCornerMask](DThemeDialogConfirmDiscard.md#getcornermask)
- [getCornerRadius](DThemeDialogConfirmDiscard.md#getcornerradius)
- [getCursor](DThemeDialogConfirmDiscard.md#getcursor)
- [getFontFamilly](DThemeDialogConfirmDiscard.md#getfontfamilly)
- [getFontSize](DThemeDialogConfirmDiscard.md#getfontsize)
- [getFontStyle](DThemeDialogConfirmDiscard.md#getfontstyle)
- [getFontVariant](DThemeDialogConfirmDiscard.md#getfontvariant)
- [getFontWeight](DThemeDialogConfirmDiscard.md#getfontweight)
- [getHeight](DThemeDialogConfirmDiscard.md#getheight)
- [getInteractive](DThemeDialogConfirmDiscard.md#getinteractive)
- [getLayoutHeight](DThemeDialogConfirmDiscard.md#getlayoutheight)
- [getLayoutMargin](DThemeDialogConfirmDiscard.md#getlayoutmargin)
- [getLayoutWidth](DThemeDialogConfirmDiscard.md#getlayoutwidth)
- [getLayoutX](DThemeDialogConfirmDiscard.md#getlayoutx)
- [getLayoutY](DThemeDialogConfirmDiscard.md#getlayouty)
- [getLineHeight](DThemeDialogConfirmDiscard.md#getlineheight)
- [getMessage](DThemeDialogConfirmDiscard.md#getmessage)
- [getMode](DThemeDialogConfirmDiscard.md#getmode)
- [getOffsetX](DThemeDialogConfirmDiscard.md#getoffsetx)
- [getOffsetY](DThemeDialogConfirmDiscard.md#getoffsety)
- [getOk](DThemeDialogConfirmDiscard.md#getok)
- [getOutlineAlign](DThemeDialogConfirmDiscard.md#getoutlinealign)
- [getOutlineAlpha](DThemeDialogConfirmDiscard.md#getoutlinealpha)
- [getOutlineColor](DThemeDialogConfirmDiscard.md#getoutlinecolor)
- [getOutlineMask](DThemeDialogConfirmDiscard.md#getoutlinemask)
- [getOutlineOffset](DThemeDialogConfirmDiscard.md#getoutlineoffset)
- [getOutlineWidth](DThemeDialogConfirmDiscard.md#getoutlinewidth)
- [getPaddingBottom](DThemeDialogConfirmDiscard.md#getpaddingbottom)
- [getPaddingLeft](DThemeDialogConfirmDiscard.md#getpaddingleft)
- [getPaddingRight](DThemeDialogConfirmDiscard.md#getpaddingright)
- [getPaddingTop](DThemeDialogConfirmDiscard.md#getpaddingtop)
- [getShadow](DThemeDialogConfirmDiscard.md#getshadow)
- [getTitle](DThemeDialogConfirmDiscard.md#gettitle)
- [getWeight](DThemeDialogConfirmDiscard.md#getweight)
- [getWidth](DThemeDialogConfirmDiscard.md#getwidth)
- [getX](DThemeDialogConfirmDiscard.md#getx)
- [getY](DThemeDialogConfirmDiscard.md#gety)
- [isSticky](DThemeDialogConfirmDiscard.md#issticky)
- [newShadow](DThemeDialogConfirmDiscard.md#newshadow)
- [newShadowWeak](DThemeDialogConfirmDiscard.md#newshadowweak)
- [newState](DThemeDialogConfirmDiscard.md#newstate)

## Methods

### closeOn

▸ **closeOn**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[closeOn](DThemeDialogConfirm.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L75)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getAlpha](DThemeDialogConfirm.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBackgroundAlpha](DThemeDialogConfirm.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBackgroundColor](DThemeDialogConfirm.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBackgroundTexture](DThemeDialogConfirm.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBorderAlign](DThemeDialogConfirm.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBorderAlpha](DThemeDialogConfirm.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L523)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBorderColor](DThemeDialogConfirm.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L516)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBorderMask](DThemeDialogConfirm.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBorderTexture](DThemeDialogConfirm.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:549](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L549)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getBorderWidth](DThemeDialogConfirm.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getCancel

▸ **getCancel**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getCancel](DThemeDialogConfirm.md#getcancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L78)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getClearType](DThemeDialogConfirm.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L649)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getColor](DThemeDialogConfirm.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getCornerMask](DThemeDialogConfirm.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L579)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getCornerRadius](DThemeDialogConfirm.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L574)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getCursor](DThemeDialogConfirm.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L671)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getFontFamilly](DThemeDialogConfirm.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getFontSize](DThemeDialogConfirm.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getFontStyle](DThemeDialogConfirm.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getFontVariant](DThemeDialogConfirm.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getFontWeight](DThemeDialogConfirm.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getHeight](DThemeDialogConfirm.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L483)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getInteractive](DThemeDialogConfirm.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:633](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L633)

___

### getLayoutHeight

▸ **getLayoutHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getLayoutHeight](DThemeDialogConfirm.md#getlayoutheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L82)

___

### getLayoutMargin

▸ **getLayoutMargin**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getLayoutMargin](DThemeDialogConfirm.md#getlayoutmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L83)

___

### getLayoutWidth

▸ **getLayoutWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getLayoutWidth](DThemeDialogConfirm.md#getlayoutwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L81)

___

### getLayoutX

▸ **getLayoutX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getLayoutX](DThemeDialogConfirm.md#getlayoutx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L79)

___

### getLayoutY

▸ **getLayoutY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getLayoutY](DThemeDialogConfirm.md#getlayouty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L80)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getLineHeight](DThemeDialogConfirm.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMessage

▸ **getMessage**(): [`DStateAwareOrValue`](../index.md#dstateawareorvalue)<`string`\>

#### Returns

[`DStateAwareOrValue`](../index.md#dstateawareorvalue)<`string`\>

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getMessage](DThemeDialogConfirm.md#getmessage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L20)

___

### getMode

▸ **getMode**(): [`DDialogMode`](../index.md#ddialogmode)

#### Returns

[`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getMode](DThemeDialogConfirm.md#getmode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L74)

___

### getOffsetX

▸ **getOffsetX**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOffsetX](DThemeDialogConfirm.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L77)

___

### getOffsetY

▸ **getOffsetY**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOffsetY](DThemeDialogConfirm.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L78)

___

### getOk

▸ **getOk**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOk](DThemeDialogConfirm.md#getok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L77)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOutlineAlign](DThemeDialogConfirm.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOutlineAlpha](DThemeDialogConfirm.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L594)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOutlineColor](DThemeDialogConfirm.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L587)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOutlineMask](DThemeDialogConfirm.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOutlineOffset](DThemeDialogConfirm.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getOutlineWidth](DThemeDialogConfirm.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getPaddingBottom](DThemeDialogConfirm.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L569)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getPaddingLeft](DThemeDialogConfirm.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L554)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getPaddingRight](DThemeDialogConfirm.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L559)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getPaddingTop](DThemeDialogConfirm.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L564)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getShadow](DThemeDialogConfirm.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L628)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getTitle](DThemeDialogConfirm.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:643](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L643)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getWeight](DThemeDialogConfirm.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L656)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getWidth](DThemeDialogConfirm.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getX](DThemeDialogConfirm.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:473](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L473)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[getY](DThemeDialogConfirm.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L478)

___

### isSticky

▸ **isSticky**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[isSticky](DThemeDialogConfirm.md#issticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L76)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[newShadow](DThemeDialogConfirm.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L661)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[newShadowWeak](DThemeDialogConfirm.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L666)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DThemeDialogConfirm](DThemeDialogConfirm.md).[newState](DThemeDialogConfirm.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L638)