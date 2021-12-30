const mongoose = require('mongoose')

export const mongooseSetup = () => {
  mongoose.connect(process.env.MONGODB_URI)
}

export { mongoose }
