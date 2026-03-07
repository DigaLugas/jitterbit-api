const express = require('express');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./middlewares/erroHandler');

const app = express();

app.use(cors());
app.use(express.json());

//rotas
app.use('/order', orderRoutes);

//tratamento de erros global
app.use(errorHandler);

module.exports = app;