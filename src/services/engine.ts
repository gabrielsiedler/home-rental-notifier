import cheerio from 'cheerio'
import chalk from 'chalk'
import prettyjson from 'prettyjson'

import { Entry } from '../models/Entry'
import { sendWhatsappMessage } from '../services/twilio'

export const scraper = async (page, source, filter, url, selectors) => {
  await page.goto(url)
  await page.waitForSelector(selectors.listItem)

  let html

  try {
    html = await page.evaluate(() => document.querySelector('*')!.outerHTML)
  } catch (error) {
    await Entry.createRun(source, filter, null, 'failed')

    throw error
  }

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

  sendWhatsappMessage(`${source}-${filter}`, houses[0])

  console.log(chalk.blue(`*** Found house:`))
  console.log(prettyjson.render(houses[0]))
  console.log('\n')

  await Entry.createRun(source, filter, currentHouseId, 'found')
}
