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
        req.session.user = {
          id: data.dataValues.id,
          first_name: data.dataValues.first_name,
        }
        res.redirect(`/home/${data.dataValues.id}`)
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

login.post('/register', (req, res) => {
  console.log(req.body)
  model
    .create(req.body)
    .then(model => {
      res.redirect('/')
    })
    .catch(err => {
      console.log(err)
    })
})

//update
login.get('/update', (req, res) => {
  model
    .findOne({
      where: {
        id: req.session.user.id,
      },
    })
    .then(data => {
      res.render('update')
    })
    .catch(err => {
      console.log(err)
    })
})
module.exports = login
