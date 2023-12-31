import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()

// middlewares - express js
app.use(cors())
app.use(express.json())
app.use(express.text())


app.get('/', (req, res) => {
  res.send('server is running!')
})

export default app
