import React from "react";
import productImag from "../../assets/Shop-img/cabol2.jpg";
const ShopDetailsCard = () => {
  return (
    <>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 border border-brand sm:flex sm:justify-start">
        <img src={productImag} alt="" className="w-full rounded-lg sm:w-40" />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold  text-brand">
              Construction Helmet
            </h2>
            <p className="mt-1 text-xs text-accent">36EU - 4US</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span className="cursor-pointer rounded-r bg-primary py-1 px-3 duration-100 hover:bg-secondary hover:text-brand border border-brand hover:border-secondary">
                -
              </span>
              <input
                className="h-8 w-8 border  text-center text-xs outline-none"
                type="number"
                defaultValue={0}
                min={0}
              />
              <span className="cursor-pointer  rounded-r bg-primary py-1 px-3 duration-100 hover:bg-secondary hover:text-brand border border-brand hover:border-secondary">
                +
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">$ 100 US</p>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:bg-secondary bg-brand text-white hover:text-brand rounded"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsCard;
