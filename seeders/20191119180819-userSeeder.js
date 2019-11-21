'use strict'
const fs = require('fs')
const bcrypt = require('bcrypt')
function creatPass(pass) {
  const saltRounds = 10
  const myPlaintextPassword = pass
  const someOtherPlaintextPassword = 'not_bacon'

  var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
  return hash
}

let readData = fs.readFileSync('./user.csv', 'utf8').split('\n')
let result = []
for (let i = 1; i < readData.length; i++) {
  let temp = readData[i].split(',')
  let obj = {
    first_name: temp[1],
    last_name: temp[2],
    email: temp[3],
    phone_number: temp[4],
    password: creatPass(temp[5]),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  result.push(obj)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', result, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
