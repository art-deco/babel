import babel from '../src'

(async () => {
  const res = await babel({
    text: 'example',
  })
  console.log(res)
})()