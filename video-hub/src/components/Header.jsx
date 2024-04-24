import React from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { Button, useDisclosure,VStack,HStack, } from '@chakra-ui/react';
import { Drawer, DrawerOverlay,DrawerContent,DrawerHeader,DrawerCloseButton} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {

  const {isOpen,onOpen,onClose} = useDisclosure();

  return (
      <>
        <Button
        zIndex={'overlay'}
        p={0}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        h={'10'}
        width={'10'}
        borderRadius={'full'}
        colorScheme={'purple'}
        onClick={onOpen}
        >
          <BiMenuAltLeft size={'20'}/>
        </Button>

        <Drawer isOpen = {isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
              <DrawerHeader>Video Content</DrawerHeader>
              <VStack>
                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                  <Link to="/">Home</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                  <Link to="/videos">Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                  <Link to="/videos?category=free">Free Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                  <Link to="/upload">Upload</Link>
                </Button>
              </VStack>

              <HStack position={'absolute'}
              bottom={10}
              left={0}
              width={'full'}
              justifyContent={'space-evenly'}
              >
                  <Button onClick={onClose} colorScheme='purple'>
                    <Link to={'/login'}>Log In</Link>
                  </Button>
                  <Button onClick={onClose} colorScheme='purple'>
                    <Link to={'/signup'}>Sign Up</Link>
                  </Button>
              </HStack>
            </DrawerContent>
        </Drawer>
      </>
    )
}

export default Header;