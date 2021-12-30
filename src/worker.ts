import chalk from 'chalk'

import constants from './utils/constants'
import { runOlx } from './sources/olx'
import { runZap } from './sources/zap'
import { sleep } from './utils/bundle'

export const start = async (browser) => {
  try {
    let page = await browser.newPage()

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    )
    await page.setViewport({ width: 960, height: 768 })

    while (1) {
      await runZap(page)
      await runOlx(page)

      console.log(chalk.grey(`*** Interval. Waiting for ${constants.LONGWAIT / 1000 / 60} minutes.`))
      await sleep(constants.LONGWAIT)
    }

    await browser.close()
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err)
  }
}
