# Jitterbit Orders API

API REST para gerenciamento de pedidos desenvolvida como parte do processo seletivo da Jitterbit para a vaga de Analista de Sistemas Jr.

## Tecnologias

- Node.js
- Express
- Prisma ORM
- PostgreSQL (Supabase)
- JWT (autenticação)
- Swagger (documentação)

## Pré-requisitos

- Node.js instalado
- Conta no Supabase (ou PostgreSQL local)

## Como rodar o projeto

**1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/jitterbit-api.git
cd jitterbit-api
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure o .env**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
DATABASE_URL="postgresql://usuario:senha@host:5432/postgres"
JWT_SECRET=sua_chave_secreta
ADMIN_USER=admin
ADMIN_PASS=admin123
PORT=3000
```

**4. Gere o Prisma Client**
```bash
npx prisma generate
```

**5. Rode o servidor**
```bash
npm run dev
```

## Documentação

Com o servidor rodando acesse:
```
http://localhost:3000/docs
```

##  Autenticação

Todas as rotas de pedidos são protegidas por JWT. Para obter o token:
```
POST http://localhost:3000/auth/login

{
  "usuario": "admin",
  "senha": "admin123"
}
```

Use o token retornado no header das requisições:
```
Authorization: Bearer <token>
```

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /auth/login | Gera token JWT |
| POST | /order | Cria um novo pedido |
| GET | /order/list | Lista todos os pedidos |
| GET | /order/:id | Busca pedido por ID |
| PUT | /order/:id | Atualiza um pedido |
| DELETE | /order/:id | Deleta um pedido |

## Estrutura do projeto
```
src/
├── controllers/    # recebe a requisição e devolve a resposta
├── services/       # lógica de negócio e mapeamento dos dados
├── repositories/   # comunicação com o banco de dados
├── routes/         # definição das URLs e métodos HTTP
├── middlewares/    # autenticação e validação
└── app.js          # configuração do Express
```

## Mapeamento dos dados

A API recebe os dados no formato original e os transforma antes de salvar no banco:

| Entrada | Banco |
|---------|-------|
| numeroPedido | orderId |
| valorTotal | value |
| dataCriacao | creationDate |
| idItem | productId |
| quantidadeItem | quantity |
| valorItem | price |