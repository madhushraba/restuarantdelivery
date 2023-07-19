import React from "react";

import "../../styles/serve.css";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: 'https://images.pexels.com/photos/7322199/pexels-photo-7322199.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: 'https://media.istockphoto.com/id/1373129580/photo/pepperoni-pizza.jpg?b=1&s=612x612&w=0&k=20&c=LH7OLAonkx0qbuSsWdCx2_4iPdqGxXhAICT8-pgGFzw=',
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

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
        <div className="serv">
          {featureData.map((item, index) => (
            <div  className="service">
              <div key={index} className="ser">
                <img
                  src={item.imgUrl}
                  alt="feature-img"
                  className="imgserve"
                />
                <h5 className=" sertitle">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default Serve;
