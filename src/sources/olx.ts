import chalk from 'chalk'
import cheerio from 'cheerio'

import { Entry } from '../models/Entry'
import { sendWhatsappMessage } from '../twilio'

export const scraper = async (page, filter, url) => {
  console.log(chalk.grey(`\n*** Starting [${filter}]`))

  await page.goto(url)
  await page.waitForSelector('.sc-1fcmfeb-2').catch((error) => console.log('failed to wait for the selector', error))

  const html = await page.evaluate(() => document.querySelector('*')!.outerHTML)

  const $ = cheerio.load(html)

  const houses: any = []

  $('.sc-1fcmfeb-2').each(function (this: any) {
    const _link = $(this).find('a')
    const id = _link.attr('data-lurker_list_id')
    const href = _link.attr('href')
    const title = _link.attr('title')

    if (!id) return

    const house = {
      id,
      title,
      href,
    }

    houses.push(house)
  })

  const entry: any = await Entry.find({ filter })
  let last = entry?.last_id

  if (last && last !== houses[0].id) {
    const newEntries: any = []

    sendWhatsappMessage(`New house found. ${houses[0].title}. Access ${houses[0].href}. Filter: ${url}`)

    for (let i = 0; i < houses.length; i++) {
      if (houses[i].id === last) break

      newEntries.push(houses[i])
    }

    console.log(newEntries)
  }

  last = houses[0].id

  await Entry.updateOne({ filter }, { $set: { last_id: last } }, { upsert: true })

  console.log(chalk.green(`*** Completed [${filter}]`))
}
