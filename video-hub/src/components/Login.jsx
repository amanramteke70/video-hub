import {
  Text,
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';

const Login = () => {
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
          <Heading alignSelf={'center'}>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple.500"
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button type="submit" colorScheme="purple">
            Login
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme='purple'>
                <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
