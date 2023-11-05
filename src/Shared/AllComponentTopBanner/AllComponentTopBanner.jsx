import React from "react";
import { Link } from "react-router-dom";

const AllComponentTopBanner = ({ bannerContent }) => {
  
  const {banner, heading, afterPage, beforePage, banner_imag } = bannerContent

  return (
    <>
      <div class="relative">
        <img
          src={banner}
          class="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="absolute inset-0 bg-opacity-100 bg-gradient-to-r from-secondary"></div>

        <div class="relative  ">
          <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex  items-center  justify-between sm:mx-auto">
              <div className=" bg-brand  px-20 py-10 rounded-md  grid space-y-3">
                <div className="text-center text-5xl uppercase">
                  <h1>{heading}</h1>
                </div>
                <div className="flex space-x-2 items-center text-xl">
                  <Link to="/">
                    <h1 className="hover:translate-x-[-10px] duration-500 uppercase">
                      {afterPage}
                    </h1>
                  </Link>
                  <h1>/</h1>
                  <Link to="/blogGrid">
                    <h1 className="hover:translate-x-2 duration-500 uppercase">
                      {beforePage}
                    </h1>
                  </Link>
                </div>
              </div>

              <div class="w-full max-w-xl xl:px-8 xl:w-5/12 absolute -top-5 left-2/3 hidden lg:block md:block">
                <img
                  className="max-h-[348px] max-w-[330px]"
                  src={banner_imag}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllComponentTopBanner;
