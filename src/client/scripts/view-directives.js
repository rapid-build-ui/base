/*********************************************
 * VIEW DIRECTIVES (from lit-html >= v0.14.0)
 *********************************************/
import { directive }    from '../../../lit-html/lit-html.js';
import { asyncAppend }  from '../../../lit-html/directives/async-append.js';
import { asyncReplace } from '../../../lit-html/directives/async-replace.js';
import { cache }        from '../../../lit-html/directives/cache.js';
import { classMap }     from '../../../lit-html/directives/class-map.js';
import { guard }        from '../../../lit-html/directives/guard.js';
import { ifDefined }    from '../../../lit-html/directives/if-defined.js';
import { repeat }       from '../../../lit-html/directives/repeat.js';
import { styleMap }     from '../../../lit-html/directives/style-map.js';
import { unsafeHTML }   from '../../../lit-html/directives/unsafe-html.js';
import { until }        from '../../../lit-html/directives/until.js';

/* View Directives
 ******************/
const ViewDirectives = {
	asyncAppend,
	asyncReplace,
	cache,
	classMap,
	directive,
	guard,
	ifDefined,
	repeat,
	styleMap,
	unsafeHTML,
	until
}

/* Export it!
 *************/
export default ViewDirectives;

