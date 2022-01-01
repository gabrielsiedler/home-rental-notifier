import { runner } from '../../services/runner'
import selectors from './selectors'

const source = 'Quinto Andar'
const filters = [
  { label: 'Itacorubi', value: 'itacorubi' },
  { label: 'Campeche', value: 'campeche' },
  { label: 'Trindade', value: 'trindade' },
  { label: 'Córrego Grande', value: 'corrego-grande' },
  { label: 'Lagoa da Conceição', value: 'lagoa-da-conceicao' },
]

export const runQuintoAndar = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      source,
      filter,
      `https://www.quintoandar.com.br/alugar/imovel/${filter.value}-florianopolis-sc-brasil/casa/casacondominio/de-2000-a-20000-aluguel/3-4-quartos/2-3-4-banheiros/1-2-3-vagas`,
    )
  }
}
