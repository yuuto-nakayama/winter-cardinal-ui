/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogSelect, DDialogSelectOptions } from "./d-dialog-select";

export interface DButtonSelectDialog<VALUE> {
	readonly value: VALUE | null;
	open(): Promise<void>;
}

export type DButtonSelectGetter<VALUE, DIALOG> = ( dialog: DIALOG ) => VALUE | null;
export type DButtonSelectSetter<VALUE, DIALOG> = ( dialog: DIALOG, value: VALUE | null ) => void;

export interface DButtonSelectOptions<
	VALUE extends unknown = unknown,
	DIALOG_VALUE extends unknown = unknown,
	DIALOG extends DButtonSelectDialog<DIALOG_VALUE> = DButtonSelectDialog<DIALOG_VALUE>,
	THEME extends DThemeButtonSelect = DThemeButtonSelect
> extends DButtonOptions<VALUE | null, THEME> {
	getter?: DButtonSelectGetter<VALUE, DIALOG>;
	setter?: DButtonSelectSetter<VALUE, DIALOG>;
	dialog?: DDialogSelectOptions<DIALOG_VALUE> | DIALOG;
}

export interface DThemeButtonSelect extends DThemeButton {
	getTextFormatter(): ( value: unknown | null, caller: DButtonSelect ) => string;
	getTextValue( state: DBaseState ): unknown | null;
	newTextValue(): unknown | null;
}

const defaultGetter = ( dialog: DButtonSelectDialog<any> ): any => {
	// Assumes the dialog.value is VALUE.
	return dialog.value;
};

const defaultSetter = (): void => {
	// DO NOTHING
};

export class DButtonSelect<
	VALUE extends unknown = unknown,
	DIALOG_VALUE extends unknown = unknown,
	DIALOG extends DButtonSelectDialog<DIALOG_VALUE> = DButtonSelectDialog<DIALOG_VALUE>,
	THEME extends DThemeButtonSelect = DThemeButtonSelect,
	OPTIONS extends DButtonSelectOptions<VALUE, DIALOG_VALUE, DIALOG, THEME>
		= DButtonSelectOptions<VALUE, DIALOG_VALUE, DIALOG, THEME>
> extends DButton<VALUE | null, THEME, OPTIONS> {
	protected _dialog?: DIALOG;

	protected init( options?: OPTIONS ) {
		super.init( this.toOptions( options ) );

		const getter: DButtonSelectGetter<VALUE, DIALOG> = (options && options.getter) || defaultGetter;
		const setter: DButtonSelectSetter<VALUE, DIALOG> = (options && options.setter) || defaultSetter;
		this.on( "active", (): void => {
			const dialog = this.dialog;
			setter( dialog, this._textValueComputed );
			dialog.open().then((): void => {
				const newValue = getter( dialog );
				const oldValue = this._textValueComputed;
				if( newValue !== oldValue ) {
					this.text = newValue;
					this.emit( "select", newValue, oldValue, this );
					this.emit( "change", this );
				}
			});
		});
	}

	get dialog(): DIALOG {
		let dialog = this._dialog;
		if( dialog == null ) {
			const options = this._options;
			const dialogOptions = options && options.dialog;
			if( dialogOptions && ("open" in dialogOptions) ) {
				dialog = dialogOptions;
			} else {
				// Assumes DIALOG === DDialogSelect<DIALOG_VALUE>.
				dialog = new DDialogSelect<DIALOG_VALUE>( dialogOptions ) as unknown as DIALOG;
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	protected toOptions( options?: OPTIONS ): OPTIONS | undefined {
		if( options ) {
			// Try to copy text.formatter to dialog.item.text.formatter at first
			const formatter = options.text?.formatter;
			if( formatter !== undefined ) {
				let dialog = options.dialog;
				if( ! (dialog && "open" in dialog) ) {
					dialog = dialog || {};
					const item = dialog.item = dialog.item || {};
					const text = item.text = item.text || {};
					if( text.formatter === undefined ) {
						// Assumes formatter is ( value: DIALOG_VALUE | null, caller: any ) => string.
						text.formatter = formatter as any;
					}
				}
			} else {
				// Try to copy dialog.item.text.formatter to text.formatter
				const dialog = options.dialog;
				if( ! (dialog && "open" in dialog) ) {
					const dialogFormatter = dialog?.item?.text?.formatter;
					if( dialogFormatter !== undefined ) {
						const text = options.text = options.text || {};
						if( text.formatter === undefined ) {
							// Assumes dialogFormatter is ( value: VALUE | null, caller: any ) => string.
							text.formatter = dialogFormatter as any;
						}
					}
				}
			}
		}
		return options;
	}

	get value(): VALUE | null {
		return this._textValueComputed;
	}

	set value( value: VALUE | null ) {
		this.text = value;
	}

	protected getType(): string {
		return "DButtonSelect";
	}
}