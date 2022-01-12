const { Model , DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Results extends Model {}
Results.init(
    {
        listing: 
        {
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