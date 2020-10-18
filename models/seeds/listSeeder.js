const mongoose = require('mongoose')
const db = mongoose.connection
const list=require('../list')
const restaurant=require('./restaurant.json ')
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected')
  list.insertMany(restaurant.results)
})