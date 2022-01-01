import { Schema } from 'mongoose'
import { mongoose } from '../setup/db'

const schema = new Schema<any>({
  source: String,
  filter: {
    label: String,
    value: String,
  },
  total_runs: Number,
  runs: [
    {
      entry_id: String,
      ranAt: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ['failed', 'found', 'unchanged'],
      },
    },
  ],
})

schema.statics.containsHouseId = async function (source: string, filter: any, houseId: string) {
  let entry = await this.findOne({ source, 'filter.value': filter.value })

  if (!entry || !entry.runs) {
    entry = await this.create({ source, filter, total_runs: 0, runs: [] })
  }

  return entry.runs.some((run) => run.entry_id === houseId)
}

schema.statics.createRun = async function (source: string, filter: any, houseId: string, status: string) {
  const dbObject = {
    entry_id: houseId,
    status: status,
  }

  return await Entry.updateOne(
    { source, 'filter.value': filter.value },
    { $push: { runs: dbObject }, $inc: { total_runs: 1 } },
    { upsert: true },
  )
}

export const Entry = mongoose.model('entry', schema)
