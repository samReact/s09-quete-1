"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};
