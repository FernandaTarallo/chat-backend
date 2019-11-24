const express = require('express')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.use(authMiddleware)

//controllers
const conversationController = require('../controllers/conversationController');

//Rotas 

router.get('/:id', conversationController.show); //Buscar

module.exports = router