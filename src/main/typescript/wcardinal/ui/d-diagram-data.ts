/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasData } from "./d-diagram-canvas-data";
import { DDiagramDataMapper } from "./d-diagram-data-mapper";
import { DDiagramDataPrivate } from "./d-diagram-data-private";
import { DDiagramDataRemote } from "./d-diagram-data-remote";
import { DDiagramDataRemoteOptions } from "./d-diagram-data-remote";

export interface DDiagramDataCanvas {
	data: DDiagramCanvasData;
}

export interface DDiagramDataDiagram {
	canvas: DDiagramDataCanvas | null;
}

export interface DDiagramDataOptions {
	/**
	 * A data mapper.
	 */
	mapper?: DDiagramDataMapper;

	/**
	 * Remote data options.
	 */
	remote?: DDiagramDataRemoteOptions;
}

/**
 * A data helper class for diagrams.
 */
export interface DDiagramData {
	readonly remote: DDiagramDataRemote;
	readonly private: DDiagramDataPrivate;
	readonly ids: string[];
	mapper: DDiagramDataMapper | null;
	each(callback: (id: string) => boolean | void): string | null;
	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean;
	clear(id: string): boolean;
	setAll(
		id: string,
		values: unknown[],
		times?: number[],
		from?: number | null,
		to?: number | null
	): boolean;
	setValue(id: string, value: unknown, time?: number): boolean;
	setValues(id: string, values: unknown[], times?: number[]): boolean;
	setTime(id: string, time: number): boolean;
	setTimes(id: string, times: number[]): boolean;
	setRange(id: string, from?: number | null, to?: number | null): boolean;
	update(): void;
}
