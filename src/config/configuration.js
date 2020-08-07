const nconf = require('nconf')
const yaml = require('js-yaml')

module.exports = () => {
  nconf.argv().env()

  nconf.file({
    file: './../config.yml',
    logicalSeparator: '.',
    format: {
      parse: yaml.safeLoad,
      stringify: yaml.safeDump
    }
  })

  return nconf
}
