/* TODO --
[SECURITE]
    1/ ENVISAGER l'anonymisation OWASP#3 -  Lutter contre l'exposition des données sensibles
        a) module mongo-mask
*/


module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comments', {
        comment: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        mediaId: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        userId:{
            type: DataTypes.STRING, 
            allowNull: false
        }
    });
    return Comment;
};

//const uniqueValidator = require('mongoose-unique-validator');
// userSchema.plugin(uniqueValidator);

//const mongoMask = require('mongo-mask')