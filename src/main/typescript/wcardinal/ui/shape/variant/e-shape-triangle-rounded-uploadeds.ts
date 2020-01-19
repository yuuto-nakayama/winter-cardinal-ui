/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { TRIANGLE_ROUNDED_INDEX_COUNT, TRIANGLE_ROUNDED_VERTEX_COUNT } from "./build-triangle-rounded";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";
import { EShapeTriangleRoundedUploaded } from "./e-shape-triangle-rounded-uploaded";

export class EShapeTriangleRoundedUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeTriangleRoundedUploaded | null {
		const tcount = EShapeTextUploadeds.getTextCount( shape, buffer.workCount );
		const tvcount = tcount.vertexCount;
		const ticount = tcount.indexCount;
		const vcount = TRIANGLE_ROUNDED_VERTEX_COUNT + tvcount;
		const icount = TRIANGLE_ROUNDED_INDEX_COUNT + ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			return new EShapeTriangleRoundedUploaded(
				buffer,
				voffset, ioffset,
				tvcount, ticount,
				vcount, icount,
				antialiasWeight
			).init( shape );
		}
		return null;
	}
}
