import { EShapeCapability } from "./e-shape-capability";
import { EShapeCapabilityContainer } from "./e-shape-capability-container";

export class EShapeCapabilityContainerImpl implements EShapeCapabilityContainer {
	added: EShapeCapability;
	removed: EShapeCapability;

	constructor() {
		this.added = EShapeCapability.NONE;
		this.removed = EShapeCapability.NONE;
	}

	add(target: EShapeCapability): this {
		this.removed &= ~target;
		this.added |= target;
		return this;
	}

	remove(target: EShapeCapability): this {
		this.added &= ~target;
		this.removed |= target;
		return this;
	}

	clear(): this {
		this.added = EShapeCapability.NONE;
		this.removed = EShapeCapability.NONE;
		return this;
	}

	set(added?: EShapeCapability, removed?: EShapeCapability): this {
		if (added != null) {
			this.added = added;
		}
		if (removed != null) {
			this.removed = removed;
		}
		return this;
	}

	copy(target: EShapeCapabilityContainer): this {
		this.added = target.added;
		this.removed = target.removed;
		return this;
	}
}
