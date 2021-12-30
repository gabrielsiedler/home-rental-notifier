import { runner } from '../../services/runner'
import selectors from './selectors'

const filter = 'giacomelli'

export const runGiacomelli = async (page) => {
  await runner(
    page,
    selectors,
    'giacomelli',
    filter,
    `https://www.giacomelli.com.br/imoveis/residencial/casas/florianopolis/centro/trindade/itacorubi/campeche/agronomica/santa-monica/corrego-grande/lagoa-da-conceicao/min-2500/max-20000`,
  )

  await page.screenshot({ path: 'buddy-screenshot.png' })
}
