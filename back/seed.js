import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function principal() {
  const donnees = JSON.parse(fs.readFileSync('champions.json', 'utf8'));

  for (let champion of donnees) {
    await prisma.champion.create({
      data: champion,
    });
  }
}

principal()
  .catch(erreur => {
    throw erreur
  })
  .finally(async () => {
    await prisma.$disconnect()
  });