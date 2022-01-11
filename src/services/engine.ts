import cheerio from 'cheerio'

import { Entry } from '../models/Entry'
import { sendWhatsappMessage } from '../services/twilio'

export const scraper = async (page, source, filter, url, selectors, ui) => {
  await page.goto(url(filter))
  try {
    await page.waitForSelector(selectors.loadCondition)
  } catch (error) {
    await Entry.createRun(source, filter, null, 'error')
    ui.source.errors += 1

    return
  }

  try {
    await page.waitForSelector(selectors.listItem)
  } catch (error) {
    await Entry.createRun(source, filter, null, 'empty')
    ui.source.empty += 1

    return
  }

  const html = await page.evaluate(() => document.querySelector('*')!.outerHTML)

  const $ = cheerio.load(html)

  const houses: any = []
  let currentHouseId
  try {
    $(selectors.listItem).each(function (this: any) {
      const house = selectors.grabber($, this)

      if (!house.id) return

      houses.push(house)
    })

    currentHouseId = houses[0].id
  } catch (error) {
    await Entry.createRun(source, filter, null, 'error')
    ui.source.errors += 1

    return
  }

  const houseAlreadyFound = await Entry.containsHouseId(source, filter, currentHouseId)

  if (houseAlreadyFound) {
    await Entry.createRun(source, filter, currentHouseId, 'unchanged')
    ui.source.unchanged += 1
  } else {
    sendWhatsappMessage(`${source} ${filter.label}`, houses[0])

    await Entry.createRun(source, filter, currentHouseId, 'found')

    ui.source.found += 1
  }

  ui.draw()
}
