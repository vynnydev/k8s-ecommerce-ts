import { Product } from '../models/product/Product'

export type TFindAllProductsResponse = Product[]

export interface IFindAllProducts {
  execute(): Promise<TFindAllProductsResponse>
}
