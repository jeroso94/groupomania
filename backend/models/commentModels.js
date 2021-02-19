/* TODO --
[SECURITE]
    1/ ENVISAGER l'anonymisation OWASP#3 -  Lutter contre l'exposition des données sensibles
        a) module mongo-mask
*/


module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comments', {
        comment: { 
            type: DataTypes.TEXT, 
            allowNull: false
        },
        mediaId: { 
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        userId:{
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    });
    // Comment.BelongsTo(Media);
    // Comment.BelongsTo(User);
    return Comment;
};

//const uniqueValidator = require('mongoose-unique-validator');
// userSchema.plugin(uniqueValidator);

//const mongoMask = require('mongo-mask')