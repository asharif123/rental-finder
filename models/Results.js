const { Model , DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Results extends Model {}
Results.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,        
      },
      monthly_rate: {
        type: DataTypes.INTEGER
      },
      image: {
        type: DataTypes.STRING,
      },    
      gallery: {
        type: DataTypes.JSON,
      }, 
   },
   {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'results',
  } 
);

module.exports = Results;