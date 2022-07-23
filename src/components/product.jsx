import Navbar from "./navbar";
import Footer from "./footer";
import { Box,Text } from "@chakra-ui/react";
import Card from "./card";
export default function Product(){
   
    return (
        <>
        <Navbar/>
        <Text mt='100px' textAlign='center'> 181 Products</Text>
        <Box display='flex' w='95%' m='auto' gap='5px' mt='10px'>
            <Box border='1px solid black' h='800px' w='15%'>
                <Text fontSize='23px'> CATEGORIES</Text>
                <hr/>
                <Text fontSize='15px' mt='25px'>Shop All</Text>
                <Text fontSize='15px' mt='25px'> New Arrivals</Text>
                <Text fontSize='15px' mt='25px'>  Bestsellers</Text>
                <Text fontSize='15px' mt='25px'> Skin Care</Text>
                <Text fontSize='15px' mt='25px'> Hair Care</Text>
                <Text fontSize='15px' mt='25px'> Body Care</Text>
                <Text fontSize='15px' mt='25px'> Perfumes</Text>
                <Text fontSize='15px' mt='25px'> Combos</Text>
                <Text fontSize='15px' mt='25px'> Build a Box</Text>
                
            </Box>
            <Box border='1px solid black'  w='85%' display='flex' gap='5px' flexWrap="wrap">
              <Card/>
              <Card/>
              
            </Box>
        </Box>
        <Footer/>
       






        </>
    )
}