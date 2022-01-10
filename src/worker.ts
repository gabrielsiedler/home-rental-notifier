import chalk from 'chalk'
import puppeteer from 'puppeteer'

import { runner } from './services/runner'
import { startBrowser } from './setup/browser'
import * as sources from './sources'
import { round, sleep } from './utils/bundle'
import constants from './utils/constants'
import { applyVariation } from './utils/time'

export const run = async (page, { selectors, source, filters, url }) => {
  for (const filter of filters) {
    await runner(page, selectors, source, filter, url)
  }
}

const setupTab = async (tab) => {
  await tab.setDefaultNavigationTimeout(constants.TIMEOUT)

  await tab.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
  )

  await tab.setViewport({ width: 960, height: 768 })
}

class Worker {
  source
  browser

  constructor(source) {
    this.source = source
  }

  async run() {
    this.browser = await startBrowser(puppeteer)

    const tab = await this.browser.newPage()

    await setupTab(tab)

    const { selectors, source, filters, url } = sources[this.source]

    for (const filter of filters) {
      await runner(tab, selectors, source, filter, url)
    }
  }

  async start() {
    while (1) {
      await this.run()

      const sleepDuration = applyVariation(constants.LONGWAIT, constants.LONGWAIT_VARIATION)
      console.log(chalk.grey(`*** Interval. Waiting for ${round(sleepDuration / 1000 / 60)} minutes.`))

      await this.browser.close()

      await sleep(sleepDuration)
    }
  }
}

export const start = async () => {
  try {
    for (let source in sources) {
      const currentWorker = new Worker(source)

      currentWorker.start()
    }
  } catch (err) {
    console.log('Could not create worker => ', err)
  }
}
