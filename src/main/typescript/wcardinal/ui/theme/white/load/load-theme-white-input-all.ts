/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteInputAndLabel } from "./load-theme-white-input-and-label";
import { loadThemeWhiteInputBoolean } from "./load-theme-white-input-boolean";
import { loadThemeWhiteInputInteger } from "./load-theme-white-input-integer";
import { loadThemeWhiteInputLabel } from "./load-theme-white-input-label";
import { loadThemeWhiteInputReal } from "./load-theme-white-input-real";
import { loadThemeWhiteInputSearch } from "./load-theme-white-input-search";
import { loadThemeWhiteInputText } from "./load-theme-white-input-text";
import { loadThemeWhiteInputTextArea } from "./load-theme-white-input-text-area";

export const loadThemeWhiteInputAll = (): void => {
	loadThemeWhiteInputAndLabel();
	loadThemeWhiteInputBoolean();
	loadThemeWhiteInputInteger();
	loadThemeWhiteInputLabel();
	loadThemeWhiteInputReal();
	loadThemeWhiteInputSearch();
	loadThemeWhiteInputTextArea();
	loadThemeWhiteInputText();
};
