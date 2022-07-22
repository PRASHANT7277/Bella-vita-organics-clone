import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Carousel from "./carousel";
import { Box ,Image,Text} from "@chakra-ui/react";
import Eimg from './images/e.jpg'
import Fimg from './images/f.png'
import Gimg from './images/g.png'
import Himg from './images/h.png'
import Iimg from './images/i.png'
import Jimg from './images/j.jpg'
import Kimg from './images/k.png'

import limg from './images/13.png'
import Carousel1 from "./carosel/aa";
import Carousel2 from "./carosel/ab";
import Carousel3 from "./carosel/ac";
import Carousel4 from "./carosel/ad";

export default function Homepage(){
    const [youtubeID] = useState('65MyOTIWarA')
    return(
        <>
        <Navbar/>
        <Box w='80%' m='auto' mt='20px'><Carousel/></Box>
        <Box w='80%' m='auto' mt='30px' ><Image borderRadius='10px' src={Eimg} alt='img'/></Box>
        <Text textAlign='center' fontSize='25px' fontWeight='bold'  color='#475d4b' mt='20px'>BESTSELLER</Text>
         <Box w='80%' m='auto' mt='30px'><Carousel1/></Box>
         <Text textAlign='center' fontSize='25px' fontWeight='bold'  color='#475d4b' mt='20px'>IN THE SPOTLIGHT</Text>
         <Box w='80%' m='auto' mt='30px'><Carousel2/></Box>
         <Text textAlign='center' fontSize='25px' fontWeight='bold'  color='#475d4b' mt='20px'>FIND SOLUTION FOR</Text>
         <Box w='80%' m='auto' mt='30px'><Carousel3/></Box>
         <Text textAlign='center' fontSize='25px' fontWeight='bold'  color='#475d4b' mt='20px'>LUXURY FRAGRANCES</Text>
         <Box w='80%' m='auto'><img style={{borderRadius:'10px'}} src={limg} class="d-block w-100" alt="..."/></Box>
         <Box w='80%' m='auto' mt='30px' ><Image borderRadius='10px' src={Fimg} alt='img'/></Box>
         <Box w='80%' m='auto' mt='30px' ><Image borderRadius='10px' src={Gimg} alt='img'/></Box>
         <Box w='80%' m='auto' mt='30px' ><Image borderRadius='10px' src={Himg} alt='img'/></Box>
         <Box w='80%' m='auto' mt='30px' ><Image borderRadius='10px' src={Iimg} alt='img'/></Box>
         <Box><iframe width="100%" height="600px" className='video'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
          </iframe></Box>
         <Text textAlign='center' fontSize='25px' fontWeight='bold'  color='#475d4b' mt='20px'>MEDIA COVERAGE</Text>
         <Box w='80%' m='auto' mt='30px'><Carousel4/></Box>
         <Box w='80%' m='auto' mt='30px' ><Image borderRadius='10px' src={Jimg} alt='img'/></Box>
         <Box   mt='30px' ><Image src={Kimg} alt='img'/></Box>
         <Box></Box>




        <Footer/>
         </>
    )
}