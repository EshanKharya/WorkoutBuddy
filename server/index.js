import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import { PORT, dbURL } from './config.js'
import workoutsRouter from './routes/workouts.js'

const app = express()

app.use(express.json())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/workouts', workoutsRouter)

app.get('/', (req, res) => {
    res.status(200).send("<h1>Welcome to the Server! </h1>")
})
mongoose.connect(dbURL)
.then(() => {
    console.log("Database Connected Successfully!")
    app.listen(PORT, () => {
        console.log(`Server running on PORT: ${PORT}`)
    })
})
.catch((err) => {
    console.log(`Couldn't connect to database.\nError: ${err.message}`)
})
