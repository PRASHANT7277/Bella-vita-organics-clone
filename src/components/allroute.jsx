import { Routes, Route } from "react-router-dom"
import Signup     from "./signup";
import Login from "./login";
import Homepage from "./homepage";
 export default function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/login" element={<Login />}  />
       
        
      </Routes>
    );
  }
  