import { Routes, Route } from "react-router-dom"
import Signup     from "./signup";
import Login from "./login";
import Homepage from "./homepage";
import Product from "./product";
import FCart from "./fcart"
 export default function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<FCart />} />
      </Routes>
    );
  }
  