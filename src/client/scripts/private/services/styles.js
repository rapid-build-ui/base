/************************************
 * STYLES SERVICE
 * ---------------------------------
 * HOW TO USE
 - import Styles from './styles.js';
 * API
 - Styles.addUtils(); :void
 ************************************/
const ID = 'rb-style-helpers';
const STYLES = `
	[rb-hide] { display: none !important; }
`;

const StylesService = {
	addUtils() { // :void (ex: rb-toggle.js)
		if (document.getElementById(ID)) return;
		const styleElm = document.createElement('style');
		styleElm.id = ID;
		document.head.appendChild(styleElm);
		styleElm.appendChild(document.createTextNode(STYLES));
	}
};

/* Export it!
 *************/
export default StylesService;