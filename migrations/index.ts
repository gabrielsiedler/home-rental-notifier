import { mongoMigrateCli } from 'mongo-migrate-ts'
import dotenv from 'dotenv'

dotenv.config()

mongoMigrateCli({
  uri: process.env.MONGODB_URI,
  database: 'test',
  migrationsDir: __dirname,
  migrationsCollection: 'migrations_collection',
  options: {
    useUnifiedTopology: true,
  },
} as any)
