'use client'

/* eslint-disable react/jsx-key */
import { Grid, Button, Flex, Text, Tooltip } from '@chakra-ui/react'

import Image from 'next/image'
import Head from 'next/head'

import { makeFindAllProducts } from './core/main/factories/use-cases/product/FindAllProductsFactory'
import Layout from './components/Layout'

export default async function Home() {
  const findAllProductUseCase = makeFindAllProducts()
  const products = await findAllProductUseCase.execute()

  return (
    <>
      <Layout></Layout>
    </>
  )
}
