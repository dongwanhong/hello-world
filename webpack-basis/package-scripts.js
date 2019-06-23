// See https://github.com/kentcdodds/nps for more about nps.
// See https://doc.esdoc.org/github.com/kentcdodds/nps-utils/ for more about nps-utils.

const npsUtils = require('nps-utils')
const { series, rimraf } = npsUtils

module.exports = {
  scripts: {
    build: {
      default: {
        description: 'Clean dist directory and run all builds in mode production',
        script: series(
          rimraf('dist/*'),
          'cross-env NODE_ENV=production webpack --config scripts/webpack.prod.js'
        )
      },
      dev: {
        description: 'Clean dist directory and run all builds in mode development',
        script: series(rimraf('dist/*'), 'webpack --config scripts/webpack.dev.js')
      }
    },
    dev: {
      default: {
        description: 'Start a WEB service with development mode',
        script: 'webpack-dev-server --config scripts/webpack.dev.js'
      }
    }
  }
}
