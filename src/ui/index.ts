import CFonts from 'cfonts'
import rl from 'readline'

import { UI } from '../services/UI'

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

const calculateBoxPosition = (srcIndex: number) => {
  const column = Math.floor(srcIndex / 6)
  const line = srcIndex % 6

  return [column, line]
}

export const initialDraw = (sources) => {
  drawTitle()

  const uiObj: any = {}
  Object.keys(sources).forEach((srcKey, i) => {
    const source = sources[srcKey]
    const ui = new UI(calculateBoxPosition(i), source)

    ui.draw()

    uiObj[srcKey] = ui
  })

  return uiObj
}
