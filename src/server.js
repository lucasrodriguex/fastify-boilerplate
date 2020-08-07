const path = require('path')
const AutoLoad = require('fastify-autoload')
const fastify = require('fastify')

module.exports = {
  build: async (opts = {}) => {
    const app = fastify(opts)

    app.register(AutoLoad, {
      dir: path.join(__dirname, 'routes'),
      options: Object.assign({}, opts)
    })

    return app
  },

  createServer: async (app, port = 3000) => {
    app.listen(port, '0.0.0.0', (err) => {
      if (err) {
        app.log.error(err)
        process.exit(1)
      }
      app.log.info('Server Started')
    })
  }
}
