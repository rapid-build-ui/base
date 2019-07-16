/*********************************************
 * VIEW DIRECTIVES (from lit-html >= v0.14.0)
 *********************************************/
import { directive, nothing } from '../../generated/lit-html/lit-html.js';
import { asyncAppend }  from '../../generated/lit-html/directives/async-append.js';
import { asyncReplace } from '../../generated/lit-html/directives/async-replace.js';
import { cache }        from '../../generated/lit-html/directives/cache.js';
import { classMap }     from '../../generated/lit-html/directives/class-map.js';
import { guard }        from '../../generated/lit-html/directives/guard.js';
import { ifDefined }    from '../../generated/lit-html/directives/if-defined.js';
import { repeat }       from '../../generated/lit-html/directives/repeat.js';
import { styleMap }     from '../../generated/lit-html/directives/style-map.js';
import { unsafeHTML }   from '../../generated/lit-html/directives/unsafe-html.js';
import { until }        from '../../generated/lit-html/directives/until.js';

/* Export it!
 *************/
export default {
	asyncAppend,
	asyncReplace,
	cache,
	classMap,
	directive,
	guard,
	ifDefined,
	nothing,
	repeat,
	styleMap,
	unsafeHTML,
	until
};