import React, { useState } from "react";

import "../../styles/hotpizza.css";
import ProductCard from "./ProductCard";
import Button from "../../utils/Button";
const Hotpizza = () => {
  const [hotPizza, setHotPizza] = useState([]);

  return (
    <div className="hotpiz">
      {/* <section>
        <div>
          <div>
            <div className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </div>

            {hotPizza.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
               
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <h2>Hot Pizza</h2>
      <div className="service">
        
        <div className="ser">
          <img className="imgserve" src="fvf" alt=" imgg" />
          <h4>Double Cheese Margherita</h4>
          <p>Lorem ipsum dolor sit.</p>
          <Button>+cart</Button>
        </div>
        <div className="ser">
          <img className="imgserve" src="fvf" alt=" imgg" />
          <h4>Royal Cheese Burger</h4>
          <p>Lorem ipsum dolor sit.</p>
          <Button>+cart</Button>
        </div>
        <div className="ser">
          <img className="imgserve" src="fvf" alt=" imgg" />
          <h4>Pizza With Mushroom</h4>
          <p>Lorem ipsum dolor sit.</p>
          <Button>+cart</Button>
        </div>
        <div className="ser">
          <img className="imgserve" src="fvf" alt=" imgg" />
          <h4>Pizza With Mushroom</h4>
          <p>Lorem ipsum dolor sit.</p>
          <Button>+cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Hotpizza;
