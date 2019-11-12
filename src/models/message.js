module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message',{
        text: DataTypes.TEXT,
        idConversation: DataTypes.INTEGER,
    });
    return Message;
}