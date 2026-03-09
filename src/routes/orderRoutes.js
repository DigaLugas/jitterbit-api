const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const validarPedido = require('../middlewares/validarPedidos');

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *                 example: v10089015vdb-01
 *               valorTotal:
 *                 type: number
 *                 example: 10000
 *               dataCriacao:
 *                 type: string
 *                 example: "2023-07-19T12:24:11.5299601+00:00"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                       example: "2434"
 *                     quantidadeItem:
 *                       type: integer
 *                       example: 1
 *                     valorItem:
 *                       type: number
 *                       example: 1000
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Campos obrigatórios faltando
 *       401:
 *         description: Token inválido ou não enviado
 */
router.post('/', validarPedido, orderController.criar);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Lista todos os pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 *       401:
 *         description: Token inválido ou não enviado
 */
router.get('/list', orderController.listar);

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Busca um pedido pelo ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb-01
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 *       401:
 *         description: Token inválido ou não enviado
 */
router.get('/:id', orderController.buscar);

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualiza um pedido pelo ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb-01
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *               valorTotal:
 *                 type: number
 *               dataCriacao:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       401:
 *         description: Token inválido ou não enviado
 */
router.put('/:id', validarPedido, orderController.atualizar);

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Deleta um pedido pelo ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: v10089015vdb-01
 *     responses:
 *       200:
 *         description: Pedido deletado com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       401:
 *         description: Token inválido ou não enviado
 */
router.delete('/:id', orderController.deletar);

module.exports = router;