import dotenv from 'dotenv'
import { mongooseSetup } from './setup/db'
import { setupSources } from './setup/sources'
import { twilioSetup } from './setup/twilio'
import * as worker from './worker'
dotenv.config()

const setupAll = async () => {
  try {
    await twilioSetup()
    await mongooseSetup()
    await setupSources()

    worker.start()
  } catch (e) {
    console.error('Error on startup', e)
  }
}

setupAll()
