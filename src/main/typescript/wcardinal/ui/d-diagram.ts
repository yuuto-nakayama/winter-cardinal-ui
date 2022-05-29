/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Renderer } from "pixi.js";
import {
	DDiagramBase,
	DDiagramBaseController,
	DDiagramBaseOptions,
	DDiagramBasePieceController,
	DThemeDiagramBase
} from "./d-diagram-base";
import { DDiagramCanvas, DDiagramCanvasOptions } from "./d-diagram-canvas";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { DDiagramShape } from "./d-diagram-shape";
import { DDiagramData, DDiagramDataOptions } from "./d-diagram-data";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { EShape } from "./shape/e-shape";
import { DDiagramDataImpl } from "./d-diagram-data-impl";
import { DDiagramDataMapper } from "./d-diagram-data-mapper";

/**
 * {@link DDiagram} piece controller.
 */
export interface DDiagramPieceController extends DDiagramBasePieceController {}

/**
 * {@link DDiagram} controller.
 */
export interface DDiagramController extends DDiagramBaseController {}

/**
 * {@link DDiagram} options.
 */
export interface DDiagramOptions<THEME extends DThemeDiagram = DThemeDiagram, EMITTER = any>
	extends DDiagramBaseOptions<
		DDiagramCanvas,
		DDiagramCanvasOptions,
		DDiagramController,
		THEME,
		EMITTER
	> {
	/** @deprecated in favor of {@link data} */
	tag?: DDiagramDataOptions;
	data?: DDiagramDataOptions;
}

/**
 * {@link DDiagram} theme.
 */
export interface DThemeDiagram extends DThemeDiagramBase {}

export class DDiagram<
	THEME extends DThemeDiagram = DThemeDiagram,
	OPTIONS extends DDiagramOptions<THEME> = DDiagramOptions<THEME>
> extends DDiagramBase<DDiagramCanvas, DDiagramCanvasOptions, DDiagramController, THEME, OPTIONS> {
	/** @deprecated in favor of {@link data} */
	tag: DDiagramData;
	data: DDiagramData;
	shape: DDiagramShape;

	constructor(options?: OPTIONS) {
		super(options);

		this.on(UtilPointerEvent.move, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeMove(e);
			}
		});

		this.on(UtilPointerEvent.up, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeUp(e);
			}
		});

		this.on(UtilPointerEvent.upoutside, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeCancel(e);
			}
		});

		this.on(UtilPointerEvent.cancel, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeCancel(e);
			}
		});

		UtilPointerEvent.onClick(this, (e: interaction.InteractionEvent): void => {
			const canvas = this.canvas;
			if (canvas) {
				canvas.onShapeClick(e);
			}
		});

		//
		const data = new DDiagramDataImpl(this, options && (options.data || options.tag));
		this.data = data;
		this.tag = data;
		this.shape = new DDiagramShape(this);
	}

	protected initLayer(
		canvas: DDiagramCanvas,
		shapes: EShape[],
		mapper?: DDiagramDataMapper | null
	): void {
		super.initLayer(canvas, shapes, mapper || this.data.mapper);
	}

	protected isEditMode(): boolean {
		return false;
	}

	protected newCanvas(serialized: DDiagramSerialized): DDiagramCanvas {
		return new DDiagramCanvas(this.toCanvasOptions(serialized));
	}

	protected toCanvasOptions(serialized: DDiagramSerialized): DDiagramCanvasOptions {
		return this.toCanvasBaseOptions(serialized);
	}

	protected onDown(e: interaction.InteractionEvent): void {
		super.onDown(e, this.canvas?.onShapeDown(e));
	}

	onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
		return super.onDblClick(
			e,
			interactionManager,
			this.canvas?.onShapeDblClick(e, interactionManager)
		);
	}

	render(renderer: Renderer): void {
		this.shape.onRender(renderer);
		super.render(renderer);
	}

	protected getType(): string {
		return "DDiagram";
	}
}
