'use strict'

// This file contains code that we reuse
// between our tests.

const fp = require('fastify-plugin')
const App = require('../src/server')

// Fill in this config with all the configurations
// needed for testing the application
function config () {
  return {}
}

// automatically build and tear down our instance
function build (t) {
  const app = App.build()

  // tear down our app after we are done
  t.tearDown(app.close.bind(app))

  return app
}

module.exports = {
  config,
  build
}
