'use strict'

const { test } = require('tap')
const App = require('../../src/server')

test('default root route', async (t) => {
  const app = await App.build()

  t.tearDown(() => app.close())

  const res = await app.inject({
    method: 'GET',
    url: '/'
  })

  t.deepEqual(JSON.parse(res.payload), { root: true })
})

// inject callback style:
//
// test('default root route', (t) => {
//   t.plan(2)
//   const app = build(t)
//
//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     t.deepEqual(JSON.parse(res.payload), { root: true })
//   })
// })
