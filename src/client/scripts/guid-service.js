/****************************************
 * GUID SERVICE
 ****************************************
 * HOW TO USE
 - import guid from './guid-service.js';
 * API
 - guid.create(maxLength = 12); :string
 ****************************************/
const GuidService = {
	create(maxLength = 12) { // :string (sometimes returns maxLength - 1 chars)
		return Math.round((Math.random() * 36 ** maxLength)).toString(36);
	}
};

/* Export it!
 *************/
export default GuidService;