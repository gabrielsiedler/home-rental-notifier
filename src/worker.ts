import { Worker } from './services/Worker'

export const start = async (uiObj) => {
  try {
    Object.keys(uiObj).forEach((uiKey) => {
      const currentWorker = new Worker(uiKey, uiObj[uiKey])

      currentWorker.start()
    })
  } catch (err) {
    console.log('Could not create worker => ', err)
  }
}
