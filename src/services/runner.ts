import chalk from 'chalk'

import { scraper } from '../services/engine'
import { error, sleep } from '../utils/bundle'
import constants from '../utils/constants'
import { applyVariation } from '../utils/time'

export const runner = async (page, selectors, source, filter, url) => {
  try {
    console.log(chalk.grey(`\n*** Starting ${source} - ${filter.label}`))

    await scraper(page, source, filter, url, selectors)

    console.log(chalk.green(`*** Completed ${source} - ${filter.label}`))
  } catch (e) {
    console.log(error(`*** ${source} Failed - ${filter.label}`, e))
  }

  const sleepDuration = applyVariation(constants.WAIT, constants.WAIT_VARIATION)
  console.log(chalk.grey(`*** Waiting for ${sleepDuration / 1000} seconds.`))

  await sleep(sleepDuration)
}
