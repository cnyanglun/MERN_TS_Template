import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(express.static(__dirname + '/../client/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

export default app
