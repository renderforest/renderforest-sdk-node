const PackageJson = require('../package.json')

const PROJECT_DATA_GENERATOR = `renderforest/sdk-node/${PackageJson.version}`

const CONFIG = {
  API_HOST: 'https://api.renderforest.com',
  API_PREFIX: '/api/v1',
  AVERAGE_CHARS_IN_WORD: 5.5,
  PROJECT_DATA_GENERATOR,
  HTTP_DEFAULT_OPTIONS: {
    method: 'GET',
    json: true,
    headers: {
      'Accept': 'application/json',
      'User-Agent': PROJECT_DATA_GENERATOR
    }
  },
  PREVIEW_HOST: 'https://preview.renderforest.com',
  PROJECT_DATA_API_PREFIX: '/api/v5',
  REND_FINISHED_STATE: 100,
  REND_NOT_FINISHED_STATE: 99,
  SOCKET_HOST: 'wss://sockets-2.renderforest.com',
  SOCKET_ORIGINAL_URL: 'sockets-2.renderforest.com',
  WEB_HOST: 'https://www.renderforest.com',
  WEB_PREFIX: '/api/v1'
}

module.exports = CONFIG
