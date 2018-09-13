# Rapid Build UI · Web Components · Base Class
Base Class for all &lt;rb-components&gt;.  


## Installation
```bash
$ npm install @rapid-build-ui/rb-base
```


## What's Included
* Web component library [SkateJS](http://skatejs.netlify.com/).
* The view rendering engine [lit-html](https://polymer.github.io/lit-html/).
* Imports:
	* guid-service.js
	* type-service.js
	* view-directives.js
* Callbacks:
	* viewReady()
* Creates this.rb object that contains a set of common helper objects:
	* this.rb.events
	* this.rb.view


## How To Use
```js
/* Example
 **********/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import view from '../../rb-base/scripts/view-directives.js';
import template from '../views/rb-popover.html';

export class RbPopover extends RbBase() {
	// Lifecycle
	viewReady() { // :void
		super.viewReady && super.viewReady(); // line required
		const trigger = this.shadowRoot.querySelector('.trigger');
		this.rb.events.add(trigger, 'click touchstart', this.toggle);
	}
	// Event Handler
	toggle(e) { // :void
		this.showPopover = !this.showPopover;
	}
	// Template
	render({ props }) { // :string
		return html template;
	}
}
```


## Callbacks (optional)

### viewReady()
*See "How To Use"*  
Executed once when view is ready and all its rb sub components views are ready.  
Use when you need to make sure elements are accessible in the shadow dom.



## Imports (optional)

### guid-service.js
* Methods
	* create(maxLength = 12) :string (sometimes returns maxLength - 1 chars)

```js
// Example
import Guid from '../../rb-base/scripts/guid-service.js';
const guid = Guid.create();
```


### type-service.js
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
import Type from '../../rb-base/scripts/type-service.js';
const isString = Type.is.string('rapid');
```


### view-directives.js
Returns object of
[lit-html](https://polymer.github.io/lit-html/guide/writing-templates.html#directives)
[directives](https://github.com/rapid-build-ui/rb-base/blob/master/src/client/scripts/view-directives.js)
to be used in view.

```html
<!-- Example (import view object in js, see "How To Use"): -->
<ul>
	${view.repeat(
		['hulk','thor'],
		(hero, i) => html`<li>${i} ${hero}</li>`
	)}
</ul>
```


## API

### this.rb.events
* Properties
	* events :object (readonly, hashmap of active events)
* Methods
	* add(elm, 'space separated events', callback[, opts]) :void
	* remove(elm, 'space separated events', callback) :void
	* removeAll([opts]) :void
	* emit(elm, 'event' [, { detail: any } ]) :boolean


### this.rb.view
* Properties
	* isReady :boolean (readonly, will be true when view is ready)