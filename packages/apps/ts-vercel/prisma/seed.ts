const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // const categories = await prisma.category.createMany({
  //   data: [
  //     { name: 'Computers' },
  //     { name: 'TV' },
  //     { name: 'Storage' },
  //     { name: 'Accessories' },
  //   ],
  //   skipDuplicates: true,
  // })

  const category = await prisma.category.create({
    data: {
      name: 'Technology',
    },
  })

  await prisma.tag.createMany({
    data: [
      { name: 'Apple' },
      { name: 'IOS' },
      { name: 'SSD' },
      { name: 'Keyboard' },
      { name: 'USB' },
    ],
    skipDuplicates: true,
  })

  const productCreated = await prisma.product.create({
    data: {
      name: 'Smart TV',
      slug: 'smart-tv-full-hd-40-inch',
      description: 'Full HD 40 Inch',
      isAvailable: true,
      price: 455,
      extras: ' width: 168, height: 109, energy: Class A+ ',
      pictures: [
        'https://k8s-next-ecommerce.s3.amazonaws.com/1685408791880.jpg',
      ],
      categoryId: category.id,
    },
  })

  console.log(productCreated)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
