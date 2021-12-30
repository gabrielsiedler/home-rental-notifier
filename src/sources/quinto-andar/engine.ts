import cheerio from 'cheerio'

import { Entry } from '../../models/Entry'
import { sendWhatsappMessage } from '../../services/twilio'

export const scraper = async (page, filter, url) => {
  await page.goto(url)
  await page.waitForSelector('[data-testid="house-card-container"]')

  const html = await page.evaluate(() => document.querySelector('*')!.outerHTML)

  const $ = cheerio.load(html)

  const houses: any = []

  $('[data-testid="house-card-container"]').each(function (this: any) {
    const title =
      $(this).find('[data-testid="house-card-address"]').text() +
      $(this).find('[data-testid="house-card-region"]').text()
    const href = $(this).find('> a').attr('href')
    const id = href!.match(/\/imovel\/(\d+)?.*/)![1]

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
    sendWhatsappMessage('QUINTO ANDAR', houses[0])

    for (let i = 0; i < houses.length; i++) {
      if (houses[i].id === lastId) break

      newEntries.push(houses[i])
    }

    console.log(newEntries)
  }

  lastId = houses[0].id

  await Entry.updateOne({ filter }, { $set: { last_id: lastId } }, { upsert: true })
}
