//models
const {Chat} = require('../models')

exports.index = async(req, res) => {
    const chats = await Chat.findAll()
    res.json(chats)
}

exports.store = async(req, res) => {
    const chat = await Chat.create(req.body)
    res.json(chat)
}

exports.show = async(req, res) => {
    const chat = await Chat.findByPk(req.params.id)
    res.json(chat)
}

exports.delete = async(req, res) => {
    const chat = await Chat.findByPk(req.params.id)
    chat.destroy()
    res.json(chat)
}