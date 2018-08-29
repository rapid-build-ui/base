/***********
 * RB-BASE
 ***********/
import { props, withComponent } from '../../../skatejs/dist/esnext/index.js';
import { html, withRenderer } from './renderer.js';
import template from '../views/rb-base.html';

export class RbBase extends withComponent(withRenderer()) {
	/* Properties
	 *************/
	static get props() {
		return {
			kind: props.string
		};
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-base', RbBase);
