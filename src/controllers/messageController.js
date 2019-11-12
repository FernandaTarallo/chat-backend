//models
const {Message, Conversation} = require('../models')
const Sequelize = require('Sequelize')
const Op = Sequelize.Op;

exports.index = async(req, res) => {
    const messages = await Message.findAll()
    res.json(messages)
}

exports.store = async(req, res) => {
    const conversation = await Conversation.findOrCreate({

        where: {
            idUserOne: {
              [Op.or]: [req.body.idUserOne, req.body.idUserTwo]
            },
            idUserTwo: {
              [Op.or]: [req.body.idUserOne, req.body.idUserTwo]
            }
        },
        defaults: {
            idUserOne: req.body.idUserOne,
            idUserTwo: req.body.idUserTwo
        }
    })

    const message = await Message.create({
        text: req.body.text,
        idConversation: conversation[0].id
    })

    res.json(message)
}

exports.delete = async(req, res) => {
    const message = await Message.findByPk(req.params.id)
    message.destroy()
    res.json(message)
}