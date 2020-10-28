const express = require('express')
const router = express.Router()
const List = require('../../models/list')


router.get('/create', (req, res) => {
  return res.render('create')
})


router.post('/', (req, res) => {
  const restaurant = req.body
  return List.create(restaurant)
    // .then(restaurants => res.render('index', { restaurants }))
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//route of reading
router.get('/:restaurant_id', (req, res) => {
  // console.log(req.params)
  const id = req.params.restaurant_id
  return List.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant, css: ['show'] }))
    .catch(error => console.log(error))
})

//route of editing
router.get('/:restaurant_id/edit', (req, res) => {
  const id = req.params.restaurant_id
  return List.findById(id)
    .lean()
    .then((restaurant) =>
      res.render('edit', { restaurant, css: ['use_category'], js: ['use_category'] }))
    .catch(error => console.log(error))
})

router.put('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  console.log(req.body, 'req')
  return List.findById(id)
    .then(restaurant => {
      // console.log('restaurant', restaurant)
      restaurant = Object.assign(restaurant, req.body)
      //req.body收到的內容格式與restaurant不同，所以用Object.assign覆蓋內容
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

router.delete("/:restaurant_id", (req, res) => {
  const id = req.params.restaurant_id
  return List.findById(id)
    .then(restaurants => restaurants.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router