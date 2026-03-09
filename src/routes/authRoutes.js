const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//rota de login para obter o token JWT
router.post('/login', authController.login);

module.exports = router;