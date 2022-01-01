import { runner } from '../../services/runner'
import selectors from './selectors'

const source = 'Dalton Andrade'

const filters = [
  { label: 'Lagoa da Conceição', value: 'Lagoa%20da%20Conceicao' },
  { label: 'Itacorubi', value: 'Itacorubi' },
  { label: 'Córrego Grande', value: 'Corrego%20Grande' },
  { label: 'Santa Mônica', value: 'Santa%20Monica' },
  { label: 'Agronômica', value: 'Agronomica' },
  { label: 'Campeche', value: 'Campeche' },
  { label: 'Trindade', value: 'Trindade' },
]

export const runDaltonAndrade = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      source,
      filter,
      `https://www.daltonandrade.com.br/aluguel?imovel={%22casa%22:true,%22category%22:%22residencial%22,%22city%22:%22Florianopolis%22,%22neighborhood%22:%22${filter}%22,%22value_min%22:%222.500%22}`,
    )
  }
}
