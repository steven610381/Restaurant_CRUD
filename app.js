const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const db = mongoose.connection
const bodyParser = require('body-parser')
const List = require('./models/list')

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(port, () => {
  console.log('APP is running on http://localhost:3000')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected')
})

app.get('/', (req, res) => {
  List.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

app.get('/restaurants/create', (req, res) => {
  return res.render('create')
})

app.post('/restaurants', (req, res) => {
  const restaurant = req.body
  console.log(req.body)
  return List.create(restaurant)     
    .then(() => res.redirect('/')) 
    .catch(error => console.log(error))
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  console.log(req.params)
  const id = req.params.restaurant_id
  return List.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})