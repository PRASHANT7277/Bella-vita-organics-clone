import Navbar from "./navbar";
import Footer from "./footer";
import { Box,Text,Image,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Count from "./count";
import axios from "axios"
import { useState } from "react";
import { DeleteIcon } from '@chakra-ui/icons'

export default function Fcart(){
    const [data,setData]=useState([])
  axios.get("https://prashant-json-server.herokuapp.com/procart")
  .then((res) => {
    setData(res.data);
    
  })
  .catch((err) => {
    console.log(err);
   
  });
     
    return (
        <>
        <Navbar/>
        <Box mt="100px"  w="80%" margin="auto">
            <Box mt="100px" display='flex' justifyContent='space-between'>
                <Box><Text fontweight="semibold" fontSize="40px">Your cart</Text></Box>
                <Box mt='20px'><Text textDecor='underline'><Link to="/products">Continue Shopping</Link></Text></Box>
            </Box>
            <Box display='flex' justifyContent='space-between' mt='20px'>
                <Box color="grey">PRODUCT</Box>
                <Box color="grey">QUANTITY</Box>
                <Box color="grey">TOTAL</Box>
            </Box>
            <Box mt='7px'><hr/></Box>
            {data.map((elem)=>
              <Box display='flex' justifyContent='space-between' mt='20px'>
              <Box display='flex'>
                  <Box color='mineralgreen' ><Image h='120px'w='120px' src={elem.imgurl} alt="..."/></Box>
                  <Box w='200px' color='mineralgreen'><Text>{elem.title}</Text><Text>₹{elem.price_off}</Text></Box>
              </Box>
              <Box display='flex' >
                  <Count/>
                  <Box><Button id={elem.id}><DeleteIcon  h='50px'/></Button></Box>
              </Box>
              <Box color='mineralgreen'>₹{elem.price_off}</Box>
          </Box>

            )}
            <Box><hr/></Box>
            <Box mt='70px' color='mineralgreen' ><Text fontWeight='semibold' fontSize='15px' textAlign='right'>Subtotal ₹{"229"}</Text></Box>
            <Box><Text textAlign='right' color='mineralgreen' textDecoration='underline' > <a href='https://bellavitaorganic.com/policies/shipping-policy'>Tax included.shipping calculated at checkout.</a></Text></Box>
            <Box mb='50px' color='white' textAlign='right' mt='30px' ><Button  bgColor='#475d4b' pt='25px' pb='25px' pl='150px' pr='150px' fontWeight='bold'>Check out</Button></Box>
        </Box>

        <Footer />
        </>
    )
}