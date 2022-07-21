import { Routes, Route } from "react-router-dom"
import Signup     from "./signup";
 function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    );
  }
  