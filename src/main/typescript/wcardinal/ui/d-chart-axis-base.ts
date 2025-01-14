/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DChartAxis } from "./d-chart-axis";
import { DChartAxisBar } from "./d-chart-axis-bar";
import { DChartAxisBaseBar } from "./d-chart-axis-base-bar";
import { DChartAxisBaseGuideContainer } from "./d-chart-axis-base-guide-container";
import { DChartAxisBaseOptions, DThemeChartAxisBase } from "./d-chart-axis-base-options";
import { DChartAxisBaseOptionParser } from "./d-chart-axis-base-options-parser";
import { DChartAxisBaseTickContainer } from "./d-chart-axis-base-tick-container";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisGuideContainer } from "./d-chart-axis-guide-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickContainer } from "./d-chart-axis-tick-container";
import { DThemes } from "./theme/d-themes";

export class DChartAxisBase<
	CHART extends DBase = DBase,
	THEME extends DThemeChartAxisBase = DThemeChartAxisBase,
	OPTIONS extends DChartAxisBaseOptions<THEME> = DChartAxisBaseOptions<THEME>
> implements DChartAxis<CHART>
{
	protected _theme: DThemeChartAxisBase;
	protected _parser: DChartAxisBaseOptionParser<THEME>;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _bar: DChartAxisBar<CHART>;
	protected _tick: DChartAxisTickContainer<CHART>;
	protected _guide: DChartAxisGuideContainer<CHART>;

	constructor(options?: OPTIONS) {
		const theme = this.toTheme(options);
		this._theme = theme;
		const parser = this.newParser(theme, options);
		this._parser = parser;
		this._index = 0;
		this._bar = this.newBar(parser, theme, options);
		this._tick = this.newTick(parser, theme, options);
		this._guide = this.newGuide(parser, theme, options);
	}

	protected newParser(theme: THEME, options?: OPTIONS): DChartAxisBaseOptionParser<THEME> {
		return new DChartAxisBaseOptionParser(theme, options);
	}

	get position(): DChartAxisPosition {
		return this._parser.position;
	}

	set position(position: DChartAxisPosition) {
		this._parser.position = position;
	}

	get coordinate(): number {
		return this._parser.coordinate;
	}

	set coordinate(coordinate: number) {
		this._parser.coordinate = coordinate;
	}

	get padding(): number {
		return this._parser.padding;
	}

	set padding(padding: number) {
		this._parser.padding = padding;
	}

	get bar(): DChartAxisBar<CHART> {
		return this._bar;
	}

	protected newBar(
		parser: DChartAxisBaseOptionParser<THEME>,
		theme: THEME,
		options?: OPTIONS
	): DChartAxisBar<CHART> {
		return new DChartAxisBaseBar(parser);
	}

	get tick(): DChartAxisTickContainer<CHART> {
		return this._tick;
	}

	protected newTick(
		parser: DChartAxisBaseOptionParser<THEME>,
		theme: THEME,
		options?: OPTIONS
	): DChartAxisTickContainer<CHART> {
		return new DChartAxisBaseTickContainer(parser);
	}

	get guide(): DChartAxisGuideContainer<CHART> {
		return this._guide;
	}

	protected newGuide(
		parser: DChartAxisBaseOptionParser<THEME>,
		theme: THEME,
		options?: OPTIONS
	): DChartAxisGuideContainer<CHART> {
		const result = new DChartAxisBaseGuideContainer(this);
		const list = parser.guide.list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			result.add(list[i]);
		}
		return result;
	}

	bind(container: DChartAxisContainer<CHART>, index: number): void {
		this._container = container;
		this._index = index;
		this._bar.bind(container, index);
		this._tick.bind(container, index);
		this._guide.bind(container, index);
	}

	unbind(): void {
		this._guide.unbind();
		this._tick.unbind();
		this._bar.unbind();
		this._index = 0;
		this._container = undefined;
	}

	update(): void {
		const isBarUpdated = this._bar.update();
		const isTicksUpdated = this._tick.update();
		const isGuideUpdated = this._guide.update();
		if (isBarUpdated || isTicksUpdated || isGuideUpdated) {
			const container = this._container;
			if (container) {
				DApplications.update(container.plotArea);
			}
		}
	}

	onRender(): void {
		this._bar.update();
		this._tick.update();
		this._guide.update();
	}

	destroy(): void {
		this._bar.destroy();
		this._tick.destroy();
		this._guide.destroy();
		this._container = undefined;
	}

	protected toTheme(options?: DChartAxisBaseOptions<THEME>): THEME {
		return options?.theme ?? this.getThemeDefault();
	}

	protected getThemeDefault(): THEME {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DChartAxisBase";
	}
}
