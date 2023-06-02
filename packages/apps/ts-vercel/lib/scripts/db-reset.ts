// filename: db-reset.ts

// use: npx ts-node db-reset.ts

// add more tables if Required
import { PrismaClient } from '@prisma/client'

const tableNames = [
  'users',
  'tags',
  'sessions',
  'product_tags',
  'products',
  'orders',
  'line_items',
  'categories',
  'accounts',
  'account_addresses',
  '_prisma_migrations',
  'ShippingAddress',
]

const prisma = new PrismaClient()
async function main() {
  for (const tableName of tableNames)
    await prisma.$queryRawUnsafe(
      `Truncate "${tableName}" restart identity cascade;`,
    )
}

main().finally(async () => {
  await prisma.$disconnect()
})
