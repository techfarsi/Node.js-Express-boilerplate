import { Dialect, Sequelize } from 'sequelize'

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbPort = parseInt(process.env.DB_PORT) as number
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD
const dbLogging = process.env.DB_LOGGING === 'true'

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: dbDriver,
  logging: dbLogging,
})

export default sequelizeConnection
