/* eslint-disable prettier/prettier */
import {
  Grid,
  Box,
  GridItem,
} from '@chakra-ui/react'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import { BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineDown } from 'react-icons/ai'

export default function Navbar() {
  return (
    <Box position={'fixed'} width={'100%'} height={'40px'}>
      <Grid templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem w='100%' h='100%'>
          <Box display='flex' h='100%' py={[2, 2]} justifyContent='flex-start' pl='10' bg={'#231f1e'}>
            <Box py={[1, 1]} px='2'>
              <FaInstagram size={15} color='white'/>
            </Box>

            <Box py={[1, 1]} px='2'>
              <FaFacebook size={15} color='white'/>
            </Box>

            <Box py={[1, 1]} px='2'>
              <FaTwitter size={15} color='white'/>
            </Box>

            <Box py={[1, 1]} px='2'>
              <FaLinkedinIn size={15} color='white'/>
            </Box>
          </Box>
        </GridItem>

        <GridItem w='100%' h='10'>
          <Box display='flex' h='100%' py={[2, 2]} justifyContent='center' bg={'#231f1e'}>
            <Box py={[1, 1]} pr={1}>
              <BsTelephone size={14} color='white'/>
            </Box>
            <Box
              color='whiteAlpha.900'
              fontWeight='normal'
              letterSpacing='wide'
              fontSize='14'
              mr={5}
            >
              +00123456789
            </Box>

            <Box py={[1, 1]}>
              <TfiEmail size={14} color='white'/>
            </Box>
            <Box
              color='whiteAlpha.900'
              fontWeight='normal'
              letterSpacing='wide'
              fontSize='14'
              ml='2'
            >
              support@k8stech.com
            </Box>
          </Box>
        </GridItem>

        <GridItem w='100%' h='10'>
          <Box display='flex' h='100%' py={[2, 2]} justifyContent='flex-end' pr='10' bg={'#231f1e'}>
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
