const orderService = require('../services/orderService');

//cria um novo pedido
const criar = async (req, res) => {
  try {
    const pedido = await orderService.criar(req.body);
    return res.status(201).json(pedido);
  } catch (error) {
    return res.status(500).json({ erro: error.message });
  }
};

//busca um pedido pelo id passado na URL
const buscar = async (req, res) => {
  try {
    const pedido = await orderService.buscar(req.params.id);
    return res.status(200).json(pedido);
  } catch (error) {
    if (error.message === 'Pedido não encontrado') {
      return res.status(404).json({ erro: error.message });
    }
    return res.status(500).json({ erro: error.message });
  }
};

//lista todos pedidos
const listar = async (req, res) => {
  try {
    const pedidos = await orderService.listar();
    return res.status(200).json(pedidos);
  } catch (error) {
    return res.status(500).json({ erro: error.message });
  }
};

//atualiza um pedido pelo id passado na URL
const atualizar = async (req, res) => {
  try {
    const pedido = await orderService.atualizar(req.params.id, req.body);
    return res.status(200).json(pedido);
  } catch (error) {
    if (error.message === 'Pedido não encontrado') {
      return res.status(404).json({ erro: error.message });
    }
    return res.status(500).json({ erro: error.message });
  }
};

//remove um pedido pelo id passado na URL
const deletar = async (req, res) => {
  try {
    await orderService.deletar(req.params.id);
    return res.status(200).json({ mensagem: 'Pedido deletado com sucesso' });
  } catch (error) {
    if (error.message === 'Pedido não encontrado') {
      return res.status(404).json({ erro: error.message });
    }
    return res.status(500).json({ erro: error.message });
  }
};

module.exports = { criar, buscar, listar, atualizar, deletar };