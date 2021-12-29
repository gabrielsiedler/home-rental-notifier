import dotenv from 'dotenv'
import puppeteer from 'puppeteer'

import { startBrowser } from './browser'
import { scrapeAll } from './page-controller'
import { twilioSetup } from './twilio'

dotenv.config()

const start = async () => {
  await twilioSetup()

  let browserInstance = await startBrowser(puppeteer)

  scrapeAll(browserInstance)
}

start()
