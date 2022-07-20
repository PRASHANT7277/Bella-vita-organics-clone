import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
        <Navbar/>
        <Footer/>
        </BrowserRouter>
      
      </ChakraProvider>
     
      
    </div>
  );
}

export default App;
