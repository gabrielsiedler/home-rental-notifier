import chalk from 'chalk'
import emoji from 'node-emoji'
import rl from 'readline'

import { Spinner } from '../ui/spinner'
import { Source } from './Source'

const icons = {
  found: chalk.hex('#30AF2B')(emoji.get('house')),
  empty: chalk.yellow(emoji.get('question')),
  error: chalk.red(emoji.get('warning')),
  runs: chalk.grey(emoji.get('gear')),
}

const GAP = [0, 4]
const COLUMN_WIDTH = 50
const BOX_HEIGHT = 3

export class UI {
  position: [number, number]
  source: Source

  constructor(position, source) {
    const column = (position[0] + GAP[0]) * COLUMN_WIDTH
    const line = (position[1] + GAP[1]) * BOX_HEIGHT

    this.position = [column, line]
    this.source = source
  }

  draw() {
    const pos = this.position
    const spinner = new Spinner(pos)

    rl.cursorTo(process.stdout, pos[0] + 2, pos[1])

    const { currentFilter, totalFilters } = this.source
    console.log(chalk.bold.blue(this.source.name), `[${currentFilter.index}/${totalFilters}] ${currentFilter.label}`)

    rl.cursorTo(process.stdout, pos[0] + 2, pos[1] + 1)
    const { found, errors, runs } = this.source
    console.log(icons.found, `${found} `, icons.empty, `0`, icons.error, `${errors} `, icons.runs, `${runs} `)

    spinner.start()
  }
}
