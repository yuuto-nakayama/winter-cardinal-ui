[Winter Cardinal UI - v0.200.0](../index.md) / DDialogFitted

# Class: DDialogFitted<VALUE, THEME, OPTIONS\>

A dialog with a header, a content and a footer.
Unlike [DDialogLayered](DDialogLayered.md), the width is determined by the content width.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `void` |
| `THEME` | extends [`DThemeDialogFitted`](../interfaces/DThemeDialogFitted.md) = [`DThemeDialogFitted`](../interfaces/DThemeDialogFitted.md) |
| `OPTIONS` | extends [`DDialogFittedOptions`](../interfaces/DDialogFittedOptions.md)<`VALUE`, `THEME`\> = [`DDialogFittedOptions`](../interfaces/DDialogFittedOptions.md)<`VALUE`, `THEME`\> |

## Hierarchy

- [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DDialogFitted`**

  ↳↳ [`DDialogColorGradient`](DDialogColorGradient.md)

  ↳↳ [`DDialogColor`](DDialogColor.md)

  ↳↳ [`DDialogDate`](DDialogDate.md)

  ↳↳ [`DDialogDatetime`](DDialogDatetime.md)

  ↳↳ [`DDialogTime`](DDialogTime.md)

## Table of contents

### Constructors

- [constructor](DDialogFitted.md#constructor)

### Properties

- [\_accessibleActive](DDialogFitted.md#_accessibleactive)
- [\_accessibleDiv](DDialogFitted.md#_accessiblediv)
- [\_align](DDialogFitted.md#_align)
- [\_animation](DDialogFitted.md#_animation)
- [\_auto](DDialogFitted.md#_auto)
- [\_background](DDialogFitted.md#_background)
- [\_border](DDialogFitted.md#_border)
- [\_bounds](DDialogFitted.md#_bounds)
- [\_clearType](DDialogFitted.md#_cleartype)
- [\_closeOn](DDialogFitted.md#_closeon)
- [\_content](DDialogFitted.md#_content)
- [\_corner](DDialogFitted.md#_corner)
- [\_cursor](DDialogFitted.md#_cursor)
- [\_destroyed](DDialogFitted.md#_destroyed)
- [\_focused](DDialogFitted.md#_focused)
- [\_footer](DDialogFitted.md#_footer)
- [\_gesture](DDialogFitted.md#_gesture)
- [\_header](DDialogFitted.md#_header)
- [\_lastDownPoint](DDialogFitted.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogFitted.md#_lastsortedindex)
- [\_layer](DDialogFitted.md#_layer)
- [\_layout](DDialogFitted.md#_layout)
- [\_mask](DDialogFitted.md#_mask)
- [\_mode](DDialogFitted.md#_mode)
- [\_onPrerenderBound](DDialogFitted.md#_onprerenderbound)
- [\_opener](DDialogFitted.md#_opener)
- [\_options](DDialogFitted.md#_options)
- [\_outline](DDialogFitted.md#_outline)
- [\_overlay](DDialogFitted.md#_overlay)
- [\_padding](DDialogFitted.md#_padding)
- [\_promise](DDialogFitted.md#_promise)
- [\_reflowable](DDialogFitted.md#_reflowable)
- [\_reject](DDialogFitted.md#_reject)
- [\_resolve](DDialogFitted.md#_resolve)
- [\_shortcuts](DDialogFitted.md#_shortcuts)
- [\_snippet](DDialogFitted.md#_snippet)
- [\_sticky](DDialogFitted.md#_sticky)
- [\_tempDisplayObjectParent](DDialogFitted.md#_tempdisplayobjectparent)
- [\_title](DDialogFitted.md#_title)
- [\_zIndex](DDialogFitted.md#_zindex)
- [accessible](DDialogFitted.md#accessible)
- [accessibleChildren](DDialogFitted.md#accessiblechildren)
- [accessibleHint](DDialogFitted.md#accessiblehint)
- [accessiblePointerEvents](DDialogFitted.md#accessiblepointerevents)
- [accessibleTitle](DDialogFitted.md#accessibletitle)
- [accessibleType](DDialogFitted.md#accessibletype)
- [alpha](DDialogFitted.md#alpha)
- [angle](DDialogFitted.md#angle)
- [buttonMode](DDialogFitted.md#buttonmode)
- [cacheAsBitmap](DDialogFitted.md#cacheasbitmap)
- [children](DDialogFitted.md#children)
- [cursor](DDialogFitted.md#cursor)
- [filterArea](DDialogFitted.md#filterarea)
- [filters](DDialogFitted.md#filters)
- [hitArea](DDialogFitted.md#hitarea)
- [interactive](DDialogFitted.md#interactive)
- [interactiveChildren](DDialogFitted.md#interactivechildren)
- [isMask](DDialogFitted.md#ismask)
- [isSprite](DDialogFitted.md#issprite)
- [localTransform](DDialogFitted.md#localtransform)
- [mask](DDialogFitted.md#mask)
- [name](DDialogFitted.md#name)
- [parent](DDialogFitted.md#parent)
- [pivot](DDialogFitted.md#pivot)
- [renderable](DDialogFitted.md#renderable)
- [rotation](DDialogFitted.md#rotation)
- [sortDirty](DDialogFitted.md#sortdirty)
- [sortableChildren](DDialogFitted.md#sortablechildren)
- [transform](DDialogFitted.md#transform)
- [visible](DDialogFitted.md#visible)
- [worldAlpha](DDialogFitted.md#worldalpha)
- [worldTransform](DDialogFitted.md#worldtransform)
- [worldVisible](DDialogFitted.md#worldvisible)
- [zIndex](DDialogFitted.md#zindex)
- [WORK\_BOUNDS](DDialogFitted.md#work_bounds)
- [WORK\_CONTAINS\_POINT](DDialogFitted.md#work_contains_point)

### Accessors

- [algin](DDialogFitted.md#algin)
- [align](DDialogFitted.md#align)
- [background](DDialogFitted.md#background)
- [border](DDialogFitted.md#border)
- [content](DDialogFitted.md#content)
- [corner](DDialogFitted.md#corner)
- [footer](DDialogFitted.md#footer)
- [gesture](DDialogFitted.md#gesture)
- [header](DDialogFitted.md#header)
- [height](DDialogFitted.md#height)
- [layer](DDialogFitted.md#layer)
- [layout](DDialogFitted.md#layout)
- [mode](DDialogFitted.md#mode)
- [options](DDialogFitted.md#options)
- [outline](DDialogFitted.md#outline)
- [padding](DDialogFitted.md#padding)
- [position](DDialogFitted.md#position)
- [reflowable](DDialogFitted.md#reflowable)
- [scale](DDialogFitted.md#scale)
- [shadow](DDialogFitted.md#shadow)
- [skew](DDialogFitted.md#skew)
- [snippet](DDialogFitted.md#snippet)
- [state](DDialogFitted.md#state)
- [theme](DDialogFitted.md#theme)
- [title](DDialogFitted.md#title)
- [type](DDialogFitted.md#type)
- [unsafe](DDialogFitted.md#unsafe)
- [weight](DDialogFitted.md#weight)
- [width](DDialogFitted.md#width)
- [x](DDialogFitted.md#x)
- [y](DDialogFitted.md#y)

### Methods

- [\_calculateBounds](DDialogFitted.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogFitted.md#_recursivepostupdatetransform)
- [\_render](DDialogFitted.md#_render)
- [addChild](DDialogFitted.md#addchild)
- [addChildAt](DDialogFitted.md#addchildat)
- [addListener](DDialogFitted.md#addlistener)
- [applyTitle](DDialogFitted.md#applytitle)
- [blur](DDialogFitted.md#blur)
- [calculateBounds](DDialogFitted.md#calculatebounds)
- [cancel](DDialogFitted.md#cancel)
- [close](DDialogFitted.md#close)
- [containsGlobalPoint](DDialogFitted.md#containsglobalpoint)
- [containsLocalPoint](DDialogFitted.md#containslocalpoint)
- [containsPoint](DDialogFitted.md#containspoint)
- [destroy](DDialogFitted.md#destroy)
- [displayObjectUpdateTransform](DDialogFitted.md#displayobjectupdatetransform)
- [doReject](DDialogFitted.md#doreject)
- [doResolve](DDialogFitted.md#doresolve)
- [emit](DDialogFitted.md#emit)
- [eventNames](DDialogFitted.md#eventnames)
- [findFirstFocusable](DDialogFitted.md#findfirstfocusable)
- [focus](DDialogFitted.md#focus)
- [focusOnClosest](DDialogFitted.md#focusonclosest)
- [getAnimation](DDialogFitted.md#getanimation)
- [getBounds](DDialogFitted.md#getbounds)
- [getChildAt](DDialogFitted.md#getchildat)
- [getChildByName](DDialogFitted.md#getchildbyname)
- [getChildIndex](DDialogFitted.md#getchildindex)
- [getClearType](DDialogFitted.md#getcleartype)
- [getClippingRect](DDialogFitted.md#getclippingrect)
- [getGlobalPosition](DDialogFitted.md#getglobalposition)
- [getHeight](DDialogFitted.md#getheight)
- [getLocalBounds](DDialogFitted.md#getlocalbounds)
- [getParentOfSize](DDialogFitted.md#getparentofsize)
- [getRejectReason](DDialogFitted.md#getrejectreason)
- [getResolvedValue](DDialogFitted.md#getresolvedvalue)
- [getThemeDefault](DDialogFitted.md#getthemedefault)
- [getType](DDialogFitted.md#gettype)
- [getWidth](DDialogFitted.md#getwidth)
- [getX](DDialogFitted.md#getx)
- [getY](DDialogFitted.md#gety)
- [hasDirty](DDialogFitted.md#hasdirty)
- [hasRefitableHeight](DDialogFitted.md#hasrefitableheight)
- [hasRefitableWidth](DDialogFitted.md#hasrefitablewidth)
- [hide](DDialogFitted.md#hide)
- [init](DDialogFitted.md#init)
- [initReflowable](DDialogFitted.md#initreflowable)
- [isDirty](DDialogFitted.md#isdirty)
- [isEventTarget](DDialogFitted.md#iseventtarget)
- [isHidden](DDialogFitted.md#ishidden)
- [isHierarchyDirty](DDialogFitted.md#ishierarchydirty)
- [isOpened](DDialogFitted.md#isopened)
- [isRefitable](DDialogFitted.md#isrefitable)
- [isShown](DDialogFitted.md#isshown)
- [listenerCount](DDialogFitted.md#listenercount)
- [listeners](DDialogFitted.md#listeners)
- [newContent](DDialogFitted.md#newcontent)
- [newContentChildren](DDialogFitted.md#newcontentchildren)
- [newFooter](DDialogFitted.md#newfooter)
- [newHeader](DDialogFitted.md#newheader)
- [newLayout](DDialogFitted.md#newlayout)
- [newLayoutChildren](DDialogFitted.md#newlayoutchildren)
- [newLayoutOptions](DDialogFitted.md#newlayoutoptions)
- [off](DDialogFitted.md#off)
- [ok](DDialogFitted.md#ok)
- [on](DDialogFitted.md#on)
- [onAnimationEnd](DDialogFitted.md#onanimationend)
- [onBlur](DDialogFitted.md#onblur)
- [onCancel](DDialogFitted.md#oncancel)
- [onChildBlur](DDialogFitted.md#onchildblur)
- [onChildFocus](DDialogFitted.md#onchildfocus)
- [onChildrenChange](DDialogFitted.md#onchildrenchange)
- [onClose](DDialogFitted.md#onclose)
- [onCloseOn](DDialogFitted.md#oncloseon)
- [onDblClick](DDialogFitted.md#ondblclick)
- [onDown](DDialogFitted.md#ondown)
- [onDownThis](DDialogFitted.md#ondownthis)
- [onFocus](DDialogFitted.md#onfocus)
- [onHierarchyDirty](DDialogFitted.md#onhierarchydirty)
- [onKeyDown](DDialogFitted.md#onkeydown)
- [onKeyUp](DDialogFitted.md#onkeyup)
- [onMove](DDialogFitted.md#onmove)
- [onOk](DDialogFitted.md#onok)
- [onOpen](DDialogFitted.md#onopen)
- [onOut](DDialogFitted.md#onout)
- [onOver](DDialogFitted.md#onover)
- [onParentMove](DDialogFitted.md#onparentmove)
- [onParentResize](DDialogFitted.md#onparentresize)
- [onPrerender](DDialogFitted.md#onprerender)
- [onRefit](DDialogFitted.md#onrefit)
- [onReflow](DDialogFitted.md#onreflow)
- [onResize](DDialogFitted.md#onresize)
- [onScale](DDialogFitted.md#onscale)
- [onShortcut](DDialogFitted.md#onshortcut)
- [onSkew](DDialogFitted.md#onskew)
- [onStateChange](DDialogFitted.md#onstatechange)
- [onUp](DDialogFitted.md#onup)
- [onUpThis](DDialogFitted.md#onupthis)
- [onWheel](DDialogFitted.md#onwheel)
- [once](DDialogFitted.md#once)
- [open](DDialogFitted.md#open)
- [reflow](DDialogFitted.md#reflow)
- [removeAllListeners](DDialogFitted.md#removealllisteners)
- [removeChild](DDialogFitted.md#removechild)
- [removeChildAt](DDialogFitted.md#removechildat)
- [removeChildren](DDialogFitted.md#removechildren)
- [removeListener](DDialogFitted.md#removelistener)
- [render](DDialogFitted.md#render)
- [renderAdvanced](DDialogFitted.md#renderadvanced)
- [resize](DDialogFitted.md#resize)
- [setChildIndex](DDialogFitted.md#setchildindex)
- [setFocused](DDialogFitted.md#setfocused)
- [setHeight](DDialogFitted.md#setheight)
- [setParent](DDialogFitted.md#setparent)
- [setTransform](DDialogFitted.md#settransform)
- [setWidth](DDialogFitted.md#setwidth)
- [setX](DDialogFitted.md#setx)
- [setY](DDialogFitted.md#sety)
- [show](DDialogFitted.md#show)
- [sortChildren](DDialogFitted.md#sortchildren)
- [swapChildren](DDialogFitted.md#swapchildren)
- [toAlign](DDialogFitted.md#toalign)
- [toCloseOn](DDialogFitted.md#tocloseon)
- [toContentOptions](DDialogFitted.md#tocontentoptions)
- [toCursor](DDialogFitted.md#tocursor)
- [toDirty](DDialogFitted.md#todirty)
- [toFooterOptions](DDialogFitted.md#tofooteroptions)
- [toGestureOptions](DDialogFitted.md#togestureoptions)
- [toGlobal](DDialogFitted.md#toglobal)
- [toHasDirty](DDialogFitted.md#tohasdirty)
- [toHeaderOptions](DDialogFitted.md#toheaderoptions)
- [toHierarchyDirty](DDialogFitted.md#tohierarchydirty)
- [toLayoutOptions](DDialogFitted.md#tolayoutoptions)
- [toLocal](DDialogFitted.md#tolocal)
- [toParentHasDirty](DDialogFitted.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialogFitted.md#toparenthierarchydirty)
- [toParentResized](DDialogFitted.md#toparentresized)
- [updateTransform](DDialogFitted.md#updatetransform)
- [mixin](DDialogFitted.md#mixin)

## Constructors

### constructor

• **new DDialogFitted**<`VALUE`, `THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `void` |
| `THEME` | extends [`DThemeDialogFitted`](../interfaces/DThemeDialogFitted.md) = [`DThemeDialogFitted`](../interfaces/DThemeDialogFitted.md) |
| `OPTIONS` | extends [`DDialogFittedOptions`](../interfaces/DDialogFittedOptions.md)<`VALUE`, `THEME`, `any`, `OPTIONS`\> = [`DDialogFittedOptions`](../interfaces/DDialogFittedOptions.md)<`VALUE`, `THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DDialogLayered](DDialogLayered.md).[constructor](DDialogLayered.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L750)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_accessibleActive](DDialogLayered.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_accessibleDiv](DDialogLayered.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_align

• `Protected` **\_align**: ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_align](DDialogLayered.md#_align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L125)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_animation](DDialogLayered.md#_animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L118)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_auto](DDialogLayered.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_background](DDialogLayered.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_border](DDialogLayered.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_bounds](DDialogLayered.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_clearType](DDialogLayered.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_closeOn](DDialogLayered.md#_closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L119)

___

### \_content

• `Protected` `Optional` **\_content**: [`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_content](DDialogLayered.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L98)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_corner](DDialogLayered.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_cursor](DDialogLayered.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_destroyed](DDialogLayered.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_focused

• `Protected` `Optional` **\_focused**: ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_focused](DDialogLayered.md#_focused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L120)

___

### \_footer

• `Protected` `Optional` **\_footer**: ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_footer](DDialogLayered.md#_footer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L99)

___

### \_gesture

• `Protected` **\_gesture**: [`DDialogGesture`](../interfaces/DDialogGesture.md)<[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_gesture](DDialogLayered.md#_gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L128)

___

### \_header

• `Protected` `Optional` **\_header**: ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_header](DDialogLayered.md#_header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L97)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_lastDownPoint](DDialogLayered.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_lastSortedIndex](DDialogLayered.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_layer

• `Protected` **\_layer**: ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_layer](DDialogLayered.md#_layer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L129)

___

### \_layout

• `Protected` `Optional` **\_layout**: [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_layout](DDialogLayered.md#_layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L95)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_mask](DDialogLayered.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_mode

• `Protected` **\_mode**: [`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_mode](DDialogLayered.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L122)

___

### \_onPrerenderBound

• `Protected` **\_onPrerenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_onPrerenderBound](DDialogLayered.md#_onprerenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L124)

___

### \_opener

• `Protected` `Optional` **\_opener**: ``null`` \| [`DDialogOpener`](../interfaces/DDialogOpener.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_opener](DDialogLayered.md#_opener)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L126)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_options](DDialogLayered.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_outline](DDialogLayered.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_overlay](DDialogLayered.md#_overlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L121)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_padding](DDialogLayered.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`<`VALUE`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_promise](DDialogLayered.md#_promise)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L114)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_reflowable](DDialogLayered.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_reject

• `Protected` `Optional` **\_reject**: (`reason?`: `any`) => `void`

#### Type declaration

▸ (`reason?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

##### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_reject](DDialogLayered.md#_reject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L116)

___

### \_resolve

• `Protected` `Optional` **\_resolve**: (`value`: `VALUE` \| `PromiseLike`<`VALUE`\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` \| `PromiseLike`<`VALUE`\> |

##### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_resolve](DDialogLayered.md#_resolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L115)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_shortcuts](DDialogLayered.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_snippet](DDialogLayered.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_sticky](DDialogLayered.md#_sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L123)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_tempDisplayObjectParent](DDialogLayered.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_title](DDialogLayered.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_zIndex](DDialogLayered.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[accessible](DDialogLayered.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8468

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Inherited from

[DDialogLayered](DDialogLayered.md).[accessibleChildren](DDialogLayered.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[accessibleHint](DDialogLayered.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8483

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Inherited from

[DDialogLayered](DDialogLayered.md).[accessiblePointerEvents](DDialogLayered.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[accessibleTitle](DDialogLayered.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8476

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Inherited from

[DDialogLayered](DDialogLayered.md).[accessibleType](DDialogLayered.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DDialogLayered](DDialogLayered.md).[alpha](DDialogLayered.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDialogLayered](DDialogLayered.md).[angle](DDialogLayered.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[buttonMode](DDialogLayered.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8853

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[cacheAsBitmap](DDialogLayered.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[children](DDialogLayered.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';

**`see`** https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[cursor](DDialogLayered.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Inherited from

[DDialogLayered](DDialogLayered.md).[filterArea](DDialogLayered.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

[DDialogLayered](DDialogLayered.md).[filters](DDialogLayered.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);

**`member`** {PIXI.IHitArea}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hitArea](DDialogLayered.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8841

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[interactive](DDialogLayered.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`member`** {boolean}

**`memberof`** PIXI.Container#

#### Inherited from

[DDialogLayered](DDialogLayered.md).[interactiveChildren](DDialogLayered.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isMask](DDialogLayered.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isSprite](DDialogLayered.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[localTransform](DDialogLayered.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8729

___

### mask

• **mask**: `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
{@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`example`**
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;

**`todo`** At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`member`** {PIXI.Container|PIXI.MaskData}

#### Inherited from

[DDialogLayered](DDialogLayered.md).[mask](DDialogLayered.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DDialogLayered](DDialogLayered.md).[name](DDialogLayered.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[parent](DDialogLayered.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DDialogLayered](DDialogLayered.md).[pivot](DDialogLayered.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

[DDialogLayered](DDialogLayered.md).[renderable](DDialogLayered.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDialogLayered](DDialogLayered.md).[rotation](DDialogLayered.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DDialogLayered](DDialogLayered.md).[sortDirty](DDialogLayered.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8300

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as @link https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`see`** PIXI.settings.SORTABLE_CHILDREN

**`member`** {boolean} PIXI.Container#sortableChildren

#### Inherited from

[DDialogLayered](DDialogLayered.md).[sortableChildren](DDialogLayered.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DDialogLayered](DDialogLayered.md).[transform](DDialogLayered.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

[DDialogLayered](DDialogLayered.md).[visible](DDialogLayered.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldAlpha](DDialogLayered.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldTransform](DDialogLayered.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldVisible](DDialogLayered.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8787

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Inherited from

[DDialogLayered](DDialogLayered.md).[zIndex](DDialogLayered.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_BOUNDS

▪ `Static` `Protected` `Optional` **WORK\_BOUNDS**: `Rectangle`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[WORK_BOUNDS](DDialogLayered.md#work_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L112)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[WORK_CONTAINS_POINT](DDialogLayered.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### algin

• `set` **algin**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign) |

#### Returns

`void`

#### Inherited from

DDialogLayered.algin

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L219)

___

### align

• `get` **align**(): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

DDialogLayered.align

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L215)

___

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialogLayered.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialogLayered.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### content

• `get` **content**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

DDialogLayered.content

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L170)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialogLayered.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### footer

• `get` **footer**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

DDialogLayered.footer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L195)

___

### gesture

• `get` **gesture**(): [`DDialogGesture`](../interfaces/DDialogGesture.md)<`this`\>

#### Returns

[`DDialogGesture`](../interfaces/DDialogGesture.md)<`this`\>

#### Inherited from

DDialogLayered.gesture

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L223)

___

### header

• `get` **header**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

DDialogLayered.header

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L140)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDialogLayered.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### layer

• `get` **layer**(): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

DDialogLayered.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L227)

___

### layout

• `get` **layout**(): [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

DDialogLayered.layout

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L106)

___

### mode

• `get` **mode**(): [`DDialogMode`](../index.md#ddialogmode)

#### Returns

[`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

DDialogLayered.mode

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L211)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDialogLayered.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialogLayered.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialogLayered.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialogLayered.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialogLayered.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DDialogLayered.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialogLayered.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialogLayered.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialogLayered.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DDialogLayered.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialogLayered.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1371)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DDialogLayered.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialogLayered.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialogLayered.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDialogLayered.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1135)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDialogLayered.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1175)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDialogLayered.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_calculateBounds](DDialogLayered.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1906](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1906)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_recursivePostUpdateTransform](DDialogLayered.md#_recursivepostupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8641

___

### \_render

▸ `Protected` **_render**(`renderer`): `void`

To be overridden by the subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_render](DDialogLayered.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

___

### addChild

▸ **addChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to add to the container |

#### Returns

`TChildren`[``0``]

The first child that was added.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[addChild](DDialogLayered.md#addchild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8315

___

### addChildAt

▸ **addChildAt**<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `T` | The child to add |
| `index` | `number` | The index to place the child in |

#### Returns

`T`

The child that was added.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[addChildAt](DDialogLayered.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[addListener](DDialogLayered.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[addListener](DDialogLayered.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[applyTitle](DDialogLayered.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1384)

___

### blur

▸ **blur**(`recursively?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[blur](DDialogLayered.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[calculateBounds](DDialogLayered.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[cancel](DDialogLayered.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L238)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[close](DDialogLayered.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L418)

___

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[containsGlobalPoint](DDialogLayered.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:501](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L501)

___

### containsLocalPoint

▸ `Protected` **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[containsLocalPoint](DDialogLayered.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1935](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1935)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[containsPoint](DDialogLayered.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1922](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1922)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[destroy](DDialogLayered.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1955](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1955)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`memberof`** PIXI.DisplayObject#

**`function`** displayObjectUpdateTransform

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[displayObjectUpdateTransform](DDialogLayered.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

___

### doReject

▸ `Protected` **doReject**(`reason?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[doReject](DDialogLayered.md#doreject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L435)

___

### doResolve

▸ `Protected` **doResolve**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` \| `PromiseLike`<`VALUE`\> |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[doResolve](DDialogLayered.md#doresolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L422)

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[emit](DDialogLayered.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[eventNames](DDialogLayered.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### findFirstFocusable

▸ `Protected` **findFirstFocusable**(`focusController`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusController` | [`DControllerFocus`](../interfaces/DControllerFocus.md) |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[findFirstFocusable](DDialogLayered.md#findfirstfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L225)

___

### focus

▸ **focus**(): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[focus](DDialogLayered.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[focusOnClosest](DDialogLayered.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

___

### getAnimation

▸ `Protected` **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getAnimation](DDialogLayered.md#getanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L276)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getBounds](DDialogLayered.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8651

___

### getChildAt

▸ **getChildAt**(`index`): `DisplayObject`

Returns the child at the specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child at |

#### Returns

`DisplayObject`

The child at the given index, if any.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getChildAt](DDialogLayered.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

**`method`** getChildByName

**`memberof`** PIXI.Container#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getChildByName](DDialogLayered.md#getchildbyname)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8460

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns the index position of a child DisplayObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The DisplayObject instance to identify |

#### Returns

`number`

The index position of the child display object to identify

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getChildIndex](DDialogLayered.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getClearType](DDialogLayered.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### getClippingRect

▸ **getClippingRect**(`target`, `result`): `void`

Returns a clipping rect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `unknown` | - |
| `result` | `Rectangle` | a clipping rect |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getClippingRect](DDialogLayered.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`method`** getGlobalPosition

**`memberof`** PIXI.DisplayObject#

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

The updated point.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getGlobalPosition](DDialogLayered.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getHeight](DDialogLayered.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1282)

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getLocalBounds](DDialogLayered.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getParentOfSize](DDialogLayered.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1716)

___

### getRejectReason

▸ `Protected` **getRejectReason**(): `any`

#### Returns

`any`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getRejectReason](DDialogLayered.md#getrejectreason)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L249)

___

### getResolvedValue

▸ `Protected` `Abstract` **getResolvedValue**(): `VALUE` \| `PromiseLike`<`VALUE`\>

#### Returns

`VALUE` \| `PromiseLike`<`VALUE`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getResolvedValue](DDialogLayered.md#getresolvedvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L247)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getThemeDefault](DDialogLayered.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialogLayered](DDialogLayered.md).[getType](DDialogLayered.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-fitted.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-fitted.ts#L45)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getWidth](DDialogLayered.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getX](DDialogLayered.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getY](DDialogLayered.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hasDirty](DDialogLayered.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

___

### hasRefitableHeight

▸ `Protected` **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hasRefitableHeight](DDialogLayered.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1666)

___

### hasRefitableWidth

▸ `Protected` **hasRefitableWidth**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hasRefitableWidth](DDialogLayered.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### hide

▸ **hide**(): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hide](DDialogLayered.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[init](DDialogLayered.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L101)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[initReflowable](DDialogLayered.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isDirty](DDialogLayered.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

___

### isEventTarget

▸ `Protected` **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isEventTarget](DDialogLayered.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1794)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isHidden](DDialogLayered.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isHierarchyDirty](DDialogLayered.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isOpened](DDialogLayered.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L414)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isRefitable](DDialogLayered.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1662](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1662)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isShown](DDialogLayered.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1400)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[listenerCount](DDialogLayered.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[listeners](DDialogLayered.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newContent

▸ `Protected` **newContent**(): [`DDialogFittedContent`](DDialogFittedContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Overrides

[DDialogLayered](DDialogLayered.md).[newContent](DDialogLayered.md#newcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-fitted.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-fitted.ts#L41)

___

### newContentChildren

▸ `Protected` **newContentChildren**(`theme`, `options?`): (``null`` \| `DisplayObject`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

(``null`` \| `DisplayObject`)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newContentChildren](DDialogLayered.md#newcontentchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L191)

___

### newFooter

▸ `Protected` **newFooter**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newFooter](DDialogLayered.md#newfooter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L204)

___

### newHeader

▸ `Protected` **newHeader**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newHeader](DDialogLayered.md#newheader)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L149)

___

### newLayout

▸ `Protected` **newLayout**(): [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newLayout](DDialogLayered.md#newlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L115)

___

### newLayoutChildren

▸ `Protected` **newLayoutChildren**(`theme`, `options?`): (``null`` \| `DisplayObject`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

(``null`` \| `DisplayObject`)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newLayoutChildren](DDialogLayered.md#newlayoutchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L136)

___

### newLayoutOptions

▸ `Protected` **newLayoutOptions**(`theme`, `options?`): [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Overrides

[DDialogLayered](DDialogLayered.md).[newLayoutOptions](DDialogLayered.md#newlayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-fitted.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-fitted.ts#L33)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[off](DDialogLayered.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### ok

▸ **ok**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[ok](DDialogLayered.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L229)

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[on](DDialogLayered.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[on](DDialogLayered.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onAnimationEnd

▸ `Protected` **onAnimationEnd**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onAnimationEnd](DDialogLayered.md#onanimationend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L291)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onBlur](DDialogLayered.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1558)

___

### onCancel

▸ `Protected` **onCancel**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onCancel](DDialogLayered.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L242)

___

### onChildBlur

▸ `Protected` **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onChildBlur](DDialogLayered.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

___

### onChildFocus

▸ `Protected` **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onChildFocus](DDialogLayered.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onChildrenChange](DDialogLayered.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onClose

▸ `Protected` **onClose**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onClose](DDialogLayered.md#onclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L448)

___

### onCloseOn

▸ `Protected` **onCloseOn**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onCloseOn](DDialogLayered.md#oncloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L497)

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onDblClick](DDialogLayered.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1881](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1881)

___

### onDown

▸ `Protected` **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onDown](DDialogLayered.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1808](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1808)

___

### onDownThis

▸ `Protected` **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onDownThis](DDialogLayered.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1815](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1815)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onFocus](DDialogLayered.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onHierarchyDirty](DDialogLayered.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onKeyDown](DDialogLayered.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L488)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onKeyUp](DDialogLayered.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1788)

___

### onMove

▸ `Protected` **onMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onMove](DDialogLayered.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

___

### onOk

▸ `Protected` **onOk**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` \| `PromiseLike`<`VALUE`\> |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onOk](DDialogLayered.md#onok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L233)

___

### onOpen

▸ `Protected` **onOpen**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onOpen](DDialogLayered.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:401](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L401)

___

### onOut

▸ `Protected` **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onOut](DDialogLayered.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1872)

___

### onOver

▸ `Protected` **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onOver](DDialogLayered.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1858](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1858)

___

### onParentMove

▸ `Protected` **onParentMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

Called when a parent moved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new parent's local x position |
| `newY` | `number` | a new parent's local y position |
| `oldX` | `number` | an old parent's local x position |
| `oldY` | `number` | an old parent's local y position |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onParentMove](DDialogLayered.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1772)

___

### onParentResize

▸ **onParentResize**(`parentWidth`, `parentHeight`, `parentPadding`): `void`

Called when a parent resized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentWidth` | `number` |
| `parentHeight` | `number` |
| `parentPadding` | [`DPadding`](../interfaces/DPadding.md) |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onParentResize](DDialogLayered.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L262)

___

### onPrerender

▸ `Protected` **onPrerender**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onPrerender](DDialogLayered.md#onprerender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:376](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L376)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onRefit](DDialogLayered.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1618)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onReflow](DDialogLayered.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

___

### onResize

▸ **onResize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |
| `newHeight` | `number` |
| `oldWidth` | `number` |
| `oldHeight` | `number` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onResize](DDialogLayered.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1103)

___

### onScale

▸ `Protected` **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onScale](DDialogLayered.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### onShortcut

▸ `Protected` **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onShortcut](DDialogLayered.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

___

### onSkew

▸ `Protected` **onSkew**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onSkew](DDialogLayered.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onStateChange](DDialogLayered.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

___

### onUp

▸ `Protected` **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onUp](DDialogLayered.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1826)

___

### onUpThis

▸ `Protected` **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onUpThis](DDialogLayered.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1833](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1833)

___

### onWheel

▸ **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onWheel](DDialogLayered.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1777)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[once](DDialogLayered.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[once](DDialogLayered.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### open

▸ **open**(`opener?`): `Promise`<`VALUE`\>

Opens a dialog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opener?` | [`DDialogOpener`](../interfaces/DDialogOpener.md) | An opener of a dialog. The dialog position is determined based on a position and a size of the opener. If the opener is undefined, the dialog is placed at the center of the screen. |

#### Returns

`Promise`<`VALUE`\>

a value of this dialog

#### Inherited from

[DDialogLayered](DDialogLayered.md).[open](DDialogLayered.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L324)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[reflow](DDialogLayered.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1591](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1591)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeAllListeners](DDialogLayered.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeAllListeners](DDialogLayered.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeChild

▸ **removeChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to remove |

#### Returns

`TChildren`[``0``]

The first child that was removed.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeChild](DDialogLayered.md#removechild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8358

___

### removeChildAt

▸ **removeChildAt**(`index`): `DisplayObject`

Removes a child from the specified index position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child from |

#### Returns

`DisplayObject`

The child that was removed.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeChildAt](DDialogLayered.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `beginIndex?` | `number` |
| `endIndex?` | `number` |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeChildren](DDialogLayered.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeListener](DDialogLayered.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeListener](DDialogLayered.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24097

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[render](DDialogLayered.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### renderAdvanced

▸ `Protected` **renderAdvanced**(`renderer`): `void`

Render the object using the WebGL renderer and advanced features.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[renderAdvanced](DDialogLayered.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### resize

▸ **resize**(`width?`, `height?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[resize](DDialogLayered.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): `void`

Changes the position of an existing child in the display object container

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The child DisplayObject instance for which you want to change the index number |
| `index` | `number` | The resulting index number for the child display object |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setChildIndex](DDialogLayered.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setFocused](DDialogLayered.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setHeight](DDialogLayered.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1286)

___

### setParent

▸ **setParent**(`container`): `Container`

Set the parent Container of this DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | The Container to add this DisplayObject to. |

#### Returns

`Container`

The Container that this DisplayObject was added to.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setParent](DDialogLayered.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8686

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `scaleX?` | `number` |
| `scaleY?` | `number` |
| `rotation?` | `number` |
| `skewX?` | `number` |
| `skewY?` | `number` |
| `pivotX?` | `number` |
| `pivotY?` | `number` |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setTransform](DDialogLayered.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### setWidth

▸ **setWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setWidth](DDialogLayered.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1227)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setX](DDialogLayered.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1152)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setY](DDialogLayered.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogFitted`](DDialogFitted.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[show](DDialogLayered.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[sortChildren](DDialogLayered.md#sortchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8377

___

### swapChildren

▸ **swapChildren**(`child`, `child2`): `void`

Swaps the position of 2 Display Objects within this container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | First display object to swap |
| `child2` | `DisplayObject` | Second display object to swap |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[swapChildren](DDialogLayered.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toAlign

▸ `Protected` **toAlign**(`mode`, `theme`, `options?`): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toAlign](DDialogLayered.md#toalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L200)

___

### toCloseOn

▸ `Protected` **toCloseOn**(`mode`, `theme`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toCloseOn](DDialogLayered.md#tocloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L184)

___

### toContentOptions

▸ `Protected` **toContentOptions**(`theme`, `options?`): [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toContentOptions](DDialogLayered.md#tocontentoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L183)

___

### toCursor

▸ `Protected` **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\> |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toCursor](DDialogLayered.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toDirty](DDialogLayered.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

___

### toFooterOptions

▸ `Protected` **toFooterOptions**(`theme`, `options?`): `undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toFooterOptions](DDialogLayered.md#tofooteroptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L212)

___

### toGestureOptions

▸ `Protected` **toGestureOptions**(`mode`, `theme`, `options?`): [`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toGestureOptions](DDialogLayered.md#togestureoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L231)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toGlobal](DDialogLayered.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHasDirty](DDialogLayered.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHeaderOptions

▸ `Protected` **toHeaderOptions**(`theme`, `options?`): `undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHeaderOptions](DDialogLayered.md#toheaderoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L157)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHierarchyDirty](DDialogLayered.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

___

### toLayoutOptions

▸ `Protected` **toLayoutOptions**(`theme`, `options?`): [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toLayoutOptions](DDialogLayered.md#tolayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L119)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | - |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toLocal](DDialogLayered.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentHasDirty](DDialogLayered.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentHierarchyDirty](DDialogLayered.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentResized](DDialogLayered.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L1709)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[updateTransform](DDialogLayered.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8381

___

### mixin

▸ `Static` **mixin**(`source`): `void`

Mixes all enumerable properties and methods from a source object to DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `any` | The source of properties and methods to mix in. |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[mixin](DDialogLayered.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979