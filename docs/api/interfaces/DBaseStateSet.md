[Winter Cardinal UI - v0.310.1](../index.md) / DBaseStateSet

# Interface: DBaseStateSet

## Hierarchy

- **`DBaseStateSet`**

  ↳ [`EShapeStateSet`](EShapeStateSet.md)

## Implemented by

- [`DBaseStateSetImpl`](../classes/DBaseStateSetImpl.md)

## Table of contents

### Properties

- [blinker](DBaseStateSet.md#blinker)
- [inActive](DBaseStateSet.md#inactive)
- [inAlternated](DBaseStateSet.md#inalternated)
- [inChanged](DBaseStateSet.md#inchanged)
- [inDisabled](DBaseStateSet.md#indisabled)
- [inEnabled](DBaseStateSet.md#inenabled)
- [inFailed](DBaseStateSet.md#infailed)
- [inFocusReverse](DBaseStateSet.md#infocusreverse)
- [inFocusRoot](DBaseStateSet.md#infocusroot)
- [inFocusable](DBaseStateSet.md#infocusable)
- [inFocused](DBaseStateSet.md#infocused)
- [inGesturing](DBaseStateSet.md#ingesturing)
- [inHovered](DBaseStateSet.md#inhovered)
- [inInvalid](DBaseStateSet.md#ininvalid)
- [inPressed](DBaseStateSet.md#inpressed)
- [inReadOnly](DBaseStateSet.md#inreadonly)
- [inSucceeded](DBaseStateSet.md#insucceeded)
- [inUnfocusable](DBaseStateSet.md#inunfocusable)
- [inWarned](DBaseStateSet.md#inwarned)
- [isActionable](DBaseStateSet.md#isactionable)
- [isActive](DBaseStateSet.md#isactive)
- [isAlternated](DBaseStateSet.md#isalternated)
- [isChanged](DBaseStateSet.md#ischanged)
- [isDisabled](DBaseStateSet.md#isdisabled)
- [isEnabled](DBaseStateSet.md#isenabled)
- [isFailed](DBaseStateSet.md#isfailed)
- [isFocusReverse](DBaseStateSet.md#isfocusreverse)
- [isFocusRoot](DBaseStateSet.md#isfocusroot)
- [isFocusable](DBaseStateSet.md#isfocusable)
- [isFocused](DBaseStateSet.md#isfocused)
- [isGesturing](DBaseStateSet.md#isgesturing)
- [isHovered](DBaseStateSet.md#ishovered)
- [isInvalid](DBaseStateSet.md#isinvalid)
- [isPressed](DBaseStateSet.md#ispressed)
- [isReadOnly](DBaseStateSet.md#isreadonly)
- [isSucceeded](DBaseStateSet.md#issucceeded)
- [isUnfocusable](DBaseStateSet.md#isunfocusable)
- [isWarned](DBaseStateSet.md#iswarned)
- [onActive](DBaseStateSet.md#onactive)
- [onAlternated](DBaseStateSet.md#onalternated)
- [onChanged](DBaseStateSet.md#onchanged)
- [onDisabled](DBaseStateSet.md#ondisabled)
- [onEnabled](DBaseStateSet.md#onenabled)
- [onFailed](DBaseStateSet.md#onfailed)
- [onFocusReverse](DBaseStateSet.md#onfocusreverse)
- [onFocusRoot](DBaseStateSet.md#onfocusroot)
- [onFocusable](DBaseStateSet.md#onfocusable)
- [onFocused](DBaseStateSet.md#onfocused)
- [onGesturing](DBaseStateSet.md#ongesturing)
- [onHovered](DBaseStateSet.md#onhovered)
- [onInvalid](DBaseStateSet.md#oninvalid)
- [onPressed](DBaseStateSet.md#onpressed)
- [onReadOnly](DBaseStateSet.md#onreadonly)
- [onSucceeded](DBaseStateSet.md#onsucceeded)
- [onUnfocusable](DBaseStateSet.md#onunfocusable)
- [onWarned](DBaseStateSet.md#onwarned)
- [parent](DBaseStateSet.md#parent)
- [ticker](DBaseStateSet.md#ticker)
- [underActive](DBaseStateSet.md#underactive)
- [underAlternated](DBaseStateSet.md#underalternated)
- [underChanged](DBaseStateSet.md#underchanged)
- [underDisabled](DBaseStateSet.md#underdisabled)
- [underEnabled](DBaseStateSet.md#underenabled)
- [underFailed](DBaseStateSet.md#underfailed)
- [underFocusReverse](DBaseStateSet.md#underfocusreverse)
- [underFocusRoot](DBaseStateSet.md#underfocusroot)
- [underFocusable](DBaseStateSet.md#underfocusable)
- [underFocused](DBaseStateSet.md#underfocused)
- [underGesturing](DBaseStateSet.md#undergesturing)
- [underHovered](DBaseStateSet.md#underhovered)
- [underInvalid](DBaseStateSet.md#underinvalid)
- [underPressed](DBaseStateSet.md#underpressed)
- [underReadOnly](DBaseStateSet.md#underreadonly)
- [underSucceeded](DBaseStateSet.md#undersucceeded)
- [underUnfocusable](DBaseStateSet.md#underunfocusable)
- [underWarned](DBaseStateSet.md#underwarned)

### Methods

- [add](DBaseStateSet.md#add)
- [addAll](DBaseStateSet.md#addall)
- [clear](DBaseStateSet.md#clear)
- [copy](DBaseStateSet.md#copy)
- [each](DBaseStateSet.md#each)
- [in](DBaseStateSet.md#in)
- [is](DBaseStateSet.md#is)
- [lock](DBaseStateSet.md#lock)
- [on](DBaseStateSet.md#on)
- [onParentChange](DBaseStateSet.md#onparentchange)
- [remove](DBaseStateSet.md#remove)
- [removeAll](DBaseStateSet.md#removeall)
- [set](DBaseStateSet.md#set)
- [setAll](DBaseStateSet.md#setall)
- [size](DBaseStateSet.md#size)
- [toObject](DBaseStateSet.md#toobject)
- [toString](DBaseStateSet.md#tostring)
- [under](DBaseStateSet.md#under)
- [unlock](DBaseStateSet.md#unlock)
- [valueOf](DBaseStateSet.md#valueof)

## Properties

### blinker

• `Readonly` **blinker**: [`DBaseStateSetBlinker`](DBaseStateSetBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L13)

___

### inActive

• `Readonly` **inActive**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L21)

___

### inAlternated

• `Readonly` **inAlternated**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L86)

___

### inChanged

• `Readonly` **inChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L82)

___

### inDisabled

• `Readonly` **inDisabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L37)

___

### inEnabled

• `Readonly` **inEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L33)

___

### inFailed

• `Readonly` **inFailed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L74)

___

### inFocusReverse

• `Readonly` **inFocusReverse**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L62)

___

### inFocusRoot

• `Readonly` **inFocusRoot**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L58)

___

### inFocusable

• `Readonly` **inFocusable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L50)

___

### inFocused

• `Readonly` **inFocused**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L46)

___

### inGesturing

• `Readonly` **inGesturing**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L42)

___

### inHovered

• `Readonly` **inHovered**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L17)

___

### inInvalid

• `Readonly` **inInvalid**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L66)

___

### inPressed

• `Readonly` **inPressed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L25)

___

### inReadOnly

• `Readonly` **inReadOnly**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L29)

___

### inSucceeded

• `Readonly` **inSucceeded**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L70)

___

### inUnfocusable

• `Readonly` **inUnfocusable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L54)

___

### inWarned

• `Readonly` **inWarned**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L78)

___

### isActionable

• **isActionable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L40)

___

### isActive

• **isActive**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L20)

___

### isAlternated

• **isAlternated**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L85)

___

### isChanged

• **isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L81)

___

### isDisabled

• **isDisabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L36)

___

### isEnabled

• **isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L32)

___

### isFailed

• **isFailed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L73)

___

### isFocusReverse

• **isFocusReverse**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L61)

___

### isFocusRoot

• **isFocusRoot**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L57)

___

### isFocusable

• **isFocusable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L49)

___

### isFocused

• **isFocused**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L45)

___

### isGesturing

• **isGesturing**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L41)

___

### isHovered

• **isHovered**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L16)

___

### isInvalid

• **isInvalid**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L65)

___

### isPressed

• **isPressed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L24)

___

### isReadOnly

• **isReadOnly**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L28)

___

### isSucceeded

• **isSucceeded**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L69)

___

### isUnfocusable

• **isUnfocusable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L53)

___

### isWarned

• **isWarned**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L77)

___

### onActive

• `Readonly` **onActive**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L22)

___

### onAlternated

• `Readonly` **onAlternated**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L87)

___

### onChanged

• `Readonly` **onChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L83)

___

### onDisabled

• `Readonly` **onDisabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L38)

___

### onEnabled

• `Readonly` **onEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L34)

___

### onFailed

• `Readonly` **onFailed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L75)

___

### onFocusReverse

• `Readonly` **onFocusReverse**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L63)

___

### onFocusRoot

• `Readonly` **onFocusRoot**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L59)

___

### onFocusable

• `Readonly` **onFocusable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L51)

___

### onFocused

• `Readonly` **onFocused**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L47)

___

### onGesturing

• `Readonly` **onGesturing**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L43)

___

### onHovered

• `Readonly` **onHovered**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L18)

___

### onInvalid

• `Readonly` **onInvalid**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L67)

___

### onPressed

• `Readonly` **onPressed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L26)

___

### onReadOnly

• `Readonly` **onReadOnly**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L30)

___

### onSucceeded

• `Readonly` **onSucceeded**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L71)

___

### onUnfocusable

• `Readonly` **onUnfocusable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L55)

___

### onWarned

• `Readonly` **onWarned**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L79)

___

### parent

• **parent**: ``null`` \| [`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L12)

___

### ticker

• `Readonly` **ticker**: [`DBaseStateSetTicker`](DBaseStateSetTicker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L14)

___

### underActive

• `Readonly` **underActive**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L23)

___

### underAlternated

• `Readonly` **underAlternated**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L88)

___

### underChanged

• `Readonly` **underChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L84)

___

### underDisabled

• `Readonly` **underDisabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L39)

___

### underEnabled

• `Readonly` **underEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L35)

___

### underFailed

• `Readonly` **underFailed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L76)

___

### underFocusReverse

• `Readonly` **underFocusReverse**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L64)

___

### underFocusRoot

• `Readonly` **underFocusRoot**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L60)

___

### underFocusable

• `Readonly` **underFocusable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L52)

___

### underFocused

• `Readonly` **underFocused**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L48)

___

### underGesturing

• `Readonly` **underGesturing**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L44)

___

### underHovered

• `Readonly` **underHovered**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L19)

___

### underInvalid

• `Readonly` **underInvalid**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L68)

___

### underPressed

• `Readonly` **underPressed**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L27)

___

### underReadOnly

• `Readonly` **underReadOnly**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L31)

___

### underSucceeded

• `Readonly` **underSucceeded**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L72)

___

### underUnfocusable

• `Readonly` **underUnfocusable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L56)

___

### underWarned

• `Readonly` **underWarned**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L80)

## Methods

### add

▸ **add**(`state`, `value?`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `value?` | ``null`` \| `number` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L151)

___

### addAll

▸ **addAll**(`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L153)

▸ **addAll**(`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L154)

▸ **addAll**(`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L155)

▸ **addAll**(...`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L157)

▸ **addAll**(...`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L158)

___

### clear

▸ **clear**(): [`DBaseStateSet`](DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L185)

___

### copy

▸ **copy**(`state`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L191)

___

### each

▸ **each**(`iteratee`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`state`: `string`, `value`: ``null`` \| `number`) => `void` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L189)

___

### in

▸ **in**(`state`, `value?`): `boolean`

Returns true if the given state is on or if one of the parents has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the given state is on or if one of the parents has the given state.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L110)

___

### is

▸ **is**(`state`, `value?`): `boolean`

Returns true if the given state is on.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the given state is on

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L99)

___

### lock

▸ **lock**(`callOnChange?`): [`DBaseStateSet`](DBaseStateSet.md)

Locks this state set.
The locked state set delays calling the change event handler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callOnChange?` | `boolean` | false to stop calling the change event handler when unlocked |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

this

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L141)

___

### on

▸ **on**(`state`, `value?`): `boolean`

Returns true if the direct parent has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the direct parent has the given state.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L121)

___

### onParentChange

▸ **onParentChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L193)

___

### remove

▸ **remove**(`state`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L160)

___

### removeAll

▸ **removeAll**(`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L162)

▸ **removeAll**(`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L163)

▸ **removeAll**(`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L164)

▸ **removeAll**(...`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L166)

▸ **removeAll**(...`states`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L167)

▸ **removeAll**(`matcher`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | (`state`: `string`) => `boolean` \| `void` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L169)

___

### set

▸ **set**(`state`, `on`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `on` | `boolean` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L171)

▸ **set**(`state`, `value`, `on`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `value` | ``null`` \| `number` |
| `on` | `boolean` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L172)

▸ **set**(`added`, `removed`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `removed` | ``null`` \| `string` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L174)

▸ **set**(`added`, `value`, `removed`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `value` | ``null`` \| `number` |
| `removed` | ``null`` \| `string` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L175)

___

### setAll

▸ **setAll**(`states`, `on`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |
| `on` | `boolean` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L177)

▸ **setAll**(`states`, `on`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |
| `on` | `boolean` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L178)

▸ **setAll**(`states`, `on`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |
| `on` | `boolean` |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L179)

▸ **setAll**(`addeds`, `removeds`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L181)

▸ **setAll**(`addeds`, `removeds`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L182)

▸ **setAll**(`addeds`, `removeds`): [`DBaseStateSet`](DBaseStateSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] \| [`DBaseStateAndValue`](DBaseStateAndValue.md)[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L183)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L190)

___

### toObject

▸ **toObject**(): [`DBaseStateSetLike`](DBaseStateSetLike.md)

#### Returns

[`DBaseStateSetLike`](DBaseStateSetLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L195)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L196)

___

### under

▸ **under**(`state`, `value?`): `boolean`

Returns true if one of the parents has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if one of the parents has the given state.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L132)

___

### unlock

▸ **unlock**(): [`DBaseStateSet`](DBaseStateSet.md)

Unlocks this state set and calls the change event handler if this state set has changed.
However, if this state set is locked with the `callOnChange` of false, the change event handler is not called.

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

this

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L149)

___

### valueOf

▸ **valueOf**(`state`, `def?`): `undefined` \| ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `def?` | ``null`` \| `number` |

#### Returns

`undefined` \| ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set.ts#L187)
