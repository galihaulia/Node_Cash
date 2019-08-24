'use strict';
module.exports = (sequelize, DataTypes) => {
  const nItem = sequelize.define('nItem', {
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  nItem.associate = function(models) {
    // associations can be defined here
  };
  return nItem;
};