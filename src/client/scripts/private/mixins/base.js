/*************************************
 * BASE MIXIN (for all rb-components)
 *************************************/
import { props, withComponent } from '../../../../../skatejs/dist/esnext/index.js';
import { html, render }         from '../../../../../lit-html/lit-html.js';
import EventService             from '../../private/services/event.js';
import ViewService              from '../../private/services/view.js';
import Styles                   from '../../private/services/styles.js';
Styles.addUtils(); // only runs once

const Base = (BaseElm = HTMLElement) => class extends withComponent(BaseElm) {
	/* Lifecycle
	 ************/
	constructor() { // :void
		super();
		this.rb = {
			elms:   {},
			events: EventService.call(this),
			view:   ViewService.call(this)
		}
	}
	disconnectedCallback() { // :void
		super.disconnectedCallback && super.disconnectedCallback();
		this.rb.events.removeAll({ force: true });
		this.rb.events.host.removeAll();
		this.rb.elms = {};
		// console.log(`${this.localName} disconnected:`, this.rb.events.events);
		// console.log(`${this.localName} disconnected:`, this.rb.events.host.events);
	}

	/* @skatejs/renderer-lit-html
	 *****************************/
	async renderer(root, call) { // :void
		render(call(), root);
		if (this.rb.view.isReady) return;
		// console.log(`${this.localName} view ready:`, this.rb.view.isReady);
		await this.rb.view.readyCallback(); // called once when rb view is ready
	}
}

/* Export it!
 *************/
export { Base, html, props };