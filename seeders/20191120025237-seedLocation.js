'use strict'
const fs = require('fs')

let readData = fs.readFileSync('./location.csv', 'utf8').split('\n')
let result = []
for (let i = 1; i < readData.length; i++) {
  let temp = readData[i].split(',')
  let obj = {
    name: temp[1],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  result.push(obj)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', result, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {})
  },
}
