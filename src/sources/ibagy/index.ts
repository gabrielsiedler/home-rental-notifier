import { runner } from '../../services/runner'
import selectors from './selectors'

const source = 'Ibagy'
const filters = [
  { label: 'Agronômica', value: 'agronomica' },
  { label: 'Trindade', value: 'trindade' },
  { label: 'Itacorubi', value: 'itacorubi' },
  { label: 'Córrego Grande', value: 'corrego-grande' },
  { label: 'Santa Mônica', value: 'santa-monica' },
  { label: 'Lagoa da Conceição', value: 'lagoa-da-conceicao' },
  { label: 'Campeche', value: 'campeche' },
]

export const runIbagy = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      source,
      filter,
      `https://ibagy.com.br/aluguel/casa/florianopolis/${filter}/2-dormitorios/com-suite/com-vaga/`,
    )
  }
}
