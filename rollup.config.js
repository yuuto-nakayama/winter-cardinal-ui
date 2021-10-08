import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { version } from './package.json';
import { terser } from "rollup-plugin-terser";
import path from 'path';
import copy from 'rollup-plugin-copy';
import sourcemaps from 'rollup-plugin-sourcemaps';
import fs from 'fs';

// In/out directories
const name = 'wcardinal-ui';
const SOURCE_DIR = 'dist';
const OUTPUT_FILE = `${SOURCE_DIR}/${name}`;
const SAMPLE_DIR = `src/main/sample`;
const SAMPLE_JS_PIXI_DIR = `${SAMPLE_DIR}/js/pixi/latest`;
const SAMPLE_JS_CSS_LINE_BREAK_DIR = `${SAMPLE_DIR}/js/css-line-break/latest`;
const SAMPLE_JS_WCUI_DIR = `${SAMPLE_DIR}/js/wcardinal-ui/latest`;

// License header
const LICENSE_HEADER_LINES = fs.readFileSync( './LICENSE_HEADER', 'UTF-8' ).split( '\n' );
const LICENSE_HEADER_LINES_LENGTH = LICENSE_HEADER_LINES.length;
if( 0 < LICENSE_HEADER_LINES_LENGTH && LICENSE_HEADER_LINES[ LICENSE_HEADER_LINES_LENGTH - 1 ].trim().length <= 0 ) {
        LICENSE_HEADER_LINES.splice( LICENSE_HEADER_LINES_LENGTH - 1, 1 );
}
const LICENSE_HEADER = LICENSE_HEADER_LINES.join( '\n ' );

// Banner
const BANNER =
`/*
 Winter Cardinal UI v${version}
 ${LICENSE_HEADER}

 Material Design icons by Google
 Apache license version 2.0.
*/`

// Terser options
const TERSER_OPTIONS = {
	compress: {
		passes: 3
	},
	output: {
		preamble: BANNER
	},
	mangle: {
		properties: {
			regex: /(^_[\$\w]+[A-Za-z]$|^[A-Za-z]\w+_$)/,
			reserved: [
				'_immediateFn',
				'__plugins',
				'_updateUvs',
				'_bounds',
				'_recursivePostUpdateTransform',
				'_refresh',
				'_render',
				'_calculateBounds',
				'_uvs',
				'_currentLocalID',
				'_worldID',
				'_localID',
				'_parentID',
				'_destroyed',
				'_updateID',
				'_lastBoundsID'
			]
		}
	}
};

