import express from 'express'
import db from './config/db.js'
import routes from './routes/index.js'

const PORT = process.env.PORT || 3001
const app = express()

app.use(routes)


db.once('open', () => {
  app.listen(PORT, () => console.log(`Currently listening at http://localhost:${PORT}/`))
})