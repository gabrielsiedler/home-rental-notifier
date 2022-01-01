import { runner } from '../../services/runner'
import selectors from './selectors'

const source = 'Arbo'
const filter = { label: 'all', value: null }

export const runArbo = async (page) => {
  await runner(
    page,
    selectors,
    source,
    filter,
    `https://www.arboimoveis.com.br/imoveis/para-alugar/casa+casa-condominio+sobrado/florianopolis-sc?precolocacao=2500--15000&dormitorios=2--3--4&vagas=1--2--3&suites=1--2--3--4&banheiros=2--3--4&mobilia=talvez&order=mais_relevantes`,
  )
}
