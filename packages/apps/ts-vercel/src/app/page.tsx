/* eslint-disable react/jsx-key */
import { makeFindAllProducts } from './core/main/factories/use-cases/product/FindAllProductsFactory'

export default async function Home() {
  const findAllProductUseCase = makeFindAllProducts()
  const products = await findAllProductUseCase.execute()

  return (
    <section className="py-20">
      <div className="container"></div>
      <h1>Todos</h1>

      <h2>Previous todos:</h2>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.description}</li>
        ))}
      </ul>
    </section>
  )
}
