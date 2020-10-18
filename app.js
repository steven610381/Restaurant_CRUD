const express = require('express')
const app = express()
const exhbs = require('express-handlebars')
const mongoose = require('mongoose')
const db = mongoose.connection
const exhpbs=require('express-handlebars')
const bodyParser=require('body-parser')

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('APP is running on http://localhost:3000')
})

app.engine('hbs',exhbs({defaultLayout:'main',extname:'hbs'}))

app.set('view engine','hbs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}))

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected')
})