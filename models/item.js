'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  const models = sequelize.models // untuk model lain

  class Item extends Model {
    get plusTakin() {
      return 'ayo Titip ' + this.name + ' sama Takin'
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    { sequelize }
  )
  Item.associate = function(models) {
    Item.belongsToMany(models.User, { through: models.user_item })
  }
  return Item
}
