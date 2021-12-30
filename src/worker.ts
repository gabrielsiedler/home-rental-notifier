import chalk from 'chalk'

import { runOlx } from './sources/olx'
import { runQuintoAndar } from './sources/quinto-andar'
import { runZap } from './sources/zap'
import { sleep } from './utils/bundle'
import constants from './utils/constants'

const runners: any = [runOlx, runZap, runQuintoAndar]

export const start = async (browser) => {
  try {
    for (let i = 0; i < runners.length; i += 1) {
      const tab = await browser.newPage()

      await tab.setDefaultNavigationTimeout(constants.TIMEOUT)

      await tab.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
      )

      await tab.setViewport({ width: 960, height: 768 })

      runners[i] = runners[i](tab)
    }

    while (1) {
      await Promise.all(runners)

      console.log(chalk.grey(`*** Interval. Waiting for ${constants.LONGWAIT / 1000 / 60} minutes.`))
      await sleep(constants.LONGWAIT)
    }

    await browser.close()
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err)
  }
}
