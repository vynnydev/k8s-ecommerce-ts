'use client'
import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'

import TopNavbar from './navbar/TopNavBar'
import Navbar from './navbar/Navbar'

interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  // const { toggleColorMode } = useColorMode()

  // const bgHeader = useColorModeValue('gray.50', 'gray.100')
  // const bgColor = useColorModeValue('whiteAlpha.900', 'white')

  return (
    <>
      <TopNavbar />
      <Navbar />
      <Grid
        templateAreas={`
                  "main"
                  "footer"`}
        gridTemplateRows={'800px 400px'}
        height={'100%'}
        color="blackAlpha.700"
        fontWeight="bold"
        overflow={'scroll'}
      >
        <GridItem pl="2" bg="green.300" area={'main'}>
          {children}
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </>
  )
}
