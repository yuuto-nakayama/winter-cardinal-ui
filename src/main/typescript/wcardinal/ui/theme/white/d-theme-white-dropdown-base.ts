/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDropdownBase } from "../../d-dropdown-base";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

DThemeWhiteAtlas.add( "dropdown_mark", 20, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 5 10 11 4 5"></polyline>` +
	`</g>`
);

export abstract class DThemeWhiteDropdownBase<TEXT_VALUE> extends DThemeWhiteButtonBase
	implements DThemeDropdownBase<TEXT_VALUE> {

	constructor() {
		super( DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD );
	}

	getSecondaryImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getSecondaryImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getSecondaryImageMarginHorizontal(): number {
		return - this.getPaddingRight() * 0.5;
	}

	getSecondaryImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.dropdown_mark;
	}

	abstract newTextValue(): DStateAwareOrValueMightBe<TEXT_VALUE>;
	abstract getTextValue( state: DBaseStateSet ): TEXT_VALUE;
}
