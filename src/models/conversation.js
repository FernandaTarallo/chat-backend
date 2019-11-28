module.exports = (sequelize, DataTypes) => {
    const Conversation = sequelize.define('Conversation',{
        idUserOne: DataTypes.INTEGER,
        idUserTwo: DataTypes.INTEGER,
    });

    Conversation.associate = (models) => {
        
        const { Message } = models

        Conversation.hasMany(Message, {foreignKey: 'idConversation'})

    }

    return Conversation;
}