//models
const { User } = require('../models')

exports.index = async(req, res) => {
    const users = await User.findAll()
    res.json(users)
}

exports.store = async(req, res) => {
    try{
        console.log(req.body)
        const user = await User.create(req.body)
        res.json(user)
    }
    catch(error){
        console.log(error)
    }
}

exports.show = async(req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json(user)
}

exports.update = async(req, res) => {
    const user = await User.findByPk(req.params.id)
    user.update(req.body)
    res.json(user)
}

exports.delete = async(req, res) => {
    const user = await User.findByPk(req.params.id)
    user.destroy()
    res.json(user)
}