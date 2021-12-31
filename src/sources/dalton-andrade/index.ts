import { runner } from '../../services/runner'
import selectors from './selectors'

const filters = [
  'Lagoa%20da%20Conceicao',
  'Itacorubi',
  'Corrego%20Grande',
  'Santa%20Monica',
  'Agronomica',
  'Campeche',
  'Trindade',
]

export const runDaltonAndrade = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      'dalton-andrade',
      filter,
      `https://www.daltonandrade.com.br/aluguel?imovel={%22casa%22:true,%22category%22:%22residencial%22,%22city%22:%22Florianopolis%22,%22neighborhood%22:%22${filter}%22,%22value_min%22:%222.500%22}`,
    )
  }
}
