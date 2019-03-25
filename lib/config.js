const PackageJson = require('../package.json')

const CONFIG = {
  API_HOST: 'https://api.renderforest.com',
  API_PREFIX: '/api/v1',
  AVERAGE_CHARS_IN_WORD: 5.5,
  PROJECT_DATA_GENERATOR: `renderforest/sdk-node/${PackageJson.version}`,
  HTTP_DEFAULT_OPTIONS: {
    method: 'GET',
    json: true,
    headers: {
      'Accept': 'application/json',
      'User-Agent': this.PROJECT_DATA_GENERATOR
    }
  },
  PROJECT_DATA_API_PREFIX: '/api/v5',
  REND_FINISHED_STATE: 100,
  REND_NOT_FINISHED_STATE: 99,
  SOCKET_HOST: 'wss://sockets.renderforest.com',
  SOCKET_ORIGINAL_URL: 'sockets.renderforest.com',
  WEB_HOST: 'https://www.renderforest.com',
  WEB_PREFIX: '/api/v1'
}

module.exports = CONFIG
