import dotenv from 'dotenv'

import { mongooseSetup } from './setup/db'
import { twilioSetup } from './setup/twilio'
import * as worker from './worker'

dotenv.config()

const start = async () => {
  await twilioSetup()
  await mongooseSetup()

  worker.start()
}

start()
