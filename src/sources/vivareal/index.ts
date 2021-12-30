import { runner } from '../../services/runner'
import selectors from './selectors'

const filters = [
  'itacorubi',
  'corrego-grande',
  'trindade',
  'santa-monica',
  'agronomica',
  'lagoa-da-conceicao',
  'campeche',
]

export const runVivaReal = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      'vivaReal',
      filter,
      `https://www.vivareal.com.br/aluguel/santa-catarina/florianopolis/bairros/${filter}/casa_residencial/#banheiros=2&onde=BR-Santa_Catarina-NULL-Florianopolis-Barrios-Itacorubi,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Santa_Monica,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Corrego_Grande,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Trindade,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Lagoa_da_Conceicao,BR-Santa_Catarina-NULL-Florianopolis-Barrios-Campeche&preco-desde=2500&quartos=3&tipos=casa_residencial,condominio_residencial,sobrado_residencial&vagas=1`,
    )
  }
}
