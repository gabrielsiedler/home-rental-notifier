class Console {
  entries: string[]

  constructor() {
    this.entries = []
  }

  addEntry(str) {
    const dt = new Date()

    const hours = dt.getHours()
    const minutes = dt.getMinutes()
    const seconds = dt.getSeconds()

    const newEntries = this.entries.slice(-4)

    this.entries = [...newEntries, `[${hours}:${minutes}:${seconds}] ${str}`]
  }
}

export default new Console()
