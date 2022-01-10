import { mongooseSetup } from './db'
import sources, { setupSources } from './sources'
import { twilioSetup } from './twilio'

export const setupAll = async () => {
  await twilioSetup()
  await mongooseSetup()
  await setupSources()

  const maxListeners = Object.keys(sources).length

  console.log('Setting max listeners to', maxListeners)
  process.setMaxListeners(maxListeners)
}
