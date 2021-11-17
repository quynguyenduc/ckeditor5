/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module adapter-ckfinder/bar
 */

import Foo from './foo';

/**
 * A plugin that does nothing but is required.
 *
 * @extends module:adapter-ckfinder/foo~Foo
 */
export default class Bar extends Foo {
	/**
	 * HA. HA.
	 */
	Bar() {}

	/**
	 * This is "Bar#example".
	 *
	 * @param {Object} options
	 * @return {String}
	 */
	example( options ) {
		return 'foo';
	}
}
