[Winter Cardinal UI - v0.310.1](../index.md) / DControllerKeyboardImpl

# Class: DControllerKeyboardImpl

## Hierarchy

- `EventEmitter`

  ↳ **`DControllerKeyboardImpl`**

## Table of contents

### Constructors

- [constructor](DControllerKeyboardImpl.md#constructor)

### Methods

- [addListener](DControllerKeyboardImpl.md#addlistener)
- [emit](DControllerKeyboardImpl.md#emit)
- [eventNames](DControllerKeyboardImpl.md#eventnames)
- [hasOnKeyDown](DControllerKeyboardImpl.md#hasonkeydown)
- [hasOnKeyUp](DControllerKeyboardImpl.md#hasonkeyup)
- [init](DControllerKeyboardImpl.md#init)
- [listenerCount](DControllerKeyboardImpl.md#listenercount)
- [listeners](DControllerKeyboardImpl.md#listeners)
- [off](DControllerKeyboardImpl.md#off)
- [on](DControllerKeyboardImpl.md#on)
- [once](DControllerKeyboardImpl.md#once)
- [removeAllListeners](DControllerKeyboardImpl.md#removealllisteners)
- [removeListener](DControllerKeyboardImpl.md#removelistener)

## Constructors

### constructor

• **new DControllerKeyboardImpl**()

#### Inherited from

utils.EventEmitter.constructor

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

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

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### hasOnKeyDown

▸ `Protected` **hasOnKeyDown**(`target`): target is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is Object

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-keyboard-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controller-keyboard-impl.ts#L65)

___

### hasOnKeyUp

▸ `Protected` **hasOnKeyUp**(`target`): target is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is Object

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-keyboard-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controller-keyboard-impl.ts#L69)

___

### init

▸ **init**(`element`, `stage`, `focusController`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `stage` | `Container` |
| `focusController` | [`DControllerFocus`](../interfaces/DControllerFocus.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-keyboard-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controller-keyboard-impl.ts#L11)

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

utils.EventEmitter.listenerCount

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

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DControllerKeyboardImpl`](DControllerKeyboardImpl.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056
