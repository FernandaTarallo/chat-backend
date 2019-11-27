//models
const { Conversation, Message } = require('../models')
const Sequelize = require('Sequelize')
const Op = Sequelize.Op;

exports.index = async(req, res) => {

    const conversations = await Conversation.findAll({
        where: {
            [Op.or]: [{idUserOne: req.userId}, {idUserTwo: req.userId}]
        }
    })

    res.json(conversations)

}

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
