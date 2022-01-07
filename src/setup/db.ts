const mongoose = require('mongoose')

export const mongooseSetup = (addToConsole) =>
  // new Promise((resolve, reject) => {
  // mongoose.connect(process.env.MONGODB_URI, (err) => {
  //   if (err) {
  //     addToConsole('Error: Could not connect to Mongo.')

  //     return reject(err)
  //   }

  //   addToConsole('Connected to Mongo.')
  //   resolve(true)
  // })
  mongoose.connect(process.env.MONGODB_URI)
// })

export { mongoose }
