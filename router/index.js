const express = require('express')
const login = express.Router()
const model = require('../models').User
login.use(express.json())
login.use(express.urlencoded({ extended: true }))

//sign in
login.get('/', (req, res) => {
  res.render('index')
})
login.post('/', (req, res) => {
  model
    .findOne({
      where: {
        first_name: req.body.first_name,
      },
    })
    .then(data => {
      if (!data) {
        res.send('tidak ditemukan')
      } else {
        res.send(data)
        req.session.user = {}
      }
    })
    .catch(err => {
      console.log(err)
    })
})
//register
login.get('/register', (req, res) => {
  res.render('register')
})

module.exports = login
