/*********************************************
 * VIEW DIRECTIVES (from lit-html >= v0.11.1)
 *********************************************/
import { directive }    from '../../../lit-html/lit-html.js';
import { asyncAppend }  from '../../../lit-html/directives/async-append.js';
import { asyncReplace } from '../../../lit-html/directives/async-replace.js';
import { guard }        from '../../../lit-html/directives/guard.js';
import { ifDefined }    from '../../../lit-html/directives/if-defined.js';
import { repeat }       from '../../../lit-html/directives/repeat.js';
import { unsafeHTML }   from '../../../lit-html/directives/unsafe-html.js';
import { until }        from '../../../lit-html/directives/until.js';
import { when }         from '../../../lit-html/directives/when.js';

/* View Directives
 ******************/
const ViewDirectives = {
	asyncAppend,
	asyncReplace,
	directive,
	guard,
	ifDefined,
	repeat,
	unsafeHTML,
	until,
	when
}

/* Export it!
 *************/
export default ViewDirectives;

