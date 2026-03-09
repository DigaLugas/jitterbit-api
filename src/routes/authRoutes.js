const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Gera um token JWT
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: admin
 *               senha:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Token gerado com sucesso
 *       401:
 *         description: Usuário ou senha inválidos ou token não enviado/inválido
 */
//rota de login para obter o token JWT
router.post('/login', authController.login);

module.exports = router;