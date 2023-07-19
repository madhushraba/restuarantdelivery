import React from 'react'
import Nav from './components/nav/Nav'
import Home2 from './pages/Home2'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Allfood from './pages/Allfood'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import Fooddetails from './pages/Fooddetails'
import { Route, Routes } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <div div className="mm">
      <Nav />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/foods" element={<Allfood />} />
        <Route path="/foods/:id" element={<Fooddetails />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
    </div>
  )
}

export default Root