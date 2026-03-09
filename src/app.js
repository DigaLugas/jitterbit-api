const express = require('express');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./middlewares/erroHandler');
const auth = require('./middlewares/auth');

const app = express();

app.use(cors());
app.use(express.json());

//rotas públicas
app.use('/auth', require('./routes/authRoutes')); //rota de autenticação

//rotas protegidas por autenticação JWT
app.use('/order', auth ,orderRoutes);

//tratamento de erros global
app.use(errorHandler);

module.exports = app;