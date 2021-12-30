import chalk from 'chalk'

import { scraper } from '../services/engine'
import { error, sleep } from '../utils/bundle'
import constants from '../utils/constants'

export const runner = async (page, selectors, source, filter, url) => {
  try {
    console.log(chalk.grey(`\n*** Starting ${source} - ${filter}`))

    await scraper(page, source, filter, url, selectors)

    console.log(chalk.green(`*** Completed ${source} - ${filter}`))
  } catch (e) {
    console.log(error(`*** ${source} Failed - ${filter}`, e))
  }

  console.log(chalk.grey(`*** Waiting for ${constants.WAIT / 1000} seconds.`))
  await sleep(constants.WAIT)
}
