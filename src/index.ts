import dotenv from 'dotenv'
import puppeteer from 'puppeteer'

import { startBrowser } from './setup/browser'
import { mongooseSetup } from './setup/db'
import { twilioSetup } from './setup/twilio'
import * as worker from './worker'

dotenv.config()

const start = async () => {
  await twilioSetup()
  await mongooseSetup()

  let browserInstance = await startBrowser(puppeteer)

  worker.start(browserInstance)
}

start()
