import { Text,Input,Box,Stack,HStack,VStack,Heading, Button} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size='md' textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get more upadate.
                    </Heading>
                    <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...'
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor={'none'}
                     />

                        <Button p={'0'}
                        colorScheme={'purple'}
                        varient={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend Size={'20'}/>
                        </Button>
                    </HStack>
            </VStack>

            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']} >
            <Heading textAlign={'center'}>VIDEO HUB</Heading>
            <Text>all right recived.</Text>
            
            </VStack>

            <VStack w={'full'} borderRight={['none', '1px solid white']} >
            <Heading textTransform={'uppercase'} textAlign={'center'} size={'md'}>social media</Heading>
                <Button pos={'flex'}  variant={'link'} colorScheme='whiteAlpha'>
                    <a href="#">YouTube</a>
                </Button>
                <Button pos={'flex'}  variant={'link'} colorScheme='whiteAlpha'>
                    <a href="#">FaceBook</a>
                </Button>
                <Button pos={'flex'}  variant={'link'} colorScheme='whiteAlpha'>
                    <a href="#">Instagram</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer;