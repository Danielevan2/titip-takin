const express = require('express')
const main = express.Router()
const Location = require('../models').Location
const Item = require('../models').Item

main.use(express.json())
main.use(express.urlencoded({ extended: true }))

main.get('/:id', (req, res) => {
  res.render('home', { id: req.params.id })
})
main.get('/item/:id', (req, res) => {
  Location.findAll()
    .then(data => {
      let random = Math.floor(Math.random() * (data.length - 1))
      const location = data[random].dataValues.name
      Item.findAll({
        where: {
          location,
        },
      })
        .then(data => {
          res.render('item', { data })
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})
main.post('/item/:id', (req, res) => {
  Location.findAll()
    .then(data => {
      let random = Math.floor(Math.random() * (data.length - 1))
      const location = data[random].dataValues.name
      Item.findAll({
        where: {
          location,
        },
      })
        .then(data => {
          res.render('item', { data })
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = main
