const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const validarPedido = require('../middlewares/validarPedidos');

//rotas de pedidos
router.post('/', validarPedido, orderController.criar); //cria um novo pedido
router.get('/list', orderController.listar); //lista todos os pedidos
router.get('/:id', orderController.buscar); //busca um pedido específico por id
router.put('/:id', validarPedido, orderController.atualizar); //atualiza um pedido existente por id
router.delete('/:id', orderController.deletar); //deleta um pedido por id

module.exports = router;