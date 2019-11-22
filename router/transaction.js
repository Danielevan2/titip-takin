const express = require('express')
const route = express.Router()
const userItem = require('../models').user_item
const user = require('../models').User
const item = require('../models').Item

route.get('/add', (req, res) => {
  userItem
    .create({
      UserId: Number(req.query.userId),
      ItemId: Number(req.query.itemId),
    })
    .then(() => {
      res.redirect(
        `/home/list?userId=${req.query.userId}&location=${req.query.lokasi}`
      )
    })
    .catch(err => {
      console.log(err)
    })
})
route.get('/list', (req, res) => {
  user
    .findByPk(req.session.user.id, { include: [item] })
    .then(data => {
      res.render('listItem', { user: data })
    })
    .catch(err => {
      console.log(err)
    })
})
route.get('/delete', (req, res) => {
  userItem
    .destroy({
      where: {
        UserId: req.session.user.id,
        ItemId: req.query.ItemId,
      },
    })
    .then(data => {
      res.redirect('/transaksi/list')
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = route
