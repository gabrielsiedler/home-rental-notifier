import puppeteer from 'puppeteer'

import { runner } from './services/runner'
import { startBrowser } from './setup/browser'
import * as sources from './sources'
import { sleep } from './utils/bundle'
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

let console = []

export const start = async () => {
  try {
    while (1) {
      await sleep(400)

      let browser = await startBrowser(puppeteer)

      let runnersPromise: any = []

      for (let source in sources) {
        const tab = await browser.newPage()

        await setupTab(tab)

        runnersPromise.push(run(tab, sources[source]))
      }

      await Promise.all(runnersPromise)

      const sleepDuration = applyVariation(constants.LONGWAIT, constants.LONGWAIT_VARIATION)
      // console.log(chalk.grey(`*** Interval. Waiting for ${round(sleepDuration / 1000 / 60)} minutes.`))

      await sleep(sleepDuration)

      await browser.close()
    }
  } catch (err) {
    // console.log('Could not resolve the browser instance => ', err)
  }
}
