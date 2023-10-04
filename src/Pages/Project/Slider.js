import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../../assets/blogBanner.jpg";
import image2 from "../../assets/pic100.jpg";
import image3 from "../../assets/pic200.jpg";
import image4 from "../../assets/exclevetor.jpg";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

const Slider = () => {
  return (
    <div className="h-[600px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="w-full bg bg-cover bg-center bg-no-repeat h-full relative"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className=" text-white bg-brand bg-opacity-70 p-5 duration-500 absolute top-1/4 left-16 md:top-40 md:left-40 rounded-lg inline-block">
              <div className="h-auto w-80 md:w-96 space-y-3 ">
                <h1 className="text-5xl">Project Name Here</h1>
                <h5 className="uppercase   opacity-80 rounded">20% off</h5>
                <p className="text-2xl">$50000</p>
                <button className="bg-secondary px-4 py-2 rounded hover:opacity-100 opacity-80">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg bg-cover bg-center bg-no-repeat h-full relative"
            style={{
              backgroundImage: `url(${image2})`,
            }}
          >
            <div className=" text-white bg-brand bg-opacity-70 p-5 duration-500 absolute top-1/4 left-16 md:top-40 md:left-40 rounded-lg inline-block">
              <div className="h-auto w-80 md:w-96 space-y-3 ">
                <h1 className="text-5xl">Project Name Here</h1>
                <h5 className="uppercase   opacity-80 rounded">20% off</h5>
                <p className="text-2xl">$50000</p>
                <button className="bg-secondary px-4 py-2 rounded hover:opacity-100 opacity-80">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg bg-cover bg-center bg-no-repeat h-full relative"
            style={{
              backgroundImage: `url(${image3})`,
            }}
          >
            <div className=" text-white bg-brand bg-opacity-70 p-5 duration-500 absolute top-1/4 left-16 md:top-40 md:left-40 rounded-lg inline-block">
              <div className="h-auto w-80 md:w-96 space-y-3 ">
                <h1 className="text-5xl">Project Name Here</h1>
                <h5 className="uppercase   opacity-80 rounded">20% off</h5>
                <p className="text-2xl">$50000</p>
                <button className="bg-secondary px-4 py-2 rounded hover:opacity-100 opacity-80">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg bg-cover bg-center bg-no-repeat h-full relative"
            style={{
              backgroundImage: `url(${image4})`,
            }}
          >
            <div className=" text-white bg-brand bg-opacity-70 p-5 duration-500 absolute top-1/4 left-16 md:top-40 md:left-40 rounded-lg inline-block">
              <div className="h-auto w-80 md:w-96 space-y-3 ">
                <h1 className="text-5xl">Project Name Here</h1>
                <h5 className="uppercase   opacity-80 rounded">20% off</h5>
                <p className="text-2xl">$50000</p>
                <button className="bg-secondary px-4 py-2 rounded hover:opacity-100 opacity-80">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
