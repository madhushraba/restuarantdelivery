import React, { useState } from "react";
import "../../styles/popfood.css";
import fakedata from "../../utils/fakedata";
import ProductCard from "./ProductCard";

import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { TbCheese } from "react-icons/tb";

const Popfood = () => {
  const [allProducts, setAllProducts] = useState(fakedata);

  const [category, setCategory] = useState("ALL");

  return (
    <div>
      <section>
        <div className="popfilter">
          <div className="pophead">
            <h2>Popular Foods</h2>
          </div>

          <div>
            <div className="food_category ">
              <button
                className={`all__btn  ${
                  category === "ALL" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("ALL")}
              >
                All
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "BURGER" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("BURGER")}
              >
                {/* <img src='' alt="" /> */}
                <GiHamburger />
                Burger
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "PIZZA" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("PIZZA")}
              >
                {/* <img src={foodCategoryImg02} alt="" /> */}
                <FaPizzaSlice />
                Pizza
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "BREAD" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("BREAD")}
              >
                {/* <img src={foodCategoryImg03} alt="" /> */}
                <TbCheese />
                Bread
              </button>
            </div>
          </div>

          {allProducts.map((item) => (
            <div key={item.id} className="mt-5">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Popfood;
