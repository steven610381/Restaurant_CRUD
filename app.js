const express = require('express')
const app = express()
const exhbs = require('express-handlebars')
const mongoose = require('mongoose')
const db = mongoose.connection


mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
  res.send('aaaaaa')
})

app.listen(3000, () => {
  console.log('APP is running on http://localhost:3000')
})

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected')
})