import { Routes, Route } from "react-router-dom"
 function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    );
  }
  