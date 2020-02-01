const { _babel } = require('./babel')

/**
 * Preview Of The Babel Bug.
 * @param {!_babel.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function babel(config) {
  return _babel(config)
}

module.exports = babel

/* typal types/index.xml namespace */
/**
 * @typedef {_babel.Config} Config `＠record` Options for the program.
 * @typedef {Object} _babel.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
