import { IProductGatewayRepository } from '@/app/core/domain/gateways/repositories/IProductGatewayRepository'
import { PrismaOrmProductRepository } from '@/app/core/infra/gateways/repositories/prisma/product/PrismaOrmProductRepository'

const makePrismaOrmProductRepository = (): IProductGatewayRepository => {
  const prismaOrmProductRepository = new PrismaOrmProductRepository()

  return prismaOrmProductRepository
}

export { makePrismaOrmProductRepository }
