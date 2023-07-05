import React from "react";
import "../../styles/nav.css";

import { NavLink, Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { PiHamburgerBold } from "react-icons/pi";

const nav_items = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  return (
    <div className="wrap">
      <div className="leftlogo">
        <Link to="/home">
          <img
            className="imgnav"
            src="https://i.pinimg.com/736x/54/b1/6a/54b16ad8feba1c907247881ea4e50313.jpg"
            alt="delix ."
          />
        </Link>
      </div>
      <div className="midpages">
        {nav_items.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={(navClass) => (navClass.isActive ? "active_menu" : "")}
          >
            <div className="li">{item.display}</div>
          </NavLink>
        ))}
      </div>
      <div className="right">
        <span className="cart_icon icon">
          <Link to="/cart">
            <BsCart />
          </Link>
          <span className="cart__badge">{/* {totalQuantity} */}5</span>
        </span>

        <span className="user icon">
          <Link to="/login">
            <AiOutlineUser />
          </Link>
        </span>

        <span className="mobile_menu icon">
          <PiHamburgerBold />
        </span>
      </div>
    </div>
  );
};

export default Nav;
