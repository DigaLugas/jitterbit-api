//tratamento global de erros
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ erro: err.message || "Erro interno do servidor" });
};
module.exports = errorHandler;