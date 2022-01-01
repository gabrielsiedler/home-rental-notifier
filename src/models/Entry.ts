import { Schema } from 'mongoose'
import { mongoose } from '../setup/db'

const schema = new Schema<any>({
  source: String,
  filter: String,
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

schema.statics.containsHouseId = async function (source: string, filter: string, houseId: string) {
  const entry = await this.findOne({ source, filter })

  return entry.runs.some((run) => run.entry_id === houseId)
}

schema.statics.createRun = async function (source: string, filter: string, houseId: string, status: string) {
  const dbObject = {
    entry_id: houseId,
    status: status,
  }

  return await Entry.updateOne({ source, filter }, { $push: { runs: dbObject } }, { upsert: true })
}

export const Entry = mongoose.model('entry', schema)
