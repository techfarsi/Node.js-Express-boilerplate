require('dotenv').config()
import express from 'express'
import router from './routes/router'
import dbInit from './db'
const app = express()

// Init database
dbInit()

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

try {
  app.listen(process.env.PORT, () => {
    return console.log(`App is listening at http://localhost:${process.env.PORT}`)
  })
} catch (error) {
  console.log(`Error occurred: ${error.message}`)
}
