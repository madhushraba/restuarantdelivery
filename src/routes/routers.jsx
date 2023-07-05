import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Allfood from "../pages/Allfood";
import Cart from "../pages/Cart";
import Fooddetails from "../pages/Fooddetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Home2 from "../pages/Home2";
// import Home from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home2 />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/foods" element={<Allfood />} />
      <Route path="/foods/:id" element={<Fooddetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers