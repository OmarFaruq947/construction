import React from "react";
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
      <OurServices />
      <Achievements />
      <States />
      <Info />
      <OurClients />
    </>
  );
};

export default Home1;
