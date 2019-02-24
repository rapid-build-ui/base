/***************************************
 * SLOT MIXIN
 * ------------------------------------
 * Adds helpers for working with slots.
 ***************************************/
const Slot = BaseElm => class extends BaseElm {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.state = {
			...super.state,
			slots: {} // :{ [slotName]: boolean }
		};
	}

	/* Getters
	 **********/
	get _hasLightDom() { // :boolean
		this._cleanLightDomWhitespace();
		return !!this.childNodes.length;
	}

	get _lightDomSlotNames() { // :{ [slotName]: boolean }
		const names = {};
		for (const child of this.childNodes) {
			if (![1,3].includes(child.nodeType)) continue; // only text or elm
			// text
			if (child.nodeType === 3) { names['default'] = true; continue; }
			// elms (child.slot :string)
			const name = child.slot.trim().toLowerCase() || 'default';
			names[name] = true;
		}
		return names;
	}

	/* Methods
	 **********/
	_cleanLightDomWhitespace() { // :void (mutator: this.childNodes)
		for (const child of this.childNodes) {
			if (child.nodeType !== 3) continue;
			if (child.textContent.trim().length) continue;
			child.remove(); // remove empty text nodes
		}
	}

	_setSlotStates(slotNames={}) { // :void (mutator: this.state.slots)
		if (!Object.keys(slotNames).length) return;
		Object.assign(this.state.slots, slotNames);
		this.triggerUpdate();
	}

	_initSlotStates() { // :void (run in viewReady())
		if (!this._hasLightDom) return;
		this._setSlotStates(this._lightDomSlotNames);
	}
}

/* Export it!
 *************/
export default Slot;