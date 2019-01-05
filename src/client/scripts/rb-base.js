/***************************************************
 * RB-BASE MIXIN (base mixin for all rb-components)
 * ------------------------------------------------
 * Mixins execution order:
 * inside -> out (must call super)
 ***************************************************/
import { Base, html, props } from './private/mixins/base.js';
import Slot                  from './private/mixins/slot.js';

const RbBase = BaseElm => Slot(Base(BaseElm));

/* Export it!
 *************/
export { RbBase, html, props };