'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  const models = sequelize.models // untuk model lain


  class Item extends Model {}
  Item.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    { sequelize }
  )
  Item.associate = function(models) {
    // associations can be defined here
  }
  return Item
}
