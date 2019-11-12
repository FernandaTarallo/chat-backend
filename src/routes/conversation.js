const express = require('express')
const router = express.Router()

//controllers
const conversationController = require('../controllers/conversationController');

//Rotas 

router.get('/:id', conversationController.show); //Buscar

module.exports = router