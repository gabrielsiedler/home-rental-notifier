import chalk from 'chalk'

import { scraper as zapScrapper } from './sources/zap'
import { scraper as olxScrapper } from './sources/olx'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const olxFilters = [
  'itacorubi',
  'corrego+grande',
  'trindade',
  'santa+monica',
  'agronomica',
  'lagoa+da+conceicao',
  'campeche',
]
const WAIT = 30 * 1000
const LONGWAIT = 15 * 60 * 1000

const error = chalk.hex('#FF0000')

export const scrapeAll = async (browser) => {
  try {
    let page = await browser.newPage()

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    )
    await page.setViewport({ width: 960, height: 768 })

    while (1) {
      try {
        await zapScrapper(
          page,
          'zap-casa',
          'https://www.zapimoveis.com.br/aluguel/casas/sc+florianopolis++itacorubi/?onde=,Santa%20Catarina,Florian%C3%B3polis,,Itacorubi,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3EItacorubi,-27.591888,-48.493989,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Bitacorubi%2F%3B,Santa%20Catarina,Florian%C3%B3polis,,Santa%20M%C3%B4nica,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3ESanta%20Monica,-27.590339,-48.512472,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Bsta-monica%2F%3B,Santa%20Catarina,Florian%C3%B3polis,,C%C3%B3rrego%20Grande,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3ECorrego%20Grande,-27.593609,-48.502741,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Bcorrego-grande%2F%3B,Santa%20Catarina,Florian%C3%B3polis,,Trindade,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3ETrindade,-27.594124,-48.526226,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Btrindade%2F%3B,Santa%20Catarina,Florian%C3%B3polis,,Agron%C3%B4mica,,,neighborhood,BR%3ESanta%20Catarina%3ENULL%3EFlorianopolis%3EBarrios%3EAgronomica,-27.578449,-48.536231,%2Faluguel%2Fcasas%2Fsc%2Bflorianopolis%2B%2Bagronomica%2F&transacao=Aluguel&tipoUnidade=Residencial,Casa&tipo=Im%C3%B3vel%20usado&ordem=Data%20Atualiza%C3%A7%C3%A3o',
        )
      } catch (e) {
        console.log(error(`*** ZAP Failed`, e))
      }

      for (const filter of olxFilters) {
        try {
          await olxScrapper(
            page,
            filter,
            `https://sc.olx.com.br/florianopolis-e-regiao/imoveis/aluguel/casas?ps=2000&q=${filter}&sf=1`,
          )
        } catch (e) {
          console.log(error(`*** OLX Failed - ${filter}`, e))
        }

        console.log(chalk.grey(`*** Waiting for ${WAIT / 1000} seconds.`))
        await sleep(WAIT)
      }

      console.log(chalk.grey(`*** Interval. Waiting for ${LONGWAIT / 1000 / 60} minutes.`))
      await sleep(LONGWAIT)
    }

    await browser.close()
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err)
  }
}
