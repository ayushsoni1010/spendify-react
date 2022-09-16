import React from 'react';
import { useState } from 'react';
import {
  Container,
  Input,
  Stack,
  Text,
  Button,
  useColorModeValue,
  FormLabel,
  FormControl,
  Box,
} from '@chakra-ui/react';

const Login: React.FunctionComponent = () => {
  const colorModeText = useColorModeValue('light', 'dark');
  const [inputValue, setInputValue] = useState('');

  return (
    <React.Fragment>
      <Container mt={{ base: 20 }}>
        <Box>
          <form>
            <FormControl
              isRequired={inputValue === ' ' ? true : false}
              isInvalid={inputValue === ' ' ? true : false}
            >
              {/***** Email Input *****/}
              <FormLabel>Email</FormLabel>
              <Input
                type={'email'}
                name="email"
                id="email"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Your email address"
                mb={'2'}
              />

              {/***** Password Input *****/}
              <FormLabel>Password</FormLabel>
              <Input
                type={'password'}
                name="password"
                id="password"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Your password"
                mb={'3'}
              />
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
            </FormControl>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Login;
