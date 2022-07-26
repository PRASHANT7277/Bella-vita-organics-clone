import Navbar from './navbar'
import Footer from './footer'
import { Box,Button,FormControl,Input,Text
    } from "@chakra-ui/react";

export default function Signup(){
    return(
  <><Navbar/>
  <Box w='450px' m='auto' mb='150px' mt='50' textAlign='center' >      
  <Text fontSize='40'>Create account</Text>
      <FormControl isRequired>
      <Input mt='5' placeholder='First name'  />
      </FormControl>
      <FormControl isRequired>
      <Input mt='5' placeholder='Last name' />
      </FormControl>
      <FormControl>
      <Input mt='5' type='email' placeholder='Email address' />
      </FormControl>
      <FormControl>
      <Input mt='5' type='password' placeholder='Password' />
      </FormControl>
      <Button mt='10'pl='70' pr='70' pt='6' pb='6'  fontSize='large' backgroundColor='#475D4B' colorScheme='white'>Create</Button>

  </Box>




  <Footer/>

  </>
    )
}