import chalk from 'chalk'
import puppeteer from 'puppeteer'

import { startBrowser } from './setup/browser'
import { runArbo } from './sources/arbo'
import { runBrognoli } from './sources/brognoli'
import { runChavesNaMao } from './sources/chaves-na-mao'
import { runDaltonAndrade } from './sources/dalton-andrade'
import { runGiacomelli } from './sources/giacomelli'
import { runGralha } from './sources/gralha'
import { runIbagy } from './sources/ibagy'
import { runJump } from './sources/jump'
import { runOlx } from './sources/olx'
import { runQuintoAndar } from './sources/quinto-andar'
import { runRegente } from './sources/regente'
import { runSeiter } from './sources/seiter'
import { runVivaReal } from './sources/vivareal'
import { runZap } from './sources/zap'
import { sleep } from './utils/bundle'
import constants from './utils/constants'
import { applyVariation } from './utils/time'

const runners: any = [
  runOlx,
  runZap,
  runQuintoAndar,
  runBrognoli,
  runIbagy,
  runGiacomelli,
  runVivaReal,
  runRegente,
  runGralha,
  runChavesNaMao,
  runDaltonAndrade,
  runArbo,
  runSeiter,
  runJump,
]

const setupTab = async (tab) => {
  await tab.setDefaultNavigationTimeout(constants.TIMEOUT)

  await tab.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
  )

  await tab.setViewport({ width: 960, height: 768 })
}

export const start = async () => {
  try {
    while (1) {
      let browser = await startBrowser(puppeteer)

      let runnersPromise: any = []

      for (let i = 0; i < runners.length; i += 1) {
        const tab = await browser.newPage()

        await setupTab(tab)

        runnersPromise.push(runners[i](tab))
      }

      await Promise.all(runnersPromise)

      const sleepDuration = applyVariation(constants.LONGWAIT, constants.LONGWAIT_VARIATION)
      console.log(chalk.grey(`*** Interval. Waiting for ${sleepDuration / 1000 / 60} minutes.`))

      await sleep(sleepDuration)

      await browser.close()
    }
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err)
  }
}
