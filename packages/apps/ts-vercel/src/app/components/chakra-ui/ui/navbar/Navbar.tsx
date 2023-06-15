/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import Image from 'next/image'
import {
  Box,
  Text
} from '@chakra-ui/react'
import { Search } from '../search/Search'

import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineDown } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { TbShoppingCartPlus } from 'react-icons/tb'

export default function Navbar() {
  return (

    <Box position={'fixed'} width={'100%'} mt={10} h='70px' bg={'#F7F9F9'} justifyContent='flex-start' alignItems={'center'}>
      <Box display='flex' h='100%' py={[2, 2]} px={8} pl='10' bg={'#F7F9F9'} justifyContent={'space-between'}>
        <Box display='flex'>
          <Box py={2}>
            <Image src="/k8s.png" width={40} height={40} alt="icons"/>
          </Box>
          
          <Text color="#231f1e" px={2} py={3} fontSize="20">
            K8S Tech
          </Text>
        </Box>

        <Box display='flex'>
          <Text color="#231f1e" py={3} pr={1} fontSize="18">
            Category
          </Text>
          <Box py={5} pr={3}>
            <AiOutlineDown />
          </Box>

          <Text color="#231f1e"  py={3} pr={5} fontSize="18">
            Deals
          </Text>

          <Text color="#231f1e"  py={3} pr={5} fontSize="18">
            What's New
          </Text>

          <Text color="#231f1e"  py={3} pr={5} fontSize="18">
            Delivery
          </Text>
        </Box>

        <Box display='flex' py={1}>
          <Search />
        </Box>

        <Box display='flex' px={3}>
          <Box 
            borderRadius={'full'} 
            w={'35px'} h={'35px'} 
            backgroundColor={'gray.300'}
            mx={3} my={2}
            px={2} py={2}
          >
            <MdOutlineEmail size={20}/>
          </Box>

          <Box py={4} pl={3}>
            <BsPerson size={20}/>
          </Box>
          
          <Text color="#231f1e" px={1} py={3} fontSize="18">
            Account
          </Text>

          <Box py={4} pl={4}>
            <TbShoppingCartPlus size={20}/>
          </Box>
          
          <Text color="#231f1e" px={1} py={3} fontSize="18">
            Cart
          </Text>
        </Box>

      </Box>

    </Box>
  )
}
