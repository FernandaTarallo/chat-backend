const express = require('express')
const router = express.Router()

//controllers
const userController = require('../controllers/userController');

router.get('/', userController.index ); //Listar todos
router.post('/', userController.store); // Criar
router.get('/:id', userController.show); //Buscar
router.put('/:id', userController.update); //Editar
router.delete('/:id', userController.delete); //Deletar

module.exports = router