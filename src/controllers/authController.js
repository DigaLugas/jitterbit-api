const jwt = require('jsonwebtoken');

//gera um token JWT para autenticação
const login = (req, res) => {
  const { usuario, senha } = req.body;

  //validação simples com credenciais fixas (pode ser substituída por uma consulta a um banco de dados)
  if (usuario !== process.env.ADMIN_USER || senha !== process.env.ADMIN_PASS) {
    return res.status(401).json({ erro: 'Usuário ou senha inválidos' });
  }

  const token = jwt.sign(
    { id: usuario },
    process.env.JWT_SECRET,
    { expiresIn: '1d' } //validade do token de 1 dia
  );

  return res.status(200).json({ token });
};

module.exports = { login };