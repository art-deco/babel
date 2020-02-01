import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import babel from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof babel, 'function')
  },
  async 'calls package without error'() {
    await babel()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await babel({
      text,
    })
    ok(res, text)
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T