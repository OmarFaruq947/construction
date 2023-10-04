import React from "react";
import banner2 from "../../assets/home2/banner2.jpg";
import cardImg from "../../assets/our_services/services_info.jpg";

const Architecture = () => {
  return (
    <div className="my-10">
      <div className="relative flex flex-col text-center w-full">
        <img src={banner2} alt="" className="w-full h-[780px] lg:h-[500px]" />
        <span className="absolute top-0 left-0 inset-0 bg-secondary opacity-90 "></span>
        <div className="lg:flex justify-center items-center gap-10  absolute top-16 mx-5 text-left">
          <div className="lg:w-2/5">
            <h1 className="text-2xl lg:text-4xl text-white font-bold mt-3">
              Construction Services With <br />
              Architectural <span className="text-brand">Expertise!</span>
            </h1>
            <p className="my-8 text-white font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, iste, amet necessitatibus exercitationem natus facere
              sint dolorum rerum numquam asperiores quod soluta explicabo sunt
              nobis repellendus? Perspiciatis fugit deserunt dolore.
            </p>
            <a
              href="/"
              className="relative inline-flex items-center justify-start px-4 py-2 mb-10 overflow-hidden font-medium transition-all bg-brand rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                GET A QUOTE
              </span>
            </a>
          </div>
          <div>
            <img src={cardImg} alt="" className="max-h-[350px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
