import { runner } from '../../services/runner'
import selectors from './selectors'

const filters = ['casas', 'casas-de-condominio']

export const runZap = async (page) => {
  for (const filter of filters) {
    await runner(
      page,
      selectors,
      'zap',
      filter,
      `https://www.zapimoveis.com.br/aluguel/${filter}/sc+florianopolis++itacorubi/?onde=,Santa%20Catarina,Florian%C3%B3polis,,Itacorubi,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3EItacorubi,-27.591888,-48.493989,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Bitacorubi%2F%3B,Santa%20Catarina,Florian%C3%B3polis,,Santa%20M%C3%B4nica,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3ESanta%20Monica,-27.590339,-48.512472,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Bsta-monica%2F%3B,Santa%20Catarina,Florian%C3%B3polis,,C%C3%B3rrego%20Grande,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3ECorrego%20Grande,-27.593609,-48.502741,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Bcorrego-grande%2F%3B,Santa%20Catarina,Florian%C3%B3polis,,Trindade,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3ETrindade,-27.594124,-48.526226,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Btrindade%2F%3B,Santa%20Catarina,Florian%C3%B3polis,,Agron%C3%B4mica,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3EAgronomica,-27.578449,-48.536231,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Bagronomica%2F&transacao=Aluguel&tipoUnidade=Residencial,Casa&tipo=Im%C3%B3vel%20usado&ordem=Data%20Atualiza%C3%A7%C3%A3o`,
    )
  }
}
