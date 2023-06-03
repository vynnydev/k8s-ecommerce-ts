/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../../../styles/chakra-ui/Theme'

export function ChakraUIProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>
        @import
        url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
        @import
        url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
      </style>
      <CacheProvider>
        <ChakraProvider resetCSS theme={theme}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}
