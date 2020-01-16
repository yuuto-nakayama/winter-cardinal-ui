/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeLineOfRectanglesUploadeds } from "../shape/variant/e-shape-line-of-rectangles-uploadeds";
import { EShapeLinesOfRectangles } from "../shape/variant/e-shape-lines-of-rectangles";

export const loadShapeLineOfRectangles = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_RECTANGLES ] = EShapeLineOfRectanglesUploadeds.create;
	EShapeDeserializers[ EShapeType.LINE_OF_RECTANGLES ] = EShapeLinesOfRectangles.deserialize;
};