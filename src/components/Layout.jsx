// import React from 'react'

// const Layout = () => {
//   return (
//     <div>Layout</div>
//   )
// }

// export default Layout
import React from "react";

import Navbar from "../components/Navbar";
// import Footer from "../Footer/Footer.jsx";
import Routes from "../routes/routers";
// import Carts from "../UI/cart/Carts.jsx";
// import { useSelector } from "react-redux";
import Footer from "./Footer";

const Layout = () => {
  // const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Navbar />

      {/* {showCart && <Carts />} */}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
