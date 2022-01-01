import { runner } from '../../services/runner'
import selectors from './selectors'

const source = 'Chaves na mão'
const filter = { label: 'all', value: null }

export const runChavesNaMao = async (page) => {
  await runner(
    page,
    selectors,
    source,
    filter,
    `https://www.chavesnamao.com.br/casas-para-alugar/sc-florianopolis/itacorubi/3-quartos/?&filtro={%22bai%22:[13931,13963,13939,13966,13922,13950],%22tim%22:[25],%22ban%22:2,%22gar%22:1,%22pmin%22:2500}`,
  )
}