// Replace theme-related modules
const toOsPath = ( target ) => {
	return target.replace( /\//g, path.sep );
};
const remove = () => {
	const targets = [
		toOsPath( '/wcardinal/ui/theme/white/' ),
		toOsPath( '/wcardinal/ui/theme/dark/' ),
		toOsPath( '/wcardinal/ui/load/load-theme' )
	];
	return {
		load( id ) {
			for( let i = 0, imax = targets.length; i < imax; ++i ) {
				if( 0 <= id.indexOf( targets[ i ] ) ) {
					return '';
				}
			}
			return null;
		}
	};
};
const toBypassedName = ( name ) => {
	const index = name.lastIndexOf( path.sep );
	if( 0 <= index ) {
		return name.substring( index + 1, name.length - 3 )
		.split( '-' )
		.map( ( word, index ) => {
			if( index === 0 && (word === 'is' || word === 'to') ) {
				return word;
			} else {
				return word.substring( 0, 1 ).toUpperCase() + word.substring( 1 );
			}
		})
		.join( '' );
	}
	return null;
};
const bypass = ( target ) => {
	const basePath = toOsPath( '/wcardinal/ui/' );
	return {
		load( id ) {
			if( 0 <= id.indexOf( basePath ) ) {
				if( 0 <= id.indexOf( 'wcardinal-ui-theme-' ) || 0 <= id.indexOf( target ) ) {
					return null;
				} else {
					const bypassed = toBypassedName( id );
					if( bypassed != null ) {
						return `export const ${bypassed} = wcardinal.ui.${bypassed};`;
					}
					return '';
				}
			}
			return null;
		}
	};
};
const BYPASS_TARGET_WHITE = toOsPath( '/wcardinal/ui/theme/white/' );
const BYPASS_TARGET_DARK = toOsPath( '/wcardinal/ui/theme/dark/' );

// Rollup settings
export default ( !process.env.ROLLUP_WATCH ?
	[{
		input: `${SOURCE_DIR}/${name}.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}.js`,
			format: 'iife',
			banner: BANNER,
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			remove(),
			resolve(),
			commonjs()
		],
		external: [
			"css-line-break",
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}/${name}-theme-white.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}-theme-white.js`,
			format: 'iife',
			banner: BANNER,
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			bypass( BYPASS_TARGET_WHITE ),
			resolve(),
			commonjs()
		],
		external: [
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}/${name}-theme-dark.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}-theme-dark.js`,
			format: 'iife',
			banner: BANNER,
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			bypass( BYPASS_TARGET_DARK ),
			resolve(),
			commonjs()
		],
		external: [
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}/${name}.esm.js`,
		output: [{
			file: `${OUTPUT_FILE}.cjs.js`,
			format: 'cjs',
			banner: BANNER
		}],
		plugins: [
			resolve(),
			commonjs()
		],
		external: [
			"css-line-break",
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}/${name}.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}.min.js`,
			format: 'iife',
			sourcemap: true,
			sourcemapPathTransform: ( relativePath ) => {
				return path.relative( "../src/main/typescript/", relativePath )
			},
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			remove(),
			sourcemaps(),
			resolve(),
			commonjs(),
			terser( TERSER_OPTIONS )
		],
		external: [
			"css-line-break",
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}/${name}-theme-white.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}-theme-white.min.js`,
			format: 'iife',
			sourcemap: true,
			sourcemapPathTransform: ( relativePath ) => {
				return path.relative( "../src/main/typescript/", relativePath )
			},
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			bypass( BYPASS_TARGET_WHITE ),
			sourcemaps(),
			resolve(),
			commonjs(),
			terser( TERSER_OPTIONS )
		],
		external: [
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}/${name}-theme-dark.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}-theme-dark.min.js`,
			format: 'iife',
			sourcemap: true,
			sourcemapPathTransform: ( relativePath ) => {
				return path.relative( "../src/main/typescript/", relativePath )
			},
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			bypass( BYPASS_TARGET_DARK ),
			sourcemaps(),
			resolve(),
			commonjs(),
			terser( TERSER_OPTIONS ),
			copy({
				targets: [
					{ src: `dist/${name}*.js`, dest: `${SAMPLE_JS_WCUI_DIR}/` },
					{ src: `dist/${name}*.map`, dest: `${SAMPLE_JS_WCUI_DIR}/` },
					{ src: 'node_modules/pixi.js/dist/*', dest: `${SAMPLE_JS_PIXI_DIR}/` },
					{ src: 'node_modules/css-line-break/dist/*.js', dest: `${SAMPLE_JS_CSS_LINE_BREAK_DIR}/` },
					{ src: 'node_modules/css-line-break/dist/*.js.map', dest: `${SAMPLE_JS_CSS_LINE_BREAK_DIR}/` }
				],
				hook: 'writeBundle'
			})
		],
		external: [
			"pixi.js"
		]
	}] :
	[{
		input: `${SOURCE_DIR}/${name}.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}.js`,
			format: 'iife',
			banner: BANNER,
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			remove(),
			resolve(),
			commonjs(),
			copy({
				targets: [
					{ src: `dist/${name}.js`, dest: `${SAMPLE_JS_WCUI_DIR}/` },
					{ src: `dist/${name}.js`, dest: `${SAMPLE_JS_WCUI_DIR}/`, rename: `${name}.min.js` },
					{ src: 'node_modules/pixi.js/dist/*', dest: `${SAMPLE_JS_PIXI_DIR}/` },
					{ src: 'node_modules/css-line-break/dist/*.js', dest: `${SAMPLE_JS_CSS_LINE_BREAK_DIR}/` },
					{ src: 'node_modules/css-line-break/dist/*.js.map', dest: `${SAMPLE_JS_CSS_LINE_BREAK_DIR}/` }
				],
				hook: 'writeBundle'
			})
		],
		external: [
			"css-line-break",
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}/${name}-theme-white.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}-theme-white.js`,
			format: 'iife',
			banner: BANNER,
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			bypass( BYPASS_TARGET_WHITE ),
			resolve(),
			commonjs(),
			copy({
				targets: [
					{ src: `dist/${name}-theme-white.js`, dest: `${SAMPLE_JS_WCUI_DIR}/` },
					{ src: `dist/${name}-theme-white.js`, dest: `${SAMPLE_JS_WCUI_DIR}/`, rename: `${name}-theme-white.min.js` }
				],
				hook: 'writeBundle'
			})
		],
		external: [
			"pixi.js"
		]
	},{
		input: `${SOURCE_DIR}/${name}-theme-dark.browser.js`,
		output: [{
			name: 'none',
			file: `${OUTPUT_FILE}-theme-dark.js`,
			format: 'iife',
			banner: BANNER,
			freeze: false,
			globals: {
				"pixi.js": "PIXI"
			}
		}],
		plugins: [
			bypass( BYPASS_TARGET_DARK ),
			resolve(),
			commonjs(),
			copy({
				targets: [
					{ src: `dist/${name}-theme-dark.js`, dest: `${SAMPLE_JS_WCUI_DIR}/` },
					{ src: `dist/${name}-theme-dark.js`, dest: `${SAMPLE_JS_WCUI_DIR}/`, rename: `${name}-theme-dark.min.js` }
				],
				hook: 'writeBundle'
			})
		],
		external: [
			"pixi.js"
		]
	}]
);
