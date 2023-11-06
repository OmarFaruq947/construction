import React from "react";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic6.png";
import banner from "../../assets/Banner/pic1.jpg";
import Category1 from "./ProductCategory/Category1";
import Category2 from "./ProductCategory/Category2";
import Category3 from "./ProductCategory/Category3";

const Shop = () => {
  const bannerContent = {
    heading: "Shop",
    afterPage: "home",
    beforePage: "shop",
    banner: `${banner}`,
    banner_imag: `${bannerImg}`,
  };
  return (
    <>
      <AllComponentTopBanner bannerContent={bannerContent} />

      {/* Category1 */}

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="flex flex-col text-center w-full mb-8 pt-14">
          <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
            All
            <span className="text-brand"> tools</span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
            Construction is a general term meaning the art and science to form
            objects systems organizations, and comes from Latin construction and
            Old French construction. To construct is the verb: the act of
            building, and the noun is construction.
          </p>
        </div>
        <Category1 />
      </div>

      {/* Category2 */}

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="flex flex-col text-center w-full mb-8 pt-14">
          <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
            All
            <span className="text-brand"> products</span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
            Construction is a general term meaning the art and science to form
            objects systems organizations, and comes from Latin construction and
            Old French construction. To construct is the verb: the act of
            building, and the noun is construction.
          </p>
        </div>
        <Category2 />
      </div>

      {/* Category3 */}

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="flex flex-col text-center w-full mb-8 pt-14">
          <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
            All
            <span className="text-brand"> products</span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
            Construction is a general term meaning the art and science to form
            objects systems organizations, and comes from Latin construction and
            Old French construction. To construct is the verb: the act of
            building, and the noun is construction.
          </p>
        </div>
        <Category3 />
      </div>

      <div className="">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="px-10 py-20 text-center transition duration-300 transform bg-secondary  hover:bg-brand rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p class="font-semibold text-gray-200">
                Construction products are essential components
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-secondary  hover:bg-brand rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p class="font-semibold text-gray-200">
                These products encompass a wide range of materials
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-secondary  hover:bg-brand rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p class="font-semibold text-gray-200">
                Cement is a vital construction product used in concrete
                production
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-secondary  hover:bg-brand rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p class="font-semibold text-gray-200">
                Bricks and timber are traditional construction materials
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-secondary  hover:bg-brand rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p class="font-semibold text-gray-200">
                Glass is employed extensively in modern construction for windows
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-secondary  hover:bg-brand rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p class="font-semibold text-gray-200">
                Insulation materials, such as foam, mineral wool, and fiberglass
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-secondary  hover:bg-brand rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p class="font-semibold text-gray-200">
                Roofing materials, including tiles, shingles, and metal sheets
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-secondary  hover:bg-brand rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p class="font-semibold text-gray-200">
                Electrical components, such as wiring, switches, and outlets
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
