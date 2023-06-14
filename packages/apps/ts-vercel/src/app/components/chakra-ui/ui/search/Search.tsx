/* eslint-disable react/no-children-prop */
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const Search = () => {
  return (
    <Box pos="relative" w={'250px'} py={1}>
      <InputGroup w={'200px'} height={'10'}>
        <Input
          type="text"
          color="#cccccc"
          placeholder="Search..."
          focusBorderColor="brand.primaryLight"
          borderColor="#cccccc"
        />
        <InputLeftElement
          pointerEvents="none"
          color="#cccccc"
          children={<SearchIcon color="gray.400" />}
        />
      </InputGroup>
    </Box>
  )
}
