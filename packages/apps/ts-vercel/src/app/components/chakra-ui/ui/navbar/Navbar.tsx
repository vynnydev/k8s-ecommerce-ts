/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import Image from 'next/image'
import {
  Box,
  Text
} from '@chakra-ui/react'
import { Search } from '../search/Search'

import { AiOutlineDown } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { TbShoppingCartPlus } from 'react-icons/tb'

export default function Navbar() {
  return (

    <Box position={'fixed'} width={'100%'} mt={10} h='60px' bg={'#F7F9F9'} justifyContent='flex-start'>
      <Box display='flex' h='100%' py={[2, 2]} px={8} pl='10' bg={'#F7F9F9'} justifyContent={'space-between'}>
        <Box display='flex'>
          <Image src="/k8s.png" width={40} height={40} alt="icons" />
          
          <Text color="#231f1e" px={2} py={2} fontSize="20">
            K8S Tech
          </Text>
        </Box>

        <Box display='flex'>
          <Text color="#231f1e" px={3} py={2} fontSize="20">
            Category
          </Text>
          <Box py={4}>
            <AiOutlineDown />
          </Box>

          <Text color="#231f1e" px={7} py={2} fontSize="20">
            Deals
          </Text>

          <Text color="#231f1e" px={3} py={2} fontSize="20">
            What's New
          </Text>

          <Text color="#231f1e" px={4} py={2} fontSize="20">
            Delivery
          </Text>

          <Search />
        </Box>

        <Box display='flex'>
          <Box py={4}>
            <BsPerson size={20}/>
          </Box>
          
          <Text color="#231f1e" px={3} py={2} fontSize="20">
            Account
          </Text>

          <Box py={4}>
            <TbShoppingCartPlus size={20}/>
          </Box>
          
          <Text color="#231f1e" px={3} py={2} fontSize="20">
            Cart
          </Text>

        </Box>
      </Box>

    </Box>
  )
}
