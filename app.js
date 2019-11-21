const express = require('express')
const app = express()
const port = 4001
const session = require('express-session')

const helpPass = require('./helpers/createPassword')
const login = require('./router')
const main = require('./router/main')
const transaksi = require('./router/transaction')

app.use('/public', express.static('public'))
app.set('view engine', 'ejs')

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
)

app.locals.creatPass = helpPass

app.use('/', login)
app.use('/home', main)
app.use('/transaksi', transaksi)

app.listen(port, function() {
  console.log(`run on port ===========> ${port}`)
})
