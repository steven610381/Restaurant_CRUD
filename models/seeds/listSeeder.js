const mongoose = require('mongoose')
const db = mongoose.connection
const list = require('../list')
const restaurants = require('./restaurants.json')
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  list.insertMany(restaurants.results)
  console.log('db connected')
})