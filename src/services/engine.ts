import cheerio from 'cheerio'
import chalk from 'chalk'

import { Entry } from '../models/Entry'
import { sendWhatsappMessage } from '../services/twilio'

export const scraper = async (page, source, filter, url, selectors) => {
  await page.goto(url)
  await page.waitForSelector(selectors.listItem)

  const html = await page.evaluate(() => document.querySelector('*')!.outerHTML)

  const $ = cheerio.load(html)

  const houses: any = []

  $(selectors.listItem).each(function (this: any) {
    const house = selectors.grabber($, this)

    if (!house.id) return

    houses.push(house)
  })

  const entry: any = await Entry.findOne({ filter: `${source}-${filter}` })
  let lastId = entry?.last_id

  if (lastId === houses[0].id) return

  sendWhatsappMessage(`${source}-${filter}`, houses[0])

  console.log(chalk.blue(`*** Found house:`))
  console.log(chalk.blue(houses[0]))
  console.log('\n')

  lastId = houses[0].id

  await Entry.updateOne({ filter: `${source}-${filter}` }, { $set: { last_id: lastId } }, { upsert: true })
}
