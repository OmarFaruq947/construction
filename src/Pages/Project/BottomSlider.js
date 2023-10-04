import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import project1 from "../../assets/blogBanner.jpg";
import project2 from "../../assets/pic100.jpg";
import project3 from "../../assets/Menu picture/pexels-nishant-aneja-9148611.jpg";
import project4 from "../../assets/pic200.jpg";
import project5 from "../../assets/blogpic/pic-5.jpg";
import project6 from "../../assets/blogpic/pic3.jpg";
import project7 from "../../assets/blogpic/pic6.jpg";
import project8 from "../../assets/blogpic/pic4.jpg";

import { Navigation, Autoplay } from "swiper";

const BottomSlider = () => {
  return (
    <div className="h-80">
      <>
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center group"
              style={{
                backgroundImage: `url(${project1})`,
              }}
            >
              <div className="flex justify-center items-center h-full bg-yellow-300 opacity-0 group-hover:opacity-70 duration-500">
                <button className="px-10 py-3 rounded-md text-lg bg-secondary text-white  hover:bg-black">
                  More Info
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center group"
              style={{
                backgroundImage: `url(${project2})`,
              }}
            >
              <div className="flex justify-center items-center h-full bg-yellow-300 opacity-0 group-hover:opacity-70 duration-500">
                <button className="px-10 py-3 rounded-md text-lg bg-secondary text-white  hover:bg-black">
                  More Info
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center group"
              style={{
                backgroundImage: `url(${project3})`,
              }}
            >
              <div className="flex justify-center items-center h-full bg-yellow-300 opacity-0 group-hover:opacity-70 duration-500">
                <button className="px-10 py-3 rounded-md text-lg bg-secondary text-white  hover:bg-black">
                  More Info
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center group"
              style={{
                backgroundImage: `url(${project4})`,
              }}
            >
              <div className="flex justify-center items-center h-full bg-yellow-300 opacity-0 group-hover:opacity-70 duration-500">
                <button className="px-10 py-3 rounded-md text-lg bg-secondary text-white  hover:bg-black">
                  More Info
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center group"
              style={{
                backgroundImage: `url(${project5})`,
              }}
            >
              <div className="flex justify-center items-center h-full bg-yellow-300 opacity-0 group-hover:opacity-70 duration-500">
                <button className="px-10 py-3 rounded-md text-lg bg-secondary text-white  hover:bg-black">
                  More Info
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center group"
              style={{
                backgroundImage: `url(${project6})`,
              }}
            >
              <div className="flex justify-center items-center h-full bg-yellow-300 opacity-0 group-hover:opacity-70 duration-500">
                <button className="px-10 py-3 rounded-md text-lg bg-secondary text-white  hover:bg-black">
                  More Info
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center group"
              style={{
                backgroundImage: `url(${project7})`,
              }}
            >
              <div className="flex justify-center items-center h-full bg-yellow-300 opacity-0 group-hover:opacity-70 duration-500">
                <button className="px-10 py-3 rounded-md text-lg bg-secondary text-white  hover:bg-black">
                  More Info
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center group"
              style={{
                backgroundImage: `url(${project8})`,
              }}
            >
              <div className="flex justify-center items-center h-full bg-yellow-300 opacity-0 group-hover:opacity-70 duration-500">
                <button className="px-10 py-3 rounded-md text-lg bg-secondary text-white  hover:bg-black">
                  More Info
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default BottomSlider;
