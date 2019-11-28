//models
const { Conversation, Message, User } = require('../models')
const Sequelize = require('Sequelize')
const Op = Sequelize.Op;

exports.index = (req, res) => {

    let users = []

    Conversation.findAll({
        where: {
            [Op.or]: [{idUserOne: req.userId}, {idUserTwo: req.userId}]
        },
    }).then(conversations => {
        res.json(conversations)
    })      
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
