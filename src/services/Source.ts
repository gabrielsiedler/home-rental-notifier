import { Entry } from '../models/Entry'
import { RunStatus, SourceStatus } from '../ui/types'

export class Source {
  name: string
  runs: number
  found: number
  errors: number
  lastRunStatus: RunStatus
  status: SourceStatus

  currentFilter: {
    label: string
    index: number
  }
  totalFilters: number

  constructor(name) {
    this.name = name
    this.runs = 0
    this.found = 0
    this.errors = 0
    this.lastRunStatus = RunStatus.Unchanged
    this.status = SourceStatus.Waiting
    this.currentFilter = {
      label: '',
      index: 0,
    }
    this.totalFilters = 0
  }

  async setup() {
    const entries = await Entry.find({ source: this.name })

    this.totalFilters = entries.length

    entries.forEach((entry) => {
      this.runs += entry.total_runs

      this.found += entry.runs.filter((run) => run.status === 'found').length
      this.errors += entry.runs.filter((run) => run.status === 'error').length
      this.lastRunStatus = entry.runs.length ? entry.runs[entry.runs.length - 1]?.status : 'unchanged'
    })
  }
}
