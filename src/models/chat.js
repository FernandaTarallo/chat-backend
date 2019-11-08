module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('Chat',{
        idUserOne: DataTypes.INTEGER,
        idUserTwo: DataTypes.INTEGER,
    });
    return Chat;
}