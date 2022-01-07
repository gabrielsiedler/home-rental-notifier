import dotenv from 'dotenv'
import { mongooseSetup } from './setup/db'
import { setupSources } from './setup/sources'
import { twilioSetup } from './setup/twilio'
import * as worker from './worker'
dotenv.config()
import CFonts from 'cfonts'

const setupAll = async () => {
  CFonts.say('HRN')

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
