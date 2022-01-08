const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Favorites extends Model {}
Favorites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    listing: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites',

    } 
);
module.exports = Favorites;