/* TODO --
[SECURITE]
    1/ ENVISAGER l'anonymisation OWASP#3 -  Lutter contre l'exposition des données sensibles
        a) module mongo-mask
*/


module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Medias', {
        title: { 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true
        },
        mediaUrl: { 
            type: DataTypes.TEXT, 
            allowNull: false
        },
        userId:{
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    });
    // Media.belongsTo(User);
    return Media;
};

//const uniqueValidator = require('mongoose-unique-validator');
// userSchema.plugin(uniqueValidator);

//const mongoMask = require('mongo-mask')