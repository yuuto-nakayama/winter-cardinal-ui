/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkNote } from "./d-theme-dark-note";

export class DThemeDarkNoteNoItemsFound extends DThemeDarkNote {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "No items found";
	}
}
