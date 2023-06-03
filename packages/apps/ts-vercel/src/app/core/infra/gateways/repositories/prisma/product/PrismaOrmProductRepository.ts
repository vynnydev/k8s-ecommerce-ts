import { PrismaClient } from '@prisma/client'

import { Product } from '@/app/core/domain/models/product/Product'
import { ProductMapper } from '@/app/core/presentation/mappers/ProductMapper'

import { IProductGatewayRepository } from '@/app/core/domain/gateways/repositories/IProductGatewayRepository'

export class PrismaOrmProductRepository implements IProductGatewayRepository {
  async findAll(): Promise<Product[]> {
    const prisma = new PrismaClient()

    const products = await prisma.product.findMany()

    return products.map((product) => ProductMapper.toDomain(product))
  }
}
