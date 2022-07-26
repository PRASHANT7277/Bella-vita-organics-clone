
import { Box,Image} from "@chakra-ui/react";
//import {Search2Icon} from "@chakra-ui/icons"
import Nav from "./nav"
import {Link} from 'react-router-dom'
import Cart from "./cart";
export default function Navbar(){
    return(
        <Box>
           <Box id="navbar">
            <Box id='a'>FREE SHIPPING on PREPAID Orders*</Box>
            <Box id='b'>
                <Box className='b1'> <Link to='/login' ><Image id='b2' src='https://img.myloview.fr/papiers-peints/login-icon-vector-user-symbol-simple-linear-pictogram-user-interface-account-log-in-400-250244158.jpg' alt='img' /></Link></Box>
                <Box className='b1'>
                    <Box><Image id='b3' src='https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BV0_500_x_500_V3.png?v=1653046371' alt='img' /></Box>
                    <Box><Image id='b4' src='https://cdn3.foxy.in/pictures/product/image/61210/252212/brave-essentials-roll-on-deodorant-50ml.png' alt='img' /></Box>
                    <Box><Image id='b5' src='https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_500_x_500_V3.png?v=1653046407' alt='img' /></Box>
                </Box>
                <Box className='b1'>
                    <Box><Image id='b6' src='https://tse3.mm.bing.net/th?id=OIP.MXCVkIXy4OWu7PhKXrXgRAHaHa&pid=Api&P=0' alt='img' /></Box>
                    <Box><Image id='b7' src='https://st2.depositphotos.com/27760072/49314/v/600/depositphotos_493140188-stock-illustration-wish-list-icon-heart-with.jpg' alt='img' /></Box>
                    <Box><Cart/></Box>
                </Box>
            </Box>
            <Box mt='20px'mb='10px' w="80%" ml='10%'><Nav/></Box>
            
            <Box w="80%" ml='10%'><hr/></Box>
           </Box>
        </Box>
    )
}