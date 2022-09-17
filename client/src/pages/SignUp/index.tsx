import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
} from '@chakra-ui/react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeFirstName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    // setError(false);
  };

  const handleChangePassword = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    // setError(false);
  };

  return (
    <React.Fragment>
      <Container w={'auto'} mt={24}>
        <Box>
          <form>
            <VStack>
              {/***** First Name Input *****/}
              <FormControl>
                <FormLabel htmlFor="first-name">First Name</FormLabel>
                <Input
                  type={'text'}
                  name="first-name"
                  id="first-name"
                  value={firstName}
                  onChange={handleChangeFirstName}
                  placeholder="Enter your first name"
                />
              </FormControl>

              {/***** Last Name Input *****/}
              <FormControl>
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <Input
                  type={'text'}
                  name="last-name"
                  id="last-name"
                  value={lastName}
                  onChange={handleChangeLastName}
                  placeholder="Enter your last name"
                />
              </FormControl>

              {/***** Email Input *****/}
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type={'email'}
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Enter your email address"
                />
              </FormControl>

              {/***** Password Input *****/}
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type={'password'}
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="Enter your password"
                />
              </FormControl>

              {/* Login Button */}
              <Button
                w={'full'}
                type={'submit'}
                colorScheme="black"
                bgColor={'blue.500'}
                _hover={
                  localStorage.getItem('isDarkMode')
                    ? { bgColor: 'blue.600' }
                    : { bgColor: 'blue.400' }
                }
                _focus={{
                  transform: 'scale(1)',
                }}
              >
                Sign Up
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default SignUp;
