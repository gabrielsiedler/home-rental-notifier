import { runner } from '../../services/runner'
import selectors from './selectors'

const source = 'Regente'
const filter = { label: 'all', value: null }

export const runRegente = async (page) => {
  await runner(
    page,
    selectors,
    source,
    filter,
    `https://regenteimoveis.com.br/?imovel=pesquisa&s=&code=&business%5B%5D=aluguel&tipo=casa&city=florianopolis&bairro%5B%5D=Agron%C3%B4mica&bairro%5B%5D=Campeche&bairro%5B%5D=C%C3%B3rrego+Grande&bairro%5B%5D=Itacorubi&bairro%5B%5D=Lagoa+Da+Concei%C3%A7%C3%A3o&bairro%5B%5D=Parque+S%C3%A3o+Jorge&bairro%5B%5D=Santa+M%C3%B4nica&bairro%5B%5D=Trindade&valor_min=&valor_max=&banheiro=&garagem=`,
  )
}
