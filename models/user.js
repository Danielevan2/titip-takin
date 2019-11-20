'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.INTEGER,
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
