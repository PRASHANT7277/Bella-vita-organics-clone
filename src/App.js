import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

import AllRoutes from './components/allroute';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
        <AllRoutes/>
        </BrowserRouter>
      
      </ChakraProvider>
     
      
    </div>
  );
}

export default App;
