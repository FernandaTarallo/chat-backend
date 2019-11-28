const {Conversation} = require('../models')

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message',{
        text: DataTypes.TEXT,
        idConversation: DataTypes.INTEGER,
        sendFrom: DataTypes.INTEGER,
    });

    return Message;
}