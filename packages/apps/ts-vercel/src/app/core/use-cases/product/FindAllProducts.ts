/* eslint-disable no-useless-constructor */
import { PrismaOrmProductRepository } from '../../infra/gateways/repositories/prisma/product/PrismaOrmProductRepository'

import {
  TFindAllProductsResponse,
  IFindAllProducts,
} from '../../domain/use-cases/IFindAllProducts'

export class FindAllProducts implements IFindAllProducts {
  constructor(private productRepository: PrismaOrmProductRepository) {}

  async execute(): Promise<TFindAllProductsResponse> {
    const products = await this.productRepository.findAll()

    return products
  }
}
