const express = require('express')
const main = express.Router()
const Location = require('../models').Location
const Item = require('../models').Item

main.use(function(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/')
  }
})

main.use(express.json())
main.use(express.urlencoded({ extended: true }))

main.get('/list', (req, res) => {
  Item.findAll({
    where: {
      location: req.query.location,
    },
  })
    .then(data => {
      res.render('item', {
        data: data,
        userId: req.query.userId,
        location: req.query.location,
      })
    })
    .catch(err => {
      console.log(err)
    })
})
main.get('/item/:id', (req, res) => {
  Location.findAll()
    .then(data => {
      let random = Math.round(Math.random() * (data.length - 1))
      const location = data[random].dataValues.name
      res.redirect(`/home/list?userId=${req.params.id}&location=${location}`)
    })
    .catch(err => {
      console.log(err)
    })
})

main.get('/:id', (req, res) => {
  res.render('home', { id: req.params.id })
})
module.exports = main
