/* TODO --
[SECURITE]
    1/ ENVISAGER l'anonymisation OWASP#3 -  Lutter contre l'exposition des données sensibles
        a) module mongo-mask
*/

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false }
    });
    return User;
};

//const uniqueValidator = require('mongoose-unique-validator');
// userSchema.plugin(uniqueValidator);

//const mongoMask = require('mongo-mask')