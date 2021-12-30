import dotenv from 'dotenv'
import puppeteer from 'puppeteer'

import { startBrowser } from './setup/browser'
import { twilioSetup } from './setup/twilio'
import * as worker from './worker'

dotenv.config()

const start = async () => {
  await twilioSetup()

  let browserInstance = await startBrowser(puppeteer)

  worker.start(browserInstance)
}

start()
