import React from 'react'

import Image from 'next/image'
import Head from 'next/head'
import {
  Flex,
  Grid,
  Text,
  Tooltip,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react'

import { Search } from './chakra-ui/search/Search'
import { Footer } from './chakra-ui/footer/Footer'

import { BsMenuDown } from 'react-icons/bs'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

export default function Layout({ children }: { children: React.ReactNode }) {
  // const { toggleColorMode } = useColorMode()

  const bgHeader = useColorModeValue('gray.900', 'gray.500')
  const bgColor = useColorModeValue('blackAlpha.900', 'white')

  return (
    <>
      <Head>
        <title>K8S Buy</title>
        <meta name="theme-color" content="#16161D" />
        <link rel="shortcut icon" href="/transparent.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <Grid
        position={'fixed'}
        templateRows={'150px auto'}
        templateColumns={'100%'}
        width={'100%'}
        height={'100%'}
        bg={bgHeader}
      >
        <Flex
          px={[0, 10]}
          justifyContent={'space-between'}
          bg="none"
          alignItems={'center'}
        >
          <Flex pl={3} alignItems={'center'}>
            <Image src="/transparent.png" width={40} height={40} alt="icons" />
            <Text color="white" px={3} fontSize="20" fontWeight="bold">
              K8S Buy
            </Text>
          </Flex>

          <Flex pl={3} alignItems={'center'}>
            <Text color="white" px={3} fontSize="20">
              Products
            </Text>
          </Flex>

          <Flex pl={3} alignItems={'center'}>
            <Text color="white" px={3} fontSize="20">
              Categories
            </Text>
          </Flex>

          <Flex border={'2px white solid'} borderRadius={50} py={1} px={3}>
            <Search />
          </Flex>

          <Tooltip placement="right-end" label="Menu" pl={5}>
            <Flex border={'2px white solid'} borderRadius={50} py={1} px={3}>
              <IconButton
                bgColor={'transparent'}
                color="white"
                aria-label="Toggle color mode"
                icon={<BsMenuDown />}
              />
            </Flex>
          </Tooltip>

          <Tooltip placement="right-end" label="Wishlist">
            <Flex border={'2px white solid'} borderRadius={50} py={1} px={3}>
              <IconButton
                bgColor={'transparent'}
                color="white"
                aria-label="Toggle color mode"
                icon={<FaHeart />}
              />
            </Flex>
          </Tooltip>

          <Tooltip placement="right-end" label="ShoppingCart">
            <Flex border={'2px white solid'} borderRadius={50} py={1} px={3}>
              <IconButton
                bgColor={'transparent'}
                color="white"
                aria-label="Toggle color mode"
                icon={<FaShoppingCart />}
              />
            </Flex>
          </Tooltip>
        </Flex>
        <Flex
          bgColor={bgColor}
          bgRepeat={'no-repeat'}
          bgSize="cover"
          flexDirection={['row']}
          alignItems={'center'}
          justifyContent={'space-around'}
          borderRadius={'3rem 3rem 0 0'}
        >
          <Flex px={5} flexDir={'column'}>
            {children}
          </Flex>

          <Flex justifySelf={'flex-end'}>
            <Footer />
          </Flex>
        </Flex>
      </Grid>
    </>
  )
}
