import { IFindAllProducts } from '@/app/core/domain/use-cases/IFindAllProducts'

import { makePrismaOrmProductRepository } from '../../gateways/repositories/prisma/product/PrismaOrmProductRepositoryFactory'
import { FindAllProducts } from '@/app/core/use-cases/product/FindAllProducts'

const makeFindAllProducts = (): IFindAllProducts => {
  const prismaOrmProductRepository = makePrismaOrmProductRepository()

  const findAllProducts = new FindAllProducts(prismaOrmProductRepository)

  return findAllProducts
}

export { makeFindAllProducts }
