const express = require('express')
const route = express.Router()

route.get('/:itemId', (req, res) => {
  res.send(req.session)
  // res.redirect('/home/item/:1')
})

module.exports = route
