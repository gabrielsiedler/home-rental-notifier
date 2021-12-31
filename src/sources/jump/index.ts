import { runner } from '../../services/runner'
import selectors from './selectors'

const filter = 'jump'

export const runJump = async (page) => {
  await runner(
    page,
    selectors,
    'jump',
    filter,
    `https://www.jumpimoveis.com.br/imoveis/para-alugar/casa/florianopolis/itacorubi+corrego-grande+lagoa-da-conceicao+santa-monica+trindade+agronomica+campeche+agronomica`,
  )
}
