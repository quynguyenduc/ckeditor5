/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module adapter-ckfinder/baz
 */

import Bar from './bar';

/**
 * IDK...
 *
 * @extends module:adapter-ckfinder/bar~Bar
 */
export default class Baz extends Bar {
	/**
	 * HA. HA. HA.
	 */
	Baz() {}

	/**
	 * This is "Baz#example".
	 *
	 * @param {Object} options
	 * @return {String}
	 */
	example( options ) {
		return '123';
	}
}
