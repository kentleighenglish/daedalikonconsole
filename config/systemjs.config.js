/**
* System configuration for Angular 2 samples
* Adjust as necessary for your application needs.
*/
(function (global) {
	System.config({
		paths: {
			// paths serve as alias
			'node:': 'node_modules/',
		},
		// map tells the System loader where to look for things
		map: {
			// our app is within the app folder
			app: 'src',

			// angular bundles
			'@angular/core': 'node:@angular/core/bundles/core.umd.js',
			'@angular/common': 'node:@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.js',
			'@angular/http': 'node:@angular/http/bundles/http.umd.js',
			'@angular/router': 'node:@angular/router/bundles/router.umd.js',
			'@angular/forms': 'node:@angular/forms/bundles/forms.umd.js',
			'@angular/material': 'node:@angular/material/bundles/material.umd.js',
			'@angular/animations': 'node:@angular/animations/bundles/animations.umd.js',
			'@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.js',
			'@angular/platform-browser': 'node:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser/animations': 'node:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
			'@angular/platform-browser-dynamic': 'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

			'@angular/cdk/platform': 'node:@angular/cdk/bundles/cdk-platform.umd.js',
			'@angular/cdk/a11y': 'node:@angular/cdk/bundles/cdk-a11y.umd.js',
			'@angular/cdk/coercion': 'node:@angular/cdk/bundles/cdk-coercion.umd.js',
			'@angular/cdk/rxjs': 'node:@angular/cdk/bundles/cdk-rxjs.umd.js',
			'@angular/cdk/keycodes': 'node:@angular/cdk/bundles/cdk-keycodes.umd.js',
			'@angular/cdk/bidi': 'node:@angular/cdk/bundles/cdk-bidi.umd.js',
			'@angular/cdk/scrolling': 'node:@angular/cdk/bundles/cdk-scrolling.umd.js',
			'@angular/cdk/overlay': 'node:@angular/cdk/bundles/cdk-overlay.umd.js',
			'@angular/cdk/portal': 'node:@angular/cdk/bundles/cdk-portal.umd.js',
			'@angular/cdk/observers': 'node:@angular/cdk/bundles/cdk-observers.umd.js',
			'@angular/cdk/collections': 'node:@angular/cdk/bundles/cdk-collections.umd.js',
			'@angular/cdk/table': 'node:@angular/cdk/bundles/cdk-table.umd.js',
			'@angular/cdk/stepper': 'node:@angular/cdk/bundles/cdk-stepper.umd.js',

			'hammerjs': 'node:hammerjs',

			// other libraries
			'rxjs': 'node:rxjs',

			'three' : 'node:/three/build/three.min.js',
			'three-orbit-controls' : 'node:/three-orbit-controls/index.js'
		},
		// packages tells the System loader how to load when no filename and/or no extension
		packages: {
			app: {
				main: './main-jit.js',
				defaultExtension: 'js'
			},
			rxjs: {
				defaultExtension: 'js'
			}
		}
	});
})(this);
