const ApiService = require('moleculer-web')

module.exports = {
  name: 'whoami',
  mixins: [ApiService],
  settings: {
    port: 8880,
    routes: [{
      aliases: {
        'GET whoami'(req, res) {
          const HeaderStr = Object.keys(req.headers).map((key) => {
            return `${key}: ${req.headers[key]}`
          }).join('\n')
          res.end(`Remote address: ${req.socket.remoteAddress}
Remote port: ${req.socket.remotePort}
${HeaderStr}`)
        },
      }
    }]
  },
  actions: {
    // info: whoamiInfo,
  }
}

function whoamiInfo(ctx) {
  console.log(ctx.transporter)
  return 'ok'
}
