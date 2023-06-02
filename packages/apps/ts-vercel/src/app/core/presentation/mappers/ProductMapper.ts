import { Product as PersistenceProduct } from '@prisma/client'

import { Name } from '../../domain/models/product/name'
import { Product } from '../../domain/models/product/Product'

export class ProductMapper {
  static toDomain(raw: PersistenceProduct): Product {
    const nameOrError = Name.create(raw.name)

    if (nameOrError.isLeft()) throw new Error('Name value is invalid')

    const productOrError = Product.create(
      {
        slug: raw.slug,
        name: nameOrError.value,
        description: raw.description,
        price: raw.price,
        isAvailable: raw.isAvailable,
        visibility: raw.visibility,
        pictures: raw.pictures,
        extras: raw.extras,
        categoryId: raw.categoryId,
        lineItemId: raw.lineItemId,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id,
    )

    if (productOrError.isLeft()) throw new Error()

    return productOrError.value
  }

  static toPersistence(product: Product) {
    return {
      id: product.id,
      name: product.name.value,
      description: product.description,
      price: product.price,
      isAvailable: product.isAvailable,
      visibility: product.visibility,
      pictures: product.pictures,
      extras: product.extras,
      categoryId: product.categoryId,
      lineItemId: product.lineItemId,
    }
  }
}
