import React from "react";
import BTN from "../../components/button/BTN";

const PricingInfo = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col  sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-brand sm:text-4xl md:mx-auto">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p class="text-base text-indigo-100 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
              <div>
                <BTN link="/booking" innerText="Book Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingInfo;
