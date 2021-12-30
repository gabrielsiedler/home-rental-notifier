import cheerio from 'cheerio'

import { Entry } from '../../models/Entry'
import { sendWhatsappMessage } from '../../services/twilio'

export const scraper = async (page, filter, url) => {
  await page.goto(url)
  await page
    .waitForSelector('.card-container.js-listing-card')
    .catch((error) => console.log('failed to wait for the selector', error))

  const html = await page.evaluate(() => document.querySelector('*')!.outerHTML)

  const $ = cheerio.load(html)

  const houses: any = []

  $('.card-container.js-listing-card').each(function (this: any) {
    const id = $(this).attr('data-id')
    const href = `https://www.zapimoveis.com.br/imovel/${id}`
    const title = $(this).find('.simple-card__address').text().replace('\n', '').trim()

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
