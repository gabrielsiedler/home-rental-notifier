import { runner } from '../../services/runner'
import selectors from './selectors'

const filters = [
  'agronomica',
  'trindade',
  'itacorubi',
  'corrego-grande',
  'santa-monica',
  'lagoa-da-conceicao',
  'campeche',
]

export const runIbagy = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      'ibagy',
      filter,
      `https://ibagy.com.br/aluguel/casa/florianopolis/${filter}/2-dormitorios/com-suite/com-vaga/`,
    )
  }
}
