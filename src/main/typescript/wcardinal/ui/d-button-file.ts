/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOnOptions, DButtonOptions, DThemeButton } from "./d-button";
import { isString } from "./util/is-string";
import { UtilFileAs, UtilFileOnOptions, UtilFileOpener } from "./util/util-file-opener";

export import DButtonFileAs = UtilFileAs;

/**
 * Mappings of event names and handlers.
 */
export interface DButtonFileOnOptions<VALUE> extends DButtonOnOptions<VALUE>, UtilFileOnOptions<any> {

}

export interface DButtonFileOptions<
	VALUE = unknown,
	THEME extends DThemeButtonFile = DThemeButtonFile
> extends DButtonOptions<VALUE, THEME> {
	/**
	 * An output format.
	 */
	as?: (keyof typeof UtilFileAs) | UtilFileAs;

	/**
	 * A checker called before opening a file.
	 * If the checker returns false or the returned promise object is rejected,
	 * files will not be opened.
	 */
	checker?: () => Promise<unknown> | boolean;

	on?: DButtonFileOnOptions<VALUE>;
}

export interface DThemeButtonFile extends DThemeButton {

}

export class DButtonFile<
	VALUE = unknown,
	THEME extends DThemeButtonFile = DThemeButtonFile,
	OPTIONS extends DButtonFileOptions<VALUE, THEME> = DButtonFileOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected _checker!: (() => Promise<unknown> | boolean) | undefined;
	protected _opener!: UtilFileOpener;

	protected init( options?: OPTIONS ): void {
		super.init( options );

		this._checker = ( options != null && options.checker != null ? options.checker : undefined );
		const as: DButtonFileAs = ( options != null && options.as != null ?
			( isString( options.as ) ? DButtonFileAs[ options.as ] : options.as ) :
			DButtonFileAs.TEXT
		);
		const opener = new UtilFileOpener( as, this );
		this._opener = opener;
		this.on( "active", (): void => {
			const result = this.onOpening();
			if( result === true ) {
				opener.open();
			} else if( result === false ) {
				// DO NOTHING
			} else {
				result.then((): void => {
					opener.open();
				});
			}
		});
	}

	onOpening(): boolean | Promise<unknown> {
		const checker = this._checker;
		if( checker != null ) {
			return checker();
		}
		return true;
	}

	open(): void {
		this._opener.open();
	}

	protected getType(): string {
		return "DButtonFile";
	}
}
