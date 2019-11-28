//models
const {Message, Conversation} = require('../models')
const Sequelize = require('Sequelize')
const Op = Sequelize.Op;

exports.index = async(req, res) => {

    const conversation = await Conversation.findByPk(req.params.id)

    Message.findAll({
        where: {idConversation: conversation.id},
    }).then((messages) => {
        res.json(messages)
    })
    
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
        sendFrom: req.body.sendFrom,
        idConversation: conversation[0].id
    })

    //Pegando o socket do remetente e do destinatario
    let destinationOne = clients.find(client => client.id == req.body.idUserOne)
    let destinationTwo = clients.find(client => client.id == req.body.idUserTwo)

    //Enviando a mensagem para os dois
    io.to(destinationOne.socket).emit('new-message', message)
    io.to(destinationTwo.socket).emit('new-message', message)

    res.json(message)
}

exports.delete = async(req, res) => {
    const message = await Message.findByPk(req.params.id)
    message.destroy()
    res.json(message)
}