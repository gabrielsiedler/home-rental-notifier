import dotenv from 'dotenv'

import { mongooseSetup } from './setup/db'
import { setupSources } from './setup/sources'
import { twilioSetup } from './setup/twilio'
import * as ui from './ui'
import * as worker from './worker'
import * as sources from './sources'

dotenv.config()

console.log('setting max listeners to', Object.keys(sources).length)
process.setMaxListeners(Object.keys(sources).length)

const setupAll = async () => {
  try {
    await twilioSetup()
    await mongooseSetup()
    await setupSources()

    // ui.draw()
    worker.start()
  } catch (e) {
    console.error('Error on startup', e)
  }
}

setupAll()
