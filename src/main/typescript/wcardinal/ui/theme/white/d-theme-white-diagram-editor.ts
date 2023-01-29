/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDiagramEditor } from "../../d-diagram-editor";
import { DThemeWhiteDiagramBase } from "./d-theme-white-diagram-base";

export class DThemeWhiteDiagramEditor
	extends DThemeWhiteDiagramBase
	implements DThemeDiagramEditor
{
	isAmbient(): boolean {
		return false;
	}

	isThumbnailEnabled(): boolean {
		return false;
	}

	getThumbnailSize(): number | null {
		return null;
	}

	isSnapperEnabled(): boolean {
		return true;
	}

	isSnapperGridVisible(): boolean {
		return true;
	}

	isSnapperGridEnabled(): boolean {
		return true;
	}

	getSnapperGridSize(): number {
		return 10;
	}

	isSnapperTargetVisible(): boolean {
		return true;
	}

	isSnapperTargetEnabled(): boolean {
		return true;
	}
}
