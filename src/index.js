const { ServiceBroker } = require('moleculer'),
  broker = new ServiceBroker(),
  ApiService = require('./lib/ApiService')

broker.createService(ApiService)
broker.start()

