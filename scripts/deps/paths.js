/*************
 * DEPS PATHS
 *************/
const cwd     = process.cwd(); // project root
const dir     = __dirname;
const dist    = `${dir}/dist`;
const client  = `${cwd}/src/client`;
const modules = `${dir}/node_modules`;

const Paths = {
	project: {
		path: cwd
	},
	dist: {
		path: dist
	},
	client: {
		generated: `${client}/scripts/generated`,
	},
	deps: [ // parents: true (preserves path structure)
		{
			name: 'bowser',
			path: `${modules}/bowser`,
			parents: false,
			files: [
				'LICENSE',
				'package.json',
				'src/**/*.js'
			]
		},
		{
			name: 'lit-html',
			path: `${modules}/lit-html`,
			parents: true,
			files: [
				'LICENSE',
				'package.json',
				'lit-html.js',
				'{directives,lib}/**/*.js'
			]
		},
		{
			name: 'skatejs',
			path: `${modules}/skatejs`,
			parents: false,
			files: [
				'LICENSE',
				'package.json',
				'dist/esnext/**/*.js'
			]
		}
	]
};

/* Export it!
 *************/
module.exports = Paths;