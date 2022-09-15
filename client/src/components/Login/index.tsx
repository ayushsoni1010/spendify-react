import React from 'react';
import {
  Container,
  Input,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const Login: React.FunctionComponent = () => {
  const colorModeText = useColorModeValue('light', 'dark');

  return (
    <React.Fragment>
      <Container mt={{ base: 20 }}>
        <Stack minH={'90vh'} direction={{ base: 'column' }}>
          <Text fontWeight={600} mb="5px">
            Email
          </Text>
          <Input
            type={'email'}
            mt="2"
            name="email"
            id="email"
            placeholder="Your email address"
          ></Input>
          <Text fontWeight={600} my="5px">
            Password
          </Text>
          <Input
            type={'password'}
            name="password"
            id="password"
            placeholder="Your password"
          ></Input>
          <Button
            type={'submit'}
            colorScheme="black"
            bgColor={'blue.500'}
            _hover={
              colorModeText === 'light'
                ? { bgColor: 'blue.600' }
                : { bgColor: 'blue.400' }
            }
          >
            Log In
          </Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Login;
