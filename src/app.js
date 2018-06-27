/* eslint-disable no-unused-vars */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// connect to mongoose
mongoose.connect('mongodb://localhost/tunani')
mongoose.Promise = global.Promise

//  Connect all our routes to our application
app.use('/api', require('../routes'))

// error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).json({error: err.message})
})

app.listen(process.env.PORT || 8082)
