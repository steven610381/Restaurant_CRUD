const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const List = require('./models/list')
const methodOverride = require('method-override')
const routes = require('./routes')

require('./config/mongoose')

app.listen(port, () => {
  console.log('APP is running on http://localhost:3000')
})

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))

app.use(methodOverride('_method'))

app.use(routes)

app.set('view engine', 'hbs')

app.use(express.static('public'))









