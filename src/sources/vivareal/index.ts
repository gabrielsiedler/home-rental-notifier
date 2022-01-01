import { runner } from '../../services/runner'
import selectors from './selectors'

const source = 'Viva Real'
const filters = [
  { label: 'Itacorubi', value: 'itacorubi' },
  { label: 'Córrego Grande', value: 'corrego-grande' },
  { label: 'Trindade', value: 'trindade' },
  { label: 'Santa Mônica', value: 'santa-monica' },
  { label: 'Agronômica', value: 'agronomica' },
  { label: 'Lagoa da Conceição', value: 'lagoa-da-conceicao' },
  { label: 'Campeche', value: 'campeche' },
]

export const runVivaReal = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      source,
      filter,
      `https://www.vivareal.com.br/aluguel/santa-catarina/florianopolis/bairros/${filter}/casa_residencial/#banheiros=2&onde=BR-Santa_Catarina-NULL-Florianopolis-Barrios-Itacorubi,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Santa_Monica,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Corrego_Grande,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Trindade,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Lagoa_da_Conceicao,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Campeche&preco-desde=2500&quartos=3&tipos=casa_residencial,condominio_residencial,sobrado_residencial&vagas=1`,
    )
  }
}
