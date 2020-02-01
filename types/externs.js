/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _babel = {}
/**
 * Options for the program.
 * @record
 */
_babel.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_babel.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_babel.Config.prototype.text

/* typal types/api.xml externs */
/**
 * Preview Of The Babel Bug.
 * @typedef {function(!_babel.Config): !Promise<string>}
 */
_babel.babel
