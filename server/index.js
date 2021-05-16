import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())

const { DB_URL, PORT } = process.env
mongoose.connect(DB_URL, {useNewUrlParser : true, useUnifiedTopology : true}, () => {
  app.listen(PORT, () => {
    console.log(`Server Started on Port : ${PORT}`)
  })
})