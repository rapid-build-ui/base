/**************
 * CREATE DEPS
 **************/
const cpy      = require('cpy');
const globby   = require('globby');
const UglifyJS = require('uglify-es');
const Help     = require('./helpers');
const Paths    = require('./paths');

/* Helpers
 **********/
const Helper = {
	async _minify(_path) { // // :Promise<void>
		const js     = await Help.getFileContents(_path);
		const result = UglifyJS.minify(js, {}); // runs synchronously
		if (result.error) {
			const ePath = _path.replace(Paths.project.path,'');
			const eMsg  = `JS MINIFY ERROR:\n${ePath}\n${result.error}`
			console.error(eMsg.error);
			process.exit();
		}
		return Help.writeFile(_path, result.code);
	},
	async cleanDist() { // :Promise<void>
		const dist = Paths.dist.path;
		await Help.remove(dist);
		await Help.mkdir(dist);
		const relPath = dist.replace(Paths.project.path,'');
		console.log(`• cleaned dist: ${relPath}`.minor);
	},
	async copyToDest() { // :Promise<void>
		const generated = Paths.client.generated;
		await Help.remove(generated);
		await Help.copy(Paths.dist.path, generated);
		const relPath = generated.replace(Paths.project.path,'');
		console.log(`• copied deps to generated: ${relPath}`.minor);
	},
	async copyToDist() { // :Promise<void>
		for (const dep of Paths.deps) {
			const dest = `${Paths.dist.path}/${dep.name}`;
			await cpy(dep.files, dest, {
				cwd: dep.path,
				parents: dep.parents
			});
		}
		console.log(`• copied deps to dist`.minor);
	},
	async minifyFiles() { // :Promise<void>
		const globs = []
		for (const dep of Paths.deps) {
			const dist = `${Paths.dist.path}/${dep.name}`;
			for (let glob of dep.files) {
				if (!Help.isFileType(glob, 'js')) continue;
				if (!dep.parents) glob = `**/*.js`;
				glob = `${dist}/${glob}`;
				globs.push(glob);
			}
		}
		const paths = await globby(globs);
		const promises = [];
		for (const _path of paths)
			promises.push(Helper._minify(_path));
		await Promise.all(promises);
		console.log(`• minified deps in dist`.minor);
	}
}

/* Create Deps
 **************/
const init = async () => { // :void
	await Helper.cleanDist();
	await Helper.copyToDist();
	await Helper.minifyFiles();
	await Helper.copyToDest();
}

/* Export it!
 *************/
module.exports = init;