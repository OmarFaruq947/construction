import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { default as banner } from "../../assets/Shop-img/halmet2.jpg";
import ShopDetailsCard from "./ShopDetailsCard";

const ShopDetails = () => {
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
                  <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
                    Shop details
                  </h2>
                </div>
                <div className="flex space-x-2 items-center text-xl">
                  <Link to="/">
                    <h1 className="hover:translate-x-[-10px] duration-500 uppercase">
                      Home
                    </h1>
                  </Link>
                  <h1>/</h1>
                  <Link to="/shop">
                    <h1 className="hover:translate-x-2 duration-500 uppercase">
                      Shop
                    </h1>
                  </Link>
                </div>
              </div>

              <div class="w-full max-w-xl xl:px-8 xl:w-5/12 absolute  left-2/3 hidden lg:block md:block">
                <Icon
                  icon="bytesize:cart"
                  width="300"
                  className="text-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-20">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 pt-10">
          <div className="rounded-lg md:w-2/3 ">
            <ShopDetailsCard />
            <ShopDetailsCard />
            <ShopDetailsCard />

            {/* <ShopDetailsCard /> */}
          </div>

          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg bg-white border border-brand p-6 md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-accent">Selected Items</p>
              <p className="text-accent">1</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-accent">Subtotal</p>
              <p className="text-accent">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-accent">Shipping</p>
              <p className="text-accent">$4.99</p>
            </div>
            <hr className="my-4 " />
            <div className="flex justify-between">
              <p className="text-lg font-bold text-secondary">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold text-secondary">
                  $134.98 USD
                </p>
                <p className="text-sm text-accent">including VAT</p>
              </div>
            </div>
            <button className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-bold text-[14px] transition-all bg-brand rounded hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Confirm order
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
