import {
  Text,
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Link,
  Avatar
} from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  return (
    <Container>
      <form action="">
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}/>
          <Input
            placeholder="Full Name"
            type="name"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Email"
            type="Email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Phone Number"
            type="number"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple.500"
          />

          <Button type="submit" colorScheme="purple">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme='purple'>
                <Link to={'/login'}>Already your acount!</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};


export default Signup;