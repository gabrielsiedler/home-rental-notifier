import dotenv from 'dotenv'

import { mongooseSetup } from './setup/db'
import { setupSources } from './setup/sources'
import { twilioSetup } from './setup/twilio'

import * as worker from './worker'

dotenv.config()

const start = async () => {
  await twilioSetup()
  await mongooseSetup()
  await setupSources()

  require('./ui/App')

  worker.start()
}

start()
