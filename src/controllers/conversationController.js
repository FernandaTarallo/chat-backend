//models
const { Conversation, Message, User } = require('../models')
const Sequelize = require('Sequelize')
const Op = Sequelize.Op;

exports.index = (req, res) => {

    Conversation.findAll({
        include: {
            model: Message,
            required: true
        },
        where: {
            [Op.or]: [{idUserOne: req.userId}, {idUserTwo: req.userId}]
        },
        order: [
            [Message, 'createdAt', 'desc']
        ]
    }).then(conversations => {
        res.json(conversations)
    })      
}

exports.search = (req, res) => {

    Conversation.findAll({
        include: {
            model: User,
            required: true
        },
        where: {
            c: { [Op.like]:'%' + req.search + '%' },
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
