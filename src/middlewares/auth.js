const jwt = require('jsonwebtoken');

//valida o token JWT enviado no header Authorization
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: 'Token não enviado' });
  }

  //token no formato "Bearer <token>"
  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; //disponibiliza o id do usuário para os próximos middlewares
    next();
  } catch (error) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
};

module.exports = auth;