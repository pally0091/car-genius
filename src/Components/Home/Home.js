import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import ServiceArea from "./ServiceArea/ServiceArea";
import ContactInfo from "./ContactInfo/ContactInfo";
import PopularProduct from "./PopulaProducts/PopularProduct";
import Team from "./Team/Team";
import Feature from "./Feature/Feature";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mt-32 p-10">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ServiceArea></ServiceArea>
      <ContactInfo></ContactInfo>
      <PopularProduct></PopularProduct>
      <Team></Team>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
