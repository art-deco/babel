import { c } from 'erte'

/**
 * Preview Of The Babel Bug.
 * @param {!_babel.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
export default async function babel(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@artdeco/babel called with %s', c(text, 'yellow'))
  return text
}

/* typal types/index.xml namespace */
/**
 * @typedef {_babel.Config} Config `＠record` Options for the program.
 * @typedef {Object} _babel.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
