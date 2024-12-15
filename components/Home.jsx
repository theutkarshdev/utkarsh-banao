import React from "react";
import Header from "./HomePage/Header";
import Explore from "./HomePage/Explore";
import AddHome from "./HomePage/AddHome";
import Testimonial from "./HomePage/Testimonial";
import HobbyCommunity from "./HomePage/HobbyCommunity";

const Home = () => {
  return (
    <>
      <Header />
      <Explore />
      <AddHome />
      <Testimonial />
      <HobbyCommunity />
    </>
  );
};

export default Home;
