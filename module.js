const path = require('path')

const defaultOptions = {
  clientWhitelist: 'client'
}

module.exports = async function nuxtConfigModule (moduleOptions) {
  const options = Object.assign({}, defaultOptions, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.js'),
    fileName: 'node-config-nuxt.js',
    options
  })
}

module.exports.meta = require('./package.json')
