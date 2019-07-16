/*************
 * BUILD DEPS
 *************/
require('./bootstrap');
const createDeps = require('./create-deps');

/* INIT
 *******/
const init = async () => { // :void
	console.log(`
		----------
		BUILD DEPS
		----------
	`.replace(/\t/g,'').trim().attn);

	await createDeps();

	console.log(`
		-----------
		BUILT DEPS!
	`.replace(/\t/g,'').trimStart().attn);
}

/* Work It!
 ***********/
init();