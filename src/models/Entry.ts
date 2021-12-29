import { mongoose } from '../db'

const schema = {
  filter: String,
  last_id: String,
}

export const Entry = mongoose.model('entry', schema)
