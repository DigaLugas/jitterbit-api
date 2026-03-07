//valida campos obrigatórios para criação e atualização de pedidos
const validarPedidos = (req, res, next) => {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;
    if (!numeroPedido) {
        return res.status(400).json({ erro: 'Campo numeroPedido é obrigatório' });
    }
    if (!valorTotal) {  
        return res.status(400).json({ erro: 'Campo valorTotal é obrigatório' });
    }
    if (!dataCriacao) {
        return res.status(400).json({ erro: 'Campo dataCriacao é obrigatório' });
    }
    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ erro: 'Campo items é obrigatório e deve ser um array não vazio' });
    }
    for (const item of items) {
        if (!item.idItem) { 
            return res.status(400).json({ erro: 'Campo idItem é obrigatório para cada item' });
        }   
    }   
    next();
};
