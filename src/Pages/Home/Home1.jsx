import React from "react";
import MissionAndVision from "../MissionAndVision/MissionAndVision";
import Testimonial from "../Testimonial/Testimonial";
import Achievements from "./Achievements/Achievements";
import Info from "./Info";
import OurClients from "./OurClients/OurClients";
import OurServices from "./OurServices/OurServices";
import BannerSlider from "./Slider/BannerSlider";
import States from "./States/States";

const Home1 = () => {
  return (
    <>
      <BannerSlider />
      <MissionAndVision />
      <OurServices />
      <Achievements />
      <States />
      <Testimonial />
      <Info />
      <OurClients />
    </>
  );
};

export default Home1;
