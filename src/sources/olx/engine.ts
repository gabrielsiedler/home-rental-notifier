import cheerio from 'cheerio'

import { Entry } from '../../models/Entry'
import { sendWhatsappMessage } from '../../services/twilio'

export const scraper = async (page, filter, url) => {
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

  const entry: any = await Entry.findOne({ filter })
  let lastId = entry?.last_id

  if (lastId && lastId !== houses[0].id) {
    const newEntries: any = []

    // only notify the newest house for now
    sendWhatsappMessage('OLX', houses[0])

    for (let i = 0; i < houses.length; i++) {
      if (houses[i].id === lastId) break

      newEntries.push(houses[i])
    }

    console.log(newEntries)
  }

  lastId = houses[0].id

  await Entry.updateOne({ filter }, { $set: { last_id: lastId } }, { upsert: true })
}
