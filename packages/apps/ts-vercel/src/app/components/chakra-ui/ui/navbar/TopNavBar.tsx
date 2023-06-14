/* eslint-disable prettier/prettier */
import {
  Grid,
  Box,
  GridItem,
} from '@chakra-ui/react'

import { BsTelephone } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'

export default function Navbar() {
  return (
    <Box position={'fixed'} width={'100%'} height={'40px'}>
      <Grid templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem w='100%' h='100%'>
          <Box display='flex' h='100%' py={[2, 2]} justifyContent='flex-start' pl='10' bg={'#013d29'}>
            <Box py={[1, 1]} px='2'>
              <BsTelephone size={12} color='white'/>
            </Box>
            <Box
              color='whiteAlpha.900'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              +00123456789
            </Box>
          </Box>
        </GridItem>

        <GridItem w='100%' h='10'>
          <Box display='flex' h='100%' py={[2, 2]} justifyContent='center' bg={'#013d29'}>
            <Box
              color='whiteAlpha.900'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              ml='2'
            >
              Get 50% Off on Selected Items | Shop Now
            </Box>
          </Box>
        </GridItem>

        <GridItem w='100%' h='10'>
          <Box display='flex' h='100%' py={[2, 2]} justifyContent='flex-end' pr='10' bg={'#013d29'}>
            <Box
              color='whiteAlpha.900'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              ml='2'
            >
              Eng
            </Box>
            <Box px='2' py={[1, 1]}>
              <AiOutlineDown size={12} color='white' />
            </Box>
            <Box
              color='whiteAlpha.900'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              ml='2'
            >
              Location
            </Box>
            <Box px='2' py={[1, 1]}>
              <AiOutlineDown size={12} color='white' />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}
