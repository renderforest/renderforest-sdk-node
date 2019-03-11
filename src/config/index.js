const PackageJson = require('../../package.json')

const CONFIG = {
  API_HOST: 'https://api.renderforest.com',
  API_PREFIX: '/api/v1',
  AVERAGE_CHARS_IN_WORD: 5.5,
  HTTP_DEFAULT_OPTIONS: {
    method: 'GET',
    json: true,
    headers: {
      'Accept': 'application/json',
      'User-Agent': `renderforest/sdk-node/${PackageJson.version}`
    }
  },
  PROJECT_DATA_API_PREFIX: '/api/v5',
  WEB_HOST: 'https://www.renderforest.com',
  WEB_PREFIX: '/api/v1'
}

module.exports = CONFIG
