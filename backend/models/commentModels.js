
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
    return Comment;
};
