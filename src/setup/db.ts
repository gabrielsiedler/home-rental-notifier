const mongoose = require('mongoose')

export const mongooseSetup = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGODB_URI, (err) => {
      if (err) {
        console.error('Error: Could not connect to Mongo.')

        return reject(err)
      }

      console.log('Connected to Mongo.')
      resolve(true)
    })
  })

export { mongoose }
