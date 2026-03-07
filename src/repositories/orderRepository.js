const prisma = require('../prisma');

//cria um novo pedido no banco junto com seus itens
const criar = async (data) => {
  return await prisma.order.create({
    data: {
      orderId: data.orderId,
      value: data.value,
      creationDate: data.creationDate,
      items: {
        create: data.items.map(item => ({ //cria cada item vinculado ao pedido
          productId: item.productId,
          quantity: item.quantity,
          price: item.price
        }))
      }
    },
    include: { items: true } //retorna o pedido já com os itens
  });
};

//busca um pedido pelo seu ID com os itens
const buscar = async (orderId) => {
  return await prisma.order.findUnique({
    where: { orderId },
    include: { items: true }
  });
};

//retorna todos os pedidos cadastrados e seus itens
const listar = async () => {
  return await prisma.order.findMany({
    include: { items: true }
  });
};

//atualiza um pedido existente e recria os itens do zero
const atualizar = async (orderId, data) => {
  return await prisma.order.update({
    where: { orderId },
    data: {
      value: data.value,
      creationDate: data.creationDate,
      items: {
        deleteMany: {}, //remove os itens antigos antes de recriar
        create: data.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price
        }))
      }
    },
    include: { items: true }
  });
};

//remove um pedido e seus itens
const deletar = async (orderId) => {
  return await prisma.order.delete({
    where: { orderId }
  });
};

module.exports = { criar, buscar, listar, atualizar, deletar };