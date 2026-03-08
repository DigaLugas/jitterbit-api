const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const validarPedido = require('../middlewares/validarPedido');

router.post('/', validarPedido, orderController.criar);
router.get('/list', orderController.listar);
router.get('/:id', orderController.buscar);
router.put('/:id', validarPedido, orderController.atualizar);
router.delete('/:id', orderController.deletar);

module.exports = router;