//models
const { Conversation, Message } = require('../models')

exports.show = async(req, res) => {
    const conversation = await Conversation.findByPk(req.params.id)
    if(!conversation){
        res.status(404).json('Conversa não encontrada.')
    }
    const messages = await Message.findAll({
        where: {
            idConversation: conversation.id
        }
    })
    res.json(messages)
}
