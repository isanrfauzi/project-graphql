import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link as ChakraLink,
    Button,
    useToast,
    InputGroup,
    InputRightElement,
    Icon,
    FormHelperText,
  } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex minHeight="75vh" align="center" justifyContent="center">
    <Box
      borderWidth="2px"
      px={4}
      width="full"
      maxWidth="lg"
      borderRadius={10}
      textAlign={4}
      boxShadow="lg"
    >
      <Box p={4} borderRadius={10}>
        <Box textAlign="center">
          <Heading>Sign In to Your Account</Heading>
        </Box>
        <Box my={8} textAlign="center">
          <form>
            <FormControl >
              <FormLabel htmlFor="inputUsername">
                Email address or Username
              </FormLabel>

              <Input
                placeholder="Enter your email address or Username"
                id="inputUsername"
                name="username"

              />
      
            </FormControl>

            <FormControl mt={5} >
              <FormLabel htmlFor="inputPassword">password</FormLabel>
              <InputGroup>
                <Input
                  id="inputPassword"
                  type="password"
                  name="password"
                  placeholder="Enter your password"

                />
                <InputRightElement
                  children={
                    <Icon
                      fontSize="xl"
            
                    ></Icon>
                  }
                ></InputRightElement>
              </InputGroup>
        
            </FormControl>

            <Stack isInline justifyContent="space-between" mt={5}>
              <Box>

                  <ChakraLink>Forgot your password?</ChakraLink>
       
              </Box>
        
                <Box>
                  <ChakraLink>Dont have a account?</ChakraLink>
                </Box>
       
            </Stack>

            <Button
    
              width="full"
              mt={4}
              colorScheme="blue"
              type="submit"
          
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  </Flex>
  )
}

export default Login