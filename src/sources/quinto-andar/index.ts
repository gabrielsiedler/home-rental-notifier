import { runner } from '../../services/runner'
import selectors from './selectors'

const filters = ['itacorubi', 'campeche', 'trindade', 'corrego-grande', 'lagoa-da-conceicao']

export const runQuintoAndar = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      'quintoAndar',
      filter,
      `https://www.quintoandar.com.br/alugar/imovel/${filter}-florianopolis-sc-brasil/casa/casacondominio/de-2000-a-20000-aluguel/3-4-quartos/2-3-4-banheiros/1-2-3-vagas`,
    )
  }
}
