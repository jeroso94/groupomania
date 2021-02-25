
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        email: { 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true
        },
        password: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        admin:  {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return User;
};
