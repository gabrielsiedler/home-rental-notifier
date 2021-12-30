import chalk from 'chalk'

import { error, sleep } from '../../utils/bundle'
import constants from '../../utils/constants'
import { scraper as olxScrapper } from './engine'

const filters = [
  'itacorubi',
  'corrego+grande',
  'trindade',
  'santa+monica',
  'agronomica',
  'lagoa+da+conceicao',
  'campeche',
]

export const runOlx = async (page) => {
  for (const filter of filters) {
    try {
      console.log(chalk.grey(`\n*** Starting olx - ${filter}`))

      await olxScrapper(
        page,
        filter,
        `https://sc.olx.com.br/florianopolis-e-regiao/imoveis/aluguel/casas?ps=2000&q=${filter}&sf=1`,
      )

      console.log(chalk.green(`*** Completed olx - ${filter}`))
    } catch (e) {
      console.log(error(`*** OLX Failed - ${filter}`, e))
    }

    console.log(chalk.grey(`*** Waiting for ${constants.WAIT / 1000} seconds.`))
    await sleep(constants.WAIT)
  }
}
