import chalk from 'chalk'

import { scraper } from '../../services/engine'
import { error, sleep } from '../../utils/bundle'
import constants from '../../utils/constants'
import selectors from './selectors'

const filters = ['itacorubi', 'campeche', 'trindade', 'corrego-grande', 'lagoa-da-conceicao']

export const runQuintoAndar = async (page) => {
  for (const filter of filters) {
    try {
      console.log(chalk.grey(`\n*** Starting quintoAndar - ${filter}`))

      await scraper(
        page,
        `quintoAndar-${filter}`,
        `https://www.quintoandar.com.br/alugar/imovel/${filter}-florianopolis-sc-brasil/casa/casacondominio/de-2000-a-20000-aluguel/3-4-quartos/2-3-4-banheiros/1-2-3-vagas`,
        selectors,
      )

      console.log(chalk.green(`*** Completed quintoAndar - ${filter}`))
    } catch (e) {
      console.log(error(`*** quintoAndar Failed - ${filter}`, e))
    }

    console.log(chalk.grey(`*** Waiting for ${constants.WAIT / 1000} seconds.`))
    await sleep(constants.WAIT)
  }
}
