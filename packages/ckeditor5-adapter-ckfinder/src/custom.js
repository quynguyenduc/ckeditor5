/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module adapter-ckfinder/custom
 */

/**
 * Custom class for testing mixes and observables.
 *
 * @mixes module:utils/observablemixin~ObservableMixin
 */
export default class Custom {
	/**
	 * Custom#myMethod.
	 *
	 * @param {Object} params
	 */
	myMethod( params ) {
		console.log( params );
	}
}
