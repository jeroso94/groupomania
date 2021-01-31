/* TODO --
[SECURITE]
    1/ ENVISAGER l'anonymisation OWASP#3 -  Lutter contre l'exposition des données sensibles
        a) module mongo-mask
*/


module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Medias', {
        title: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        mediaUrl: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        userId:{
            type: DataTypes.STRING, 
            allowNull: false
        }
    });
    return Media;
};

//const uniqueValidator = require('mongoose-unique-validator');
// userSchema.plugin(uniqueValidator);

//const mongoMask = require('mongo-mask')