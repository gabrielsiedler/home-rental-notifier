import { runner } from '../../services/runner'
import selectors from './selectors'

const source = 'Olx'
const filters = [
  { label: 'Itacorubi', value: 'itacorubi' },
  { label: 'Córrego Grande', value: 'corrego+grande' },
  { label: 'Trindade', value: 'trindade' },
  { label: 'Santa Mônica', value: 'santa+monica' },
  { label: 'Agronômica', value: 'agronomica' },
  { label: 'Lagoa da Conceição', value: 'lagoa+da+conceicao' },
  { label: 'Campeche', value: 'campeche' },
]

export const runOlx = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      source,
      filter,
      `https://sc.olx.com.br/florianopolis-e-regiao/imoveis/aluguel/casas?ps=2000&q=${filter}&sf=1`,
    )
  }
}
