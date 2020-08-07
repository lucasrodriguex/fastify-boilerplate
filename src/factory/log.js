const pino = require('pino')
const { v4 } = require('uuid')

module.exports = function (config) {
  return pino({
    genReqId: v4,
    level: config.get('logLevel'),
    formatters: {
      level: (label) => {
        return { level: label }
      }
    },
    messageKey: 'message',
    timestamp: pino.stdTimeFunctions.isoTime
  })
}
