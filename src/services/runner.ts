import { scraper } from '../services/engine'
import { SourceStatus } from '../types'
import { sleep } from '../utils/bundle'
import constants from '../utils/constants'
import { applyVariation } from '../utils/time'

export const runner = async (page, selectors, source, filter, filterIndex, url, ui) => {
  ui.source.currentFilter.index = filterIndex + 1
  ui.source.currentFilter.label = filter.label
  ui.source.status = SourceStatus.Running
  ui.draw()

  await scraper(page, source, filter, url, selectors, ui)

  ui.source.status = SourceStatus.Waiting
  ui.draw()
  const sleepDuration = applyVariation(constants.WAIT, constants.WAIT_VARIATION)

  await sleep(sleepDuration)
}
