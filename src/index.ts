import dotenv from 'dotenv'

import * as ui from './ui'
import * as worker from './worker'
import { setupAll } from './setup'

dotenv.config()

const start = async () => {
  try {
    await setupAll()

    // ui.draw()
    worker.start()
  } catch (e) {
    console.error('Error on startup', e)
  }
}

start()
