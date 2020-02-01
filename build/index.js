const { c } = require('../stdlib');

/**
 * @type {_babel.babel}
 */
async function babel(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@artdeco/babel called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').babel} _babel.babel
 */


module.exports = babel