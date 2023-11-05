import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";
import CLogo1 from "../../../assets/CompanyLogo/C-Logo1.png";
import CLogo2 from "../../../assets/CompanyLogo/C-Logo2.png";
import CLogo3 from "../../../assets/CompanyLogo/C-Logo3.png";
import CLogo4 from "../../../assets/CompanyLogo/C-Logo4.png";
import CLogo5 from "../../../assets/CompanyLogo/C-Logo5.png";
import "./OurClients.css";

const OurClients = () => {
  return (
    <>
      <div className="flex flex-col text-center w-full mb-20 pt-14">
        <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
          OUR
          <span className="text-brand"> Clients</span>
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
          Construction is a general term meaning the art and science to form
          objects systems organizations, and comes from Latin construction and
          Old French construction. To construct is the verb: the act of
          building, and the noun is construction.
        </p>
      </div>

      <Carousel
        className=""
        plugins={[
          "centered",
          "infinite",
          {
            resolve: autoplayPlugin,

            options: {
              interval: 1500,
              // numberOfSlides: 4,
            },
          },
        ]}
        animationSpeed={1000}
      >
        <img className="w-40" src={CLogo1} />
        <img className="w-40" src={CLogo2} />
        <img className="w-40" src={CLogo3} />
        <img className="w-40" src={CLogo4} />
        <img className="w-40" src={CLogo5} />
      </Carousel>
    </>
  );
};
export default OurClients;
