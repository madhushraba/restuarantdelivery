import React from "react";

import "../../styles/whyus.css";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Whyus = () => {
  return (
    <div className="why">
      <div className="whyleft">
        <img
        className="imgwhy"
          src="https://images.pexels.com/photos/4077208/pexels-photo-4077208.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="whyright">
        <div className="rightsub">
          <h2 className="spanhome">Why Tasty Treat?</h2>
          <p>
            sit amet consectetur adipisicing elit. Dolorum, minus. Tempora
            reprehenderit a corporis velit, laboriosam vitae ullam, repellat
            illo sequi odio esse iste fugiat dolor, optio incidunt eligendi
            deleniti!
          </p>
        </div>
        <div className="rightlist">
          <p className="whyp">
            <RiCheckboxCircleLine />
            Fresh and tasty foods
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            voluptatibus.
          </p>
        </div>
        <div className="rightlist">
          <p className="whyp">
            <RiCheckboxCircleLine />
            Quality support
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            voluptatibus.
          </p>
        </div>
        <div className="rightlist">
          <p className="whyp">
            <RiCheckboxCircleLine />
            Order from any location
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
