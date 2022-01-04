import uiConsole from '../services/Console'
import { scraper } from '../services/engine'
import { sleep } from '../utils/bundle'
import constants from '../utils/constants'
import { applyVariation } from '../utils/time'
import sourceManager from '../services/source-manager'

export const runner = async (page, selectors, source, filter, url) => {
  const currentSource = sourceManager[source]

  try {
    uiConsole.addEntry(`Starting ${source} - ${filter.label}`)
    currentSource.status = 'running'
    currentSource.currentFilter = {
      label: filter.label,
      index: 1,
    }

    await scraper(page, source, filter, url, selectors)

    currentSource.runs += 1
    uiConsole.addEntry(`Completed ${source} - ${filter.label}`)
  } catch (e) {
    // currentSource.errors += 1
    uiConsole.addEntry(`Failed ${source} - ${filter.label}`)
  }

  const sleepDuration = applyVariation(constants.WAIT, constants.WAIT_VARIATION)
  // currentSource.status = 'waiting'

  await sleep(sleepDuration)
}
