import dotenv from 'dotenv'

import * as ui from './ui'
import * as worker from './worker'
import { setupAll } from './setup'
import sourcesObj from './setup/sources'

dotenv.config()

const start = async () => {
  try {
    await setupAll()

    const uiObj = ui.initialDraw(sourcesObj)
    worker.start(uiObj)
  } catch (e) {
    console.error('Error on startup', e)
  }
}

start()
