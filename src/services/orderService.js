const orderRepository = require('../repositories/orderRepository');

//faz o mapeamento do JSON da requisição para o formato do banco
const mapearParaBanco = (body) => {
  return {
    orderId: body.numeroPedido,
    value: body.valorTotal,
    creationDate: new Date(body.dataCriacao),
    items: body.items.map(item => ({
      productId: parseInt(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
};

//cria um novo pedido depois de mapear os dados recebidos
const criar = async (body) => {
  const data = mapearParaBanco(body);
  return await orderRepository.criar(data);
};

//busca um pedido por id e lança erro se não encontrado
const buscar = async (orderId) => {
  const pedido = await orderRepository.buscar(orderId);

  if (!pedido) {
    throw new Error('Pedido não encontrado');
  }

  return pedido;
};

//listar todos os pedidos
const listar = async () => {
  return await orderRepository.listar();
};

//atualiza um pedido existente depois de mapear os dados
const atualizar = async (orderId, body) => {
  const pedido = await orderRepository.buscar(orderId);

  if (!pedido) {
    throw new Error('Pedido não encontrado');
  }

  const data = mapearParaBanco(body);
  return await orderRepository.atualizar(orderId, data);
};

//remove um pedido por id e lança erro se não encontrado
const deletar = async (orderId) => {
  const pedido = await orderRepository.buscar(orderId);

  if (!pedido) {
    throw new Error('Pedido não encontrado');
  }

  return await orderRepository.deletar(orderId);
};

module.exports = { criar, buscar, listar, atualizar, deletar };