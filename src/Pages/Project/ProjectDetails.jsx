import React from "react";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic5.png";
import banner from "../../assets/Banner/pic1.jpg";
import AboutProject from "./AboutProject";
const ProjectDetails = () => {
  const bannerContent = {
    heading: "Project",
    afterPage: "home",
    beforePage: "project",
    banner: `${banner}`,
    banner_imag: `${bannerImg}`,
  };
  return (
    <>
      <AllComponentTopBanner bannerContent={bannerContent} />
      <AboutProject />
    </>
  );
};

export default ProjectDetails;
