import { ConnectionOptions } from 'typeorm'
import * as PostgressConnectionStringParser from 'pg-connection-string'

const postgressConnectionOptions = PostgressConnectionStringParser.parse(
  process.env.DATABASE_URL || ''
)

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: ['entities/**/*.*'],
  host: postgressConnectionOptions.host || 'localhost',
  port: postgressConnectionOptions.port || 5432,
  username: postgressConnectionOptions.user || 'genie',
  password: postgressConnectionOptions.password || '',
  database: postgressConnectionOptions.database || 'oasis'
}

export default connectionOptions
