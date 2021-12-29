import chalk from 'chalk'

import { scraper } from './sources/olx'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const filters = [
  'itacorubi',
  'corrego+grande',
  'trindade',
  'santa+monica',
  'agronomica',
  'lagoa+da+conceicao',
  'campeche',
]
const WAIT = 30 * 1000
const LONGWAIT = 15 * 60 * 1000

const error = chalk.hex('#FF0000')

export const scrapeAll = async (browser) => {
  try {
    let page = await browser.newPage()

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    )
    await page.setViewport({ width: 960, height: 768 })

    while (1) {
      for (const filter of filters) {
        try {
          await scraper(
            page,
            filter,
            `https://sc.olx.com.br/florianopolis-e-regiao/imoveis/aluguel/casas?ps=2000&q=${filter}&sf=1`,
          )
        } catch (e) {
          console.log(error(`*** Failed`, e))
        }

        console.log(chalk.grey(`*** Waiting for ${WAIT / 1000} seconds.`))
        await sleep(WAIT)
      }

      console.log(chalk.grey(`*** Interval. Waiting for ${LONGWAIT / 1000 / 60} minutes.`))
    }

    await browser.close()
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err)
  }
}
