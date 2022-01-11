import puppeteer from 'puppeteer'

import { runner } from '../services/runner'
import { startBrowser } from '../setup/browser'
import * as sources from '../sources'
import { sleep } from '../utils/bundle'
import constants from '../utils/constants'
import { applyVariation } from '../utils/time'

const setupTab = async (tab) => {
  await tab.setDefaultNavigationTimeout(constants.TIMEOUT)

  await tab.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
  )

  await tab.setViewport({ width: 960, height: 768 })
}

export class Worker {
  browser
  ui
  source

  constructor(source, ui) {
    this.source = source
    this.ui = ui
  }

  async run() {
    this.browser = await startBrowser(puppeteer)

    const tab = await this.browser.newPage()

    await setupTab(tab)

    const { selectors, source, filters, url } = sources[this.source]

    this.ui.spinner.start()

    let i = 0
    for (const filter of filters) {
      await runner(tab, selectors, source, filter, i, url, this.ui)
      i += 1
    }
    this.ui.spinner.stop()

    await this.browser.close()
  }

  async start() {
    while (1) {
      await this.run()

      const sleepDuration = applyVariation(constants.LONGWAIT, constants.LONGWAIT_VARIATION)
      // console.log(chalk.grey(`*** Interval. Waiting for ${round(sleepDuration / 1000 / 60)} minutes.`))

      await sleep(sleepDuration)
    }
  }
}
