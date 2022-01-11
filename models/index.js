// const Rental  = require("./Rental");
const User = require("./User");
const Favorites = require("./Favorites");
const Search = require("./Searches");


    User.hasMany(Favorites, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    });

    Favorites.belongsTo(User, {
        foreignKey: 'user_id'  

    });

    User.hasMany(Search, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    });

    Search.belongsTo(User, {
        foreignKey: 'user_id'  

    });

module.exports ={ User, Favorites, Search }; 