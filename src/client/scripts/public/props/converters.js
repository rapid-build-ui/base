/*******************************************
 * PROPERTY CONVERTERS
 * ----------------------------------------
 * HOW TO USE
 - import Converter from './converters.js';
 *******************************************/
const Converters = {
	valueless(val) { // :boolean
		if (typeof val !== 'string') return val;
		val = val.trim();
		if (!val) return true; // valueless attr is empty string
		return /^true$/i.test(val);
	}
};

/* Export it!
 *************/
export default Converters;