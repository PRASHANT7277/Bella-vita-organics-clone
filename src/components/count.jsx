import { Box,Button } from "@chakra-ui/react";

export default function count(){
    return(
        <><Box display="flex" h='42px' border='1px solid black'>
            <Button bgColor='white' fontSize="25px">-</Button>
            <Button bgColor='white' fontSize="15px">1</Button>
            <Button bgColor='white' fontSize="25px">+</Button>
        </Box>
        </>
    )
}