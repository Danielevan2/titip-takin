'use strict'
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: instance => {
          const saltRounds = 10
          const myPlaintextPassword = instance.password
          const someOtherPlaintextPassword = 'not_bacon'

          var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)

          instance.password = hash
        },
      },
    }
  )
  User.associate = function(models) {
    User.belongsToMany(models.Item, { through: models.user_item })
  }
  return User
}
