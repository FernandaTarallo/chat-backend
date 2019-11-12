const express = require('express')
const router = express.Router()

//controllers
const messageController = require('../controllers/messageController');

//Rotas 
router.get('/', messageController.index ); //Listar todos
router.post('/', messageController.store); // Criar
// router.get('/:id', messageController.show); //Buscar
router.delete('/:id', messageController.delete); //Deletar

module.exports = router