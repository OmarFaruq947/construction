import React from "react";
import bannerImg1 from "../../../assets/SliderImg/banner1.jpg";
import bannerImg2 from "../../../assets/SliderImg/banner2.jpg";
import bannerImg3 from "../../../assets/SliderImg/banner5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

// import required modules
import { Link } from "react-router-dom";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const BannerSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide className="">
          <div className="relative w-[100%] flex items-center">
            <div>
              <img
                alt=""
                className="w-full max-h-screen md:w-96 sm:w-full"
                src={bannerImg1}
              />

              <div className="absolute inset-0 bg-opacity-100 bg-gradient-to-r from-secondary"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-8">
                <h1 className="mb-3 lg:text-4xl font-serif font-semibold text-white tracking-widest">
                  We Provide Professional
                </h1>

                <h1 className="lg:text-6xl text-2xl font-serif font-semibold text-white mb-6 tracking-widest">
                  <span className="uppercase text-secondary">construction</span>{" "}
                  services
                </h1>

                <Link
                  to="/"
                  className="text-[14px] relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-brand rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                    Go to Services
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide className="">
          <div className="relative w-[100%] flex items-center">
            <div>
              <img
                alt=""
                className="lg:w-full max-h-screen md:w-96 sm:w-full"
                src={bannerImg2}
              />

              <div className="absolute inset-0 bg-opacity-100 bg-gradient-to-r from-secondary"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-8">
                <h1 className="mb-3  lg:text-4xl font-serif font-semibold text-white tracking-widest">
                  We Provide Professional
                </h1>

                <h1 className="text-2xl lg:text-6xl font-serif font-semibold text-white mb-6 tracking-widest">
                  <span className="uppercase text-secondary">construction</span>{" "}
                  services
                </h1>

                <Link
                  to="/"
                  className="text-[14px] relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-brand rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                    Go to Services
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide className="">
          <div className="relative w-[100%] flex items-center">
            <div>
              <img
                alt=""
                className="lg:w-full max-h-screen md:w-96 sm:w-full"
                src={bannerImg3}
              />

              <div className="absolute inset-0 bg-opacity-100 bg-gradient-to-r from-secondary"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-8">
                <h1 className="mb-3 lg:text-4xl font-serif font-semibold text-white tracking-widest">
                  We Provide Professional
                </h1>

                <h1 className="lg:text-6xl text-2xl font-serif font-semibold text-white mb-6 tracking-widest">
                  <span className="uppercase text-secondary">construction</span>{" "}
                  services
                </h1>

                <Link
                  to="/"
                  className="text-[14px] relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-brand rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                    Go to Services
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
