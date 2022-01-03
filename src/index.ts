import dotenv from 'dotenv'

import { mongooseSetup } from './setup/db'
import { twilioSetup } from './setup/twilio'
import * as worker from './worker'
import { loadSources } from './sources-manager'

dotenv.config()

const start = async () => {
  await twilioSetup()
  await mongooseSetup()
  await loadSources()

  require('./ui/App')

  // worker.start()
}

start()
