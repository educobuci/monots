import express from 'express'
import cors from 'cors'
import { MyUseCase } from '@monots/use-cases'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  const name = req.query['name']
  const message = (new MyUseCase()).hello(name)
  res.send(message)
})

export { app }