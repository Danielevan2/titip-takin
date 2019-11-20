'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_item = sequelize.define('user_item', {
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {});
  user_item.associate = function(models) {
    // associations can be defined here
  };
  return user_item;
};