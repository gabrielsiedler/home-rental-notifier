import CFonts from 'cfonts'
import chalk from 'chalk'
import rl from 'readline'
import emoji from 'node-emoji'
import { Spinner } from './spinner'

const hideCursor = () => {
  console.log('\x1B[?25l')
}
const clearScreen = () => {
  console.log('\x1b[2J')
  rl.cursorTo(process.stdout, 0, 0)
  rl.clearScreenDown(process.stdout)
}

const drawTitle = () => {
  hideCursor()
  clearScreen()
  CFonts.say('HRN')
  rl.cursorTo(process.stdout, 4, 8)
  console.log(`House Rental Notifier`)
  rl.cursorTo(process.stdout, 0, 10)
}

export const draw = () => {
  const initialPosition: [number, number] = [0, 10]

  drawTitle()
  drawWorker(initialPosition)
}

const icons = {
  found: chalk.hex('#30AF2B')(emoji.get('house')),
  empty: chalk.yellow(emoji.get('question')),
  error: chalk.red(emoji.get('warning')),
  runs: chalk.grey(emoji.get('gear')),
}

const drawWorker = (workerPosition: [number, number]) => {
  const spinner = new Spinner(workerPosition)

  rl.cursorTo(process.stdout, workerPosition[0] + 2, workerPosition[1])
  console.log(chalk.bold.blue('OLX'), '[1/3] Casas - Itacorubi')

  rl.cursorTo(process.stdout, workerPosition[0] + 2, workerPosition[1] + 1)
  console.log(icons.found, '3 ', icons.empty, '42 ', icons.error, '1 ', icons.runs, '253 ')

  spinner.start()
}
