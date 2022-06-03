/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";
import { EShapeActionValueChangeColor } from "./e-shape-action-value-change-color";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";
import { EShapeActionValueChangeColorCode } from "./e-shape-action-value-change-color-code";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeCursor } from "./e-shape-action-value-change-cursor";
import { EShapeActionValueChangeText } from "./e-shape-action-value-change-text";
import { EShapeActionValueEmitEvent } from "./e-shape-action-value-emit-event";
import { EShapeActionValueGesture } from "./e-shape-action-value-gesture";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";
import { EShapeActionValueShowHide } from "./e-shape-action-value-show-hide";
import { EShapeActionValueShowHideLayer } from "./e-shape-action-value-show-hide-layer";
import { EShapeActionValueShowHideShape } from "./e-shape-action-value-show-hide-shape";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";
import { EShapeActionValueTransformRotate } from "./e-shape-action-value-transform-rotate";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export const deserializeActionValue = (
	serialized: number[],
	manager: EShapeResourceManagerDeserialization
): EShapeActionValue | null => {
	switch (serialized[0]) {
		case EShapeActionValueType.SHOW_HIDE:
			switch (serialized[2]) {
				case EShapeActionValueShowHideType.SHAPE_SHOW:
				case EShapeActionValueShowHideType.SHAPE_HIDE:
					return EShapeActionValueShowHide.deserialize(serialized as any, manager);
				case EShapeActionValueShowHideType.SHAPE:
					return EShapeActionValueShowHideShape.deserialize(serialized as any, manager);
				case EShapeActionValueShowHideType.LAYER:
					return EShapeActionValueShowHideLayer.deserialize(serialized as any, manager);
			}
			break;
		case EShapeActionValueType.BLINK:
			return EShapeActionValueBlink.deserialize(serialized as any, manager);
		case EShapeActionValueType.CHANGE_COLOR:
		case EShapeActionValueType.CHANGE_COLOR_LEGACY:
			switch (serialized[3]) {
				case EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA:
				case EShapeActionValueChangeColorTarget.COLOR:
				case EShapeActionValueChangeColorTarget.ALPHA:
					return EShapeActionValueChangeColor.deserialize(serialized as any, manager);
				case EShapeActionValueChangeColorTarget.CODE:
					return EShapeActionValueChangeColorCode.deserialize(serialized as any, manager);
				case EShapeActionValueChangeColorTarget.BRIGHTNESS:
					return EShapeActionValueChangeColorBrightness.deserialize(
						serialized as any,
						manager
					);
			}
			break;
		case EShapeActionValueType.CHANGE_TEXT:
			return EShapeActionValueChangeText.deserialize(serialized as any, manager);
		case EShapeActionValueType.CHANGE_CURSOR:
			return EShapeActionValueChangeCursor.deserialize(serialized as any, manager);
		case EShapeActionValueType.EMIT_EVENT:
			return EShapeActionValueEmitEvent.deserialize(serialized as any, manager);
		case EShapeActionValueType.OPEN:
			return EShapeActionValueOpen.deserialize(serialized as any, manager);
		case EShapeActionValueType.TRANSFORM:
			switch (serialized[2]) {
				case EShapeActionValueTransformType.MOVE:
					return EShapeActionValueTransformMove.deserialize(serialized as any, manager);
				case EShapeActionValueTransformType.RESIZE:
					return EShapeActionValueTransformResize.deserialize(serialized as any, manager);
				case EShapeActionValueTransformType.ROTATE:
					return EShapeActionValueTransformRotate.deserialize(serialized as any, manager);
			}
			break;
		case EShapeActionValueType.GESTURE:
			return EShapeActionValueGesture.deserialize(serialized as any, manager);
		case EShapeActionValueType.MISC:
			switch (serialized[2]) {
				case EShapeActionValueMiscType.GESTURE:
					return EShapeActionValueGesture.deserialize(serialized as any, manager);
				case EShapeActionValueMiscType.SHOW_HIDE_LAYER:
					return EShapeActionValueShowHideLayer.deserialize(serialized as any, manager);
				case EShapeActionValueMiscType.GESTURE_LAYER:
					return EShapeActionValueGesture.deserialize(serialized as any, manager);
				default:
					return EShapeActionValueMisc.deserialize(serialized as any, manager);
			}
	}
	return null;
};
