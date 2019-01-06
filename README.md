# Rapid Build UI · Web Components · Base Mixin

Base mixin for all &lt;rb-components&gt;.

**This is not a web component.**  
It is an internal module for all our web components.  
Our consumable web components are prefixed with "**rb-**"
example [rb-button](https://rapid-build-ui.io/components/rb-button).



## Installation
```bash
$ yarn add @rapid-build-ui/rb-base
```



## What's Included
* Web component library [SkateJS](http://skatejs.netlify.com/).

* The view rendering engine [lit-html](https://lit-html.polymer-project.org/).

* [API](#api) (creates this.rb object that contains a set of common helper objects):
	* [this.rb.elms](#thisrbelms)
	* [this.rb.events](#thisrbevents)
	* [this.rb.view](#thisrbview)

* [Callbacks](#callbacks-optional):
	* [viewReady()](#viewready)

* [Imports](#imports-optional):
	* [guid service](#guid-service)
	* [type service](#type-service)
	* [view directives](#view-directives)

* [Slot Mixin](#slot-mixin) (adds helpers onto this for working with slots)



## How To Use
```js
/* Example
 **********/
import { RbBase, props, html } from '../../rb-base/scripts/rb-base.js';
import view                    from '../../rb-base/scripts/public/view/directives.js';
import template                from '../views/rb-popover.html';

export class RbPopover extends RbBase() {
	// Lifecycle
	viewReady() { // :void
		super.viewReady && super.viewReady(); // line required
		this.rb.elms.trigger = this.shadowRoot.querySelector('.trigger');
		this.rb.events.add(this.rb.elms.trigger, 'click touchstart', this.toggle);
	}
	// Event Handler
	toggle(e) { // :void
		this.showPopover = !this.showPopover;
	}
	// Template
	render({ props, state }) { // :string
		return html template;
	}
}
```



## API

### this.rb.elms
* An object/hashmap to store component elements.
* *See [how to use...](#how-to-use)*


### this.rb.events
* Properties
	* events :object (readonly, hashmap of active events)
* Methods
	* add(elm(s), 'space separated events', callback[, opts]) :void
		* events are automatically removed in disconnectedCallback()
			* meaning, you don't have to call remove() or removeAll()
		* opts :{}
			* [default options](https://goo.gl/f3kP5A)
			* opts.bind (custom):
				* undefined (binds to component, default)
				* false | null (binds to target elm)
				* elm (binds to supplied elm)
	* emit(elm, 'event' [, { detail: any } ]) :boolean
	* remove(elm(s), 'space separated events', callback) :void
	* removeAll([opts]) :void
		* opts :{}
			* opts.force (internal option) :boolean
				* forces events to be set to empty {}


### this.rb.view
* Properties
	* isReady :boolean (readonly, will be true when view is ready)



## Callbacks (optional)

### viewReady()
*See [how to use...](#how-to-use)*  
Executed once when view is ready and all its rb sub components views are ready.  
Use when you need to make sure elements are accessible in the shadow dom.



## Imports (optional)

### guid service
* Methods
	* create(maxLength = 12) :string (sometimes returns maxLength - 1 chars)

```js
// Example
import Guid from '../../rb-base/scripts/public/services/guid.js';
const guid = Guid.create();
```


### type service
* Methods (**is.methods() :boolean**)
	* get(val) :string (returns val type)
	* is.array(val)
	* is.boolean(val)
	* is.function(val)
	* is.int(val)
	* is.null(val)
	* is.number(val)
	* is.object(val)
	* is.promise(val)
	* is.string(val)
	* is.stringArray(val)
	* is.undefined(val)

```js
// Example
import Type from '../../rb-base/scripts/public/services/type.js';
const isString = Type.is.string('rapid');
```


### view directives
Returns an object of
[lit-html](https://lit-html.polymer-project.org/guide/template-reference#built-in-directives)
[directives](https://github.com/rapid-build-ui/rb-base/blob/master/src/client/scripts/public/view/directives.js)
to be used in view.

```js
// Example
import view from '../../rb-base/scripts/public/view/directives.js';
```

```html
<!-- Example (import view object in js, see "How To Use"): -->
<ul>
	${view.repeat(
		['hulk','thor'],
		(hero, i) => html`<li>${i} ${hero}</li>`
	)}
</ul>
```



## Slot Mixin
Adds helpers onto this for working with slots.

* Constructor
	* sets this.state.slots = {}
		* Which can be used for conditionals in the view.

* Getters
	* this._hasLightDom :boolean (readonly)
		* Determines if component has [light dom](https://goo.gl/VzFxn4).

	* this._lightDomSlotNames :{ [slotName]: boolean } (readonly)
		* An object/hashmap with the names of all the light dom [slot names](https://goo.gl/mCrwgQ).

* Methods
	* this._initSlotStates() :void
		* *Run in [viewReady()](#viewready)*.
		* Runs this.\_setSlotStates(this._lightDomSlotNames).

	* this._cleanLightDomWhitespace() :void
		* Mutates this.childNodes.

	* this._setSlotStates(slotNames={}) :void
		* Mutates this.state.slots.