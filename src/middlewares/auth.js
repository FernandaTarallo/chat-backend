const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        return res.status(401).send({'message': 'Token não enviado'})
    }

    const parts = authHeader.split(' ')

    if(!parts.length === 2) {
        return res.status(401).send({'message': 'Erro de token'})
    }

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({'message': 'Token mal formatado'}) 
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) {
            return res.status(401).send({'message': 'Token inválido'}) 
        }

        req.userId = decoded.userId
        return next()
    })

}