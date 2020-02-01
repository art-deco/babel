import { c } from 'erte'

/**
 * @type {_babel.babel}
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

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').babel} _babel.babel
 */
