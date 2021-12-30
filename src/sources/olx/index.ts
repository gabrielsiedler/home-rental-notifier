import { runner } from '../../services/runner'
import selectors from './selectors'

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
    await runner(
      page,
      selectors,
      'olx',
      filter,
      `https://sc.olx.com.br/florianopolis-e-regiao/imoveis/aluguel/casas?ps=2000&q=${filter}&sf=1`,
    )
  }
}
