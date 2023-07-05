import React from "react";

import "../../styles/serve.css";
const Serve = () => {
  return (
    <div className="servepage">
      <div className="serve">
        <div className="servebox">
          <h2 className="spanhome">What We Serve</h2>
          <br></br>

          <h1>
            Just sit back at home<br></br> we will
            <span className="spanhome"> take care</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br>{" "}
            Soluta veniam exercitationem vel, labore impedit architecto{" "}
            <br></br>
            ex aliquid corrupti tenetur, unde cumque quod.
          </p>
        </div>

        <div className="service">
          <div className="ser">
            <img className="imgserve" src="fvf" alt=" imgg" />
            <h4>Quick Delivery</h4>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="ser">
            <img className="imgserve" src="fvf" alt=" imgg" />
            <h4>Super Dine In</h4>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="ser">
            <img className="imgserve" src="fvf" alt=" imgg" />
            <h4>Easy Takeaway</h4>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;
