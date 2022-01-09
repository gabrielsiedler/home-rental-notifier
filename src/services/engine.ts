import cheerio from 'cheerio'

import { Entry } from '../models/Entry'
import { sendWhatsappMessage } from '../services/twilio'

export const scraper = async (page, source, filter, url, selectors) => {
  await page.goto(url(filter))
  try {
    await page.waitForSelector(selectors.loadCondition)
  } catch (error) {
    await Entry.createRun(source, filter, null, 'error')

    throw error
  }

  try {
    await page.waitForSelector(selectors.listItem)
  } catch (error) {
    await Entry.createRun(source, filter, null, 'empty')

    return
  }

  const html = await page.evaluate(() => document.querySelector('*')!.outerHTML)

  const $ = cheerio.load(html)

  const houses: any = []

  $(selectors.listItem).each(function (this: any) {
    const house = selectors.grabber($, this)

    if (!house.id) return

    houses.push(house)
  })

  const currentHouseId = houses[0].id

  const houseAlreadyFound = await Entry.containsHouseId(source, filter, currentHouseId)

  if (houseAlreadyFound) {
    await Entry.createRun(source, filter, currentHouseId, 'unchanged')

    return
  }

  console.log('Found house. Sending whatsapp message.')
  sendWhatsappMessage(`${source} ${filter.label}`, houses[0])

  await Entry.createRun(source, filter, currentHouseId, 'found')
}
