/**********************************
 * RB-BASE (for all rb-components)
 **********************************/
import { props, withComponent } from '../../../skatejs/dist/esnext/index.js';
import { html, render } from '../../../lit-html/lit-html.js';
import EventService from './event-service.js';
import ViewService from './view-service.js';

/* RB Base Class
 ****************/
const RbBase = (Base = HTMLElement) => class extends withComponent(Base) {
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
		// console.log(`${this.localName} disconnected:`, this.rb.events.events);
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
export { html, props, RbBase };