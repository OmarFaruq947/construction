import React from "react";
import Banner from "../Home2/Banner";
import Info2 from "../Home2/Info2";
import MissionAndVision from "../MissionAndVision/MissionAndVision";
import Testimonial from "../Testimonial/Testimonial";
import "./Home2.css";
import OurClients from "./OurClients/OurClients";
import States from "./States/States";

const Home2 = () => {
  return (
    <>
      <Banner />
      <MissionAndVision />
      <States />
      <Info2 />
      <Testimonial />
      <OurClients />
    </>
  );
};

export default Home2;
