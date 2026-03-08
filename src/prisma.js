const { PrismaClient } = require('./generated/prisma/index.js');

const prisma = new PrismaClient({
  log: ['error'],
});

module.exports = prisma;