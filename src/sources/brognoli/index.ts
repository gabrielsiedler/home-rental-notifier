import { runner } from '../../services/runner'
import selectors from './selectors'

const filter = 'brognoli'

export const runBrognoli = async (page) => {
  await runner(
    page,
    selectors,
    'brognoli',
    filter,
    `https://www.brognoli.com.br/imoveis/?sort=newest&search_type=3&search_city=FLORIAN%C3%93POLIS&search_neighborhood%5B%5D=CAMPECHE&search_neighborhood%5B%5D=C%C3%93RREGO+GRANDE&search_neighborhood%5B%5D=ITACORUBI&search_neighborhood%5B%5D=LAGOA+DA+CONCEI%C3%87%C3%83O&search_neighborhood%5B%5D=SANTA+M%C3%94NICA&search_neighborhood%5B%5D=TRINDADE&search_category=445&search_min_price=2+000&search_max_price=&search_bedrooms=0&search_garages=0`,
  )
}
