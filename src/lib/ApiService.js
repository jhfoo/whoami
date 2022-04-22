const ApiService = require('moleculer-web')

module.exports = {
  name: 'whoami',
  mixins: [ApiService],
  settings: {
    port: 8880,
  },
  actions: {
    info: whoamiInfo,
  }
}

function whoamiInfo(ctx) {
  return 'ok'
}
