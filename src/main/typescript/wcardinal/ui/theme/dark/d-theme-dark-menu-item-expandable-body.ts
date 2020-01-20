/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeMenuItemExpandableBody } from "../../d-menu-item-expandable-body";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";

export class DThemeDarkMenuItemExpandableBody extends DThemeDarkLayoutVertical
	implements DThemeMenuItemExpandableBody {

	getWidth(): DCoordinateSize {
		return "padding";
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
