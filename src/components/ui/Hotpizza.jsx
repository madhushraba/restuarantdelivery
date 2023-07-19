import React, { useState } from "react";

import "../../styles/hotpizza.css";
// import ProductCard from "./ProductCard";
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
      <div className="hotpizz">
        
        <div className="ser">
          <img className="imghot" src="https://images.pexels.com/photos/16962445/pexels-photo-16962445/free-photo-of-beef-burgers-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" imgg" />
          <h4>Double Cheese Margherita</h4>
          <p>Lorem ipsum dolor sit.</p>
          <Button>+cart</Button>
        </div>
        <div className="ser">
          <img className="imghot" src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" imgg" />
          <h4>Royal Cheese Burger</h4>
          <p>Lorem ipsum dolor sit.</p>
          <Button>+cart</Button>
        </div>
        <div className="ser">
          <img className="imghot" src="https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" imgg" />
          <h4>Pizza With Mushroom</h4>
          <p>Lorem ipsum dolor sit.</p>
          <Button>+cart</Button>
        </div>
        <div className="ser">
          <img className="imghot" src="https://images.pexels.com/photos/2067403/pexels-photo-2067403.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" imgg" />
          <h4>Pizza With Mushroom</h4>
          <p>Lorem ipsum dolor sit.</p>
          <Button>+cart</Button>
        </div>
        
       
      </div>
    </div>
  );
};

export default Hotpizza;
