const db = require('../../config/mongoose')
const list = require('../list')
const restaurants = require('./restaurants.json')

db.once('open', () => {
  list.insertMany(restaurants.results)
  console.log('db connected')
})