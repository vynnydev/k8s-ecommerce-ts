import { Product } from '../../models/product/Product'

export interface IProductGatewayRepository {
  findAll(): Promise<Product[]>
}
