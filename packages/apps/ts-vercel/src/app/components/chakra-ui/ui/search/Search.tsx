/* eslint-disable react/no-children-prop */
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const Search = () => {
  return (
    <Box pos="relative" w={'400px'} py={1}>
      <InputGroup w={'400px'} height={'10'}>
        <Input
          type="text"
          color="#cccccc"
          placeholder="Search..."
          focusBorderColor="brand.primaryLight"
          borderColor="#cccccc"
          borderRadius={'full'}
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
