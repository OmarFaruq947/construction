import Carousel, {
  autoplayPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";
import client1 from "../../assets/CompanyLogo/C-Logo1.png";
import client2 from "../../assets/CompanyLogo/C-Logo2.png";
import client3 from "../../assets/CompanyLogo/C-Logo3.png";
import client4 from "../../assets/CompanyLogo/C-Logo4.png";
import client5 from "../../assets/CompanyLogo/C-Logo5.png";

const PricingSlider = () => {
  return (
    <>
      {/* pricing slider header start */}
      <div className="flex flex-col text-center w-full mb-20 pt-14">
        <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
          OUR SUBSCRIBED
          <span className="text-brand"> CLIENTS</span>
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
          Construction is a general term meaning the art and science to form
          objects systems organizations, and comes from Latin construction and
          Old French construction. To construct is the verb: the act of
          building, and the noun is construction.
        </p>
      </div>
      {/* pricing slider header end */}
      <Carousel
        plugins={[
          "centered",
          "infinite",
          "arrows",
          {
            resolve: autoplayPlugin,
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              "centered",
              "infinite",
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
          900: {
            plugins: [
              "centered",
              "infinite",
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 6,
                },
              },
            ],
          },
        }}
      >
        <div className="px-2">
          <img src={client1} />
        </div>
        <div className="px-2">
          <img src={client2} />
        </div>
        <div className="px-2">
          <img src={client3} />
        </div>

        <div className="px-2">
          <img src={client4} />
        </div>

        <div className="px-2">
          <img src={client5} />
        </div>
      </Carousel>
    </>
  );
};

export default PricingSlider;
