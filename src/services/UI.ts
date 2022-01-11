import chalk from 'chalk'
import emoji from 'node-emoji'
import rl from 'readline'
import { SourceStatus } from '../types'

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
  spinner: Spinner

  constructor(position, source) {
    const column = (position[0] + GAP[0]) * COLUMN_WIDTH
    const line = (position[1] + GAP[1]) * BOX_HEIGHT

    this.position = [column, line]
    this.source = source
    this.spinner = new Spinner(this.position)
  }

  draw() {
    const pos = this.position

    const { currentFilter, totalFilters, status } = this.source

    let str
    if (status === SourceStatus.Running) {
      str = chalk.bold.blue(this.source.name) + ` [${currentFilter.index}/${totalFilters}] ${currentFilter.label}`
    } else {
      str = chalk.bold.blue(this.source.name) + ' ' + chalk.grey(`Waiting...`)
    }

    rl.cursorTo(process.stdout, pos[0] + 2, pos[1])
    const fullStr = str.padEnd(65, ' ')
    console.log(fullStr)

    rl.cursorTo(process.stdout, pos[0] + 2, pos[1] + 1)
    const { found, errors, runs } = this.source
    console.log(icons.found, `${found} `, icons.empty, `0`, icons.error, `${errors} `, icons.runs, `${runs} `)
  }
}
