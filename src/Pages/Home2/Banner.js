import React from "react";
import { Link } from "react-router-dom";
import banner2 from "../../assets/blogBanner.jpg";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img src={banner2} alt="" className="w-full h-[400px] lg:h-[600px]" />
        <div className="absolute inset-0 bg-opacity-100 bg-gradient-to-r from-secondary w-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-8">
          <h1 className="mb-3 text-2xl lg:text-4xl font-serif font-semibold text-white tracking-widest">
            We Provide Professional
          </h1>

          <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-white mb-6 tracking-widest">
            construction services
          </h1>

          <Link
            to="/servicesDetails"
            className="text-[14px] relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-brand rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
              Go to Services
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
