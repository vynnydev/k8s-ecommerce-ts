import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const AppLogo = () => {
  return (
    <Link href="/">
      <Text color="white" fontWeight="bold">
        K8S{' '}
        <Text as="span" color="brand.primary">
          BUY
        </Text>
      </Text>
    </Link>
  )
}
