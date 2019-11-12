module.exports = (sequelize, DataTypes) => {
    const Conversation = sequelize.define('Conversation',{
        idUserOne: DataTypes.INTEGER,
        idUserTwo: DataTypes.INTEGER,
    });
    return Conversation;
}