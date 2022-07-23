import { Text,Button,Box } from "@chakra-ui/react"
import { useState} from "react";
import axios from "axios"
 
function handleAdd(elem){
    axios({
        url: `https://prashant-json-server.herokuapp.com/procart`,
        method: "POST",
        data: elem
      });
 alert("Item added to cart");

}

export default function Card (){
    const [data,setData]=useState([])
    
    // useEffect(() => {
    //     handleTodo();
    
    //   }, []);
    
    // function handleTodo() {
        
        axios.get("https://prashant-json-server.herokuapp.com/pro")
          .then((res) => {
            setData(res.data);
            
          })
          .catch((err) => {
            console.log(err);
           
          });
     // }
      
        return(
        <>
        
          {data.map((elem)=>(
            <Box mt='20px' >
                 <Box  h="250px" w='300px'><img src={elem.imgurl} alt="..." /></Box>
                <Box w='300px' h="30px"><Text mt='50px' fontWeight='semibold'>{elem.title}</Text></Box>
               <Box w='300px' h="30px"> <Text mt='20px' fontSize='15px'>{elem.desc}</Text></Box>
            
                <Box justifyContent='space-between' display='flex' w='230px' mt='15px'>
               <Box display='flex'><Text>₹{elem.price_off}</Text> <Text ml='10px' textDecoration='line-through'>₹{elem.price_actual}</Text> </Box>
               <Box display='flex'><Text fontWeight='semibold' fontSize='17px'>{elem.ratings}</Text> <Box color='mineralgreen'><span class="fa fa-star"></span></Box></Box> 
                </Box>
                <Button mt='10px' pt='3px' pb='3px' pr='70px' pl='70px' bgColor="#475d4b" color='white' onClick={()=>handleAdd(elem)} >ADD TO CART</Button>
        </Box>
          ))} 
        </>
    )
}