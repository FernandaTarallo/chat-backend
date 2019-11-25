//models
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')
const { User } = require('../models')

exports.index = async(req, res) => {
    const users = await User.findAll()
    res.json(users)
}

exports.store = async(req, res) => {
    try{
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        })
        
        res.status(200).send({
            user,
            token: generateToken({id: user.id})
        })
        
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

exports.authenticate = async(req, res) => {

    const user = await User.findOne({ where: {email: req.body.email} })

    if(!user) {
        return res.status(404).send({'message': 'Usuário não encontrado!' })
    }

    if(! await bcrypt.compare(req.body.password, user.password)) {
        return res.status(401).send({'message': 'Senha incorreta!' })
    }

    user.password = undefined

    res.status(200).send({
        user,
        token: generateToken({id: user.id})
    })
}

exports.authUser = async(req, res) => {
    res.send({user: req.userId})
}

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}