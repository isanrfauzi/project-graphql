import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Link as ChakraLink,
    Button,
    FormHelperText,
    useToast,
  } from "@chakra-ui/react";

const Register = () => {
  return (
    <div>
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
            <Heading>Sign Up Your Account</Heading>
          </Box>
          <Box my={8} textAlign="center">
            <form>
              <FormControl >
                <FormLabel htmlFor="inputUsername">Username</FormLabel>
                <Input

                  placeholder="Enter your Username"
                />
   
              </FormControl>

              <FormControl >
                <FormLabel htmlFor="inputEmail">Email</FormLabel>
                <Input

                  placeholder="Enter your Email"
                />
  
              </FormControl>

              <FormControl mt={5} >
                <FormLabel htmlFor="inputPassword">Password</FormLabel>
                <Input

                  type="password"
                  placeholder="Enter your password"
                />

              </FormControl>

              <FormControl mt={5} >
                <FormLabel htmlFor="inputRepeatPassword">
                  Repeat Password
                </FormLabel>
                <Input
          
                  type="password"
                  placeholder="Enter your repeat password"
                />
           
              </FormControl>

              <Button
           
                width="full"
                mt={4}
                colorScheme="blue"
                type="submit"
              
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
    </div>
  )
}

export default Register
