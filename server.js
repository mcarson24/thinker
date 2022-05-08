import express from 'express'
import routes from './routes/index.js'

const PORT = process.env.PORT || 3001
const app = express()

app.use(routes)

app.listen(PORT, () => console.log(`Currently listening at http://localhost:${PORT}/`))