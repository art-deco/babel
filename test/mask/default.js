import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import babel from '../../src'

export default makeTestSuite('test/result/default', {
  /**
   * @param {Context} ctx
   */
  async getResults({ fixture }) {
    const text = fixture`test.txt` + `\n${this.input}`
    const res = await babel({
      text,
    })
    return res
  },
  context: Context,
})