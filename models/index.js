const Favorites  = require("./Favorites");
const User = require("./User");


    User.hasMany(Favorites, {
        foreignKey: 'user_id',
        onDelete: 'CASACADE'
    });

    Favorites.belongsTo(User, {
        foreignKey: 'user_id'
    });

    module.exports = { User, Favorites }