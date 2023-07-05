import React from "react";
import Button from "../utils/Button";
import "../styles/home2.css";
import { Link } from "react-router-dom";

import { AiFillCar } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import Category from "../components/ui/Category";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import Hotpizza from "../components/ui/Hotpizza";
import Whyus from "../components/ui/Whyus";
import Popfood from "../components/ui/Popfood";
import Serve from "../components/ui/Serve";

const Home2 = () => {
  return (
    <>
      <div className="home">
        <div className="homeleft">
          <div className="hero__content  ">
            <h5 className="mb-3">Easy way to make an order</h5>

            <h1 className="mb-4 hero__title">
              <span className="spanhome">HUNGRY?</span> Just wait... <br />{" "}
              instant delivery at
              <span className="spanhome"> your door</span>
            </h1>

            <p className="homep">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              magni delectus tenetur autem, sint veritatis!
            </p>

            <div className="btns ">
              <Button>Order now</Button>
              <Link to="/foods">
                <Button className="btnx">
                  <p>See all foods</p>
                </Button>
              </Link>
            </div>

            <div className=" hero_service">
              <p>
                <span className="shipping_icon">
                  <AiFillCar />
                </span>
                No shipping charge
              </p>

              <p>
                <span className="shipping_icon">
                  <RiSecurePaymentLine />
                </span>
                100% secure checkout
              </p>
            </div>
          </div>
        </div>
        <div className="homeright">
          <img
            className="imghome"
            src="https://img.freepik.com/free-vector/flat-design-people-taking-pictures-food_52683-120256.jpg?size=626&ext=jpg&ga=GA1.2.1192480388.1688548329&semt=ais"
            alt=""
          />
        </div>
      </div>
      <Category />
      <Serve />
      <Popfood />
      <Whyus />
      <Hotpizza />
      <TestimonialSlider />
      <Footer />
    </>
  );
};

export default Home2;
