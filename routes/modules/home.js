const express = require('express')
const router = express.Router()
const List = require('../../models/list')

router.get('/', (req, res) => {
  List.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants, css: ['index'] }))
    .catch(error => console.log(error))
})

router.get('/search', (req, res) => {
  const keyword = req.query.keyword

  List.find()
    .lean()
    .then(items => {
      return items.filter(restaurants => restaurants.name.toLowerCase().includes(keyword.toLowerCase()))
    })
    .then(restaurants => res.render('index', { restaurants, keyword }))
})

module.exports = router