import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { inputGroup } from './Style'

export const Search = () => {
  return (
    <Box pos="relative" w={{ base: '100%', lg: '32rem' }}>
      <InputGroup {...inputGroup}>
        <InputLeftElement pointerEvents="none" color="white" />
        <Input
          type="text"
          placeholder="Search..."
          focusBorderColor="brand.primaryLight"
          borderColor="gray.400"
        />
      </InputGroup>
    </Box>
  )
}
