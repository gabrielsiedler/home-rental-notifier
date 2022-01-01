import chalk from 'chalk'

import { scraper } from '../services/engine'
import { error, sleep } from '../utils/bundle'
import constants from '../utils/constants'

export const runner = async (page, selectors, source, filter, url) => {
  try {
    console.log(chalk.grey(`\n*** Starting ${source} - ${filter.label}`))

    await scraper(page, source, filter.value, url, selectors)

    console.log(chalk.green(`*** Completed ${source} - ${filter.label}`))
  } catch (e) {
    console.log(error(`*** ${source} Failed - ${filter.label}`, e))
  }

  console.log(chalk.grey(`*** Waiting for ${constants.WAIT / 1000} seconds.`))
  await sleep(constants.WAIT)
}
