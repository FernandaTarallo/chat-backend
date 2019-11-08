const express = require('express')
const router = express.Router()

//controllers
const chatController = require('../controllers/chatController')

//Rotas 
router.get('/', chatController.index); //Listar todos
router.post('/', chatController.store); //Criar
router.get('/:id', chatController.show); //Buscar
router.delete('/:id', chatController.delete); //Deletar

module.exports = router