import rl from 'readline'

export class Spinner {
  interval
  position: [number, number]
  frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

  constructor(position: [number, number]) {
    this.position = position
  }

  start() {
    let i = 0

    this.interval = setInterval(() => {
      rl.cursorTo(process.stdout, ...this.position)
      console.log(this.frames[i])

      if (i === this.frames.length - 1) {
        i = 0

        return
      }

      i += 1
    }, 150)
  }

  stop() {
    clearInterval(this.interval)
    rl.cursorTo(process.stdout, ...this.position)
    console.log(' ')
  }
}
