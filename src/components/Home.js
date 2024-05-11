import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import image1 from "../images/healthy-dairy-cows-feeding-on-600nw-1925688962.webp";
import image2 from "../images/maxresdefault.jpg";

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="Farm" />
        <Carousel.Caption style={{ textAlign: "left" , fontWeight: "bold"}}>
          <h3>Welcome to Our Farm</h3>
          <p>
            Our farm is dedicated to providing high-quality dairy products and
            ensuring the well-being of our animals. We prioritize sustainable
            practices and ethical treatment of animals.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Animals" />
        <Carousel.Caption>
          <h3>Our Happy Animals</h3>
          <p>
            Our animals are cared for with love and respect. We strive to create
            a healthy and natural environment where they can thrive and produce
            the finest milk and dairy products.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
