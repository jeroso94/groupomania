
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
    return Media;
};
