const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected')
})

module.exports = db