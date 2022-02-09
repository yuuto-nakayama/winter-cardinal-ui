[Winter Cardinal UI - v0.154.0](../index.md) / DTableColumnEditing

# Interface: DTableColumnEditing<ROW_VALUE, CELL_VALUE\>

## Type parameters

| Name |
| :------ |
| `ROW_VALUE` |
| `CELL_VALUE` |

## Table of contents

### Properties

- [enable](DTableColumnEditing.md#enable)
- [formatter](DTableColumnEditing.md#formatter)
- [unformatter](DTableColumnEditing.md#unformatter)
- [validator](DTableColumnEditing.md#validator)

## Properties

### enable

• **enable**: `boolean` \| [`DTableEditable`](../index.md#dtableeditable)<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L94)

___

### formatter

• `Optional` **formatter**: [`DTableEditingFormatter`](../index.md#dtableeditingformatter)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L95)

___

### unformatter

• `Optional` **unformatter**: [`DTableEditingUnformatter`](../index.md#dtableeditingunformatter)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L96)

___

### validator

• `Optional` **validator**: [`DTableEditingValidator`](../index.md#dtableeditingvalidator)<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L97)