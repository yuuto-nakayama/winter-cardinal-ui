/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDropdown } from "../../d-dropdown";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkDropdownBase } from "./d-theme-dark-dropdown-base";

export class DThemeDarkDropdown extends DThemeDarkDropdownBase<string> implements DThemeDropdown {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}

	getTextValue( state: DBaseStateSet ): string {
		return "";
	}
}
