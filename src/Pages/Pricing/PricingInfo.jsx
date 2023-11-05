import React from "react";
import { Link } from "react-router-dom";

const PricingInfo = () => {
  return (
    <>
      <div class="bg-secondary">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div class="flex flex-col  sm:text-center sm:mb-0">
              <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-brand sm:text-4xl md:mx-auto">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p class="text-base text-indigo-100 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
              <div>
                <Link
                  to="/"
                  className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-brand rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingInfo;
