const dotenv = require('dotenv')

dotenv.config()

const config = {
  mongodb: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017',

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
    },
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.ts',
  useFileHash: false,
}

module.exports = config
