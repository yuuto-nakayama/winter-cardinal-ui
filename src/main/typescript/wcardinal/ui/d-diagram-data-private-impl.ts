/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramDataDiagram } from "./d-diagram-data";
import { DDiagramDataScoped } from "./d-diagram-data-scoped";

export class DDiagramDataPrivateImpl implements DDiagramDataScoped {
	protected _diagram: DDiagramDataDiagram;

	constructor(diagram: DDiagramDataDiagram) {
		this._diagram = diagram;
	}

	get ids(): string[] {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.private.ids;
		}
		return [];
	}

	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.private.set(id, value, time, from, to);
		}
		return false;
	}

	toDirty(id: string): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.private.toDirty(id);
		}
		return false;
	}

	each(iteratee: (id: string) => boolean | void): string | null {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.private.each(iteratee);
		}
		return null;
	}
}
