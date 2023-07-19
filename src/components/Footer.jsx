import React from "react";

import "../styles/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footers">
        <div className="leftx">
          <img src="https://i.pinimg.com/736x/54/b1/6a/54b16ad8feba1c907247881ea4e50313.jpg" className="imgnav" alt="logo" />
          <h3>Tastyy zomalina</h3>
          <p>
           Your retreat and luxury dine in experience
          </p>
        </div>
        <div className="leftmid">
          <h3>Delivery time</h3>
          <h4>sun -thu</h4>
          <p>10.00am-12.00pm</p>
          <h4>fri -sat</h4>
          <p>11.00am-4.00pm</p>
        </div>
        <div className="rightmid">
          <h3>Contact</h3>
          <h5>location:gfdsx</h5>
          <h5>Phone:3546yu65i76</h5>
          <h5>email:543212@3423.gefd</h5>
        </div>
        <div className="rightx">
          <h3>Newsletter</h3>
          <p>subscribe to our newsletter</p>
          <form>
            <input type="email" className="inpform" placeholder="Enter email..." />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
