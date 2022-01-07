const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Searches extends Model {}

Searches.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minimum_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maximum_budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "searches",
  }
);

module.exports = Searches;