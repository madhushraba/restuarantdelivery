import React from "react";

import { Container, Row, Col } from "reactstrap";

// import categoryImg01 from "../../../assets/images/category-01.png";
// import categoryImg02 from "../../../assets/images/category-02.png";
// import categoryImg03 from "../../../assets/images/category-03.png";
// import categoryImg04 from "../../../assets/images/category-04.png";

import "../../styles/category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    display: "Pizza",
    imgUrl: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },

  {
    display: "Asian Food",
    imgUrl: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },

  {
    display: "Mughlai",
    imgUrl: 'https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Category = () => {
  return (
    <Container>
      <div className="cat">
      {/* <Row> */}
        {categoryData.map((item, index) => (
          // <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item ">
              <div className="category_img">
                <img src={item.imgUrl} className="imgcat" alt="category__item" />
              </div>
              <h4>{item.display}</h4>
            </div>
          // </Col>
        ))}
      {/* </Row> */}
      </div>
    </Container>
  );
};

export default Category;