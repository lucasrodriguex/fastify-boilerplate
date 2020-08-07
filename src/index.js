const server = require('./server')
const log = require('./factory/log')
const { v4 } = require('uuid')
const config = require('./config/configuration')()

async function start () {
  const app = await server.build({
    ignoreTrailingSlash: true,
    logger: log(config),
    genReqId: () => {
      return v4()
    }
  })
  await server.createServer(app, config.get('port'))
}

start()
