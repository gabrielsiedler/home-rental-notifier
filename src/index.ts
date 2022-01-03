import dotenv from 'dotenv'
import './ui/App'

import { mongooseSetup } from './setup/db'
import { twilioSetup } from './setup/twilio'
import * as worker from './worker'

dotenv.config()

const start = async () => {
  await twilioSetup()
  await mongooseSetup()

  worker.start()
}

// start()

// const gather = async () => {
//   await mongooseSetup()

//   const entries = await Entry.find({ source: 'Olx' })

//   let ran = 0
//   let success = 0
//   let error = 0

//   entries.forEach((entry) => {
//     ran += entry.runs.length
//     success += entry.runs.filter((e) => e.status === 'found').length
//     error += entry.runs.filter((e) => e.status === 'error').length
//   })

//   ui({ source: 'Olx', ran, success, error })
// }

// gather()
