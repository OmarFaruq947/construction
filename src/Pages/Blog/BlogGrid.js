import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic2.png";
import banner from "../../assets/Banner/pic1.jpg";
import blogImage from "../../assets/blogpic/pic2.jpg";
import blogImage2 from "../../assets/blogpic/pic3.jpg";
import blogImage3 from "../../assets/blogpic/pic4.jpg";
import blogImage4 from "../../assets/blogpic/pic5.jpg";

const BlogGrid = () => {
  const bannerContent = {
    heading: "blog grid",
    afterPage: "home",
    beforePage: "blog grid",
    banner: `${banner}`,
    banner_imag: `${bannerImg}`,
  };
  return (
    <>
      <AllComponentTopBanner bannerContent={bannerContent} />
      {/* banner section */}

      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="lg:col-span-2">
            <section className="bg-white ">
              <div className="container px-6 py-10 mx-auto">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
                  {/* card one*/}
                  <div className="max-w-sm mx-auto hover:no-underline focus:no-underline m-5 border-2 border-solid  hover:border-brand rounded-md duration-300 shadow-lg   sm:block group ">
                    <img
                      role="presentation"
                      className="object-cover pb-4 w-full rounded  mx-auto group-hover:p-2 duration-500"
                      src={blogImage2}
                      alt="blogImage"
                    />
                    <div className="relative overflow-">
                      <div className="p-6 space-y-4 ">
                        <div className="relative group">
                          <div className="flex items-center">
                            <Icon icon="mdi:tag" className="text-brand" />
                            <h1 className="ml-2 font-bold text-xs hover:text-brand duration-200">
                              ARCHITECTURE
                            </h1>
                          </div>
                          <h3 className="py-3 text-2xl font-bold hover:underline text-secondary ">
                            Industrial Factory Building Equipment 2021
                          </h3>
                          <p className="text-gray-500 pb-7">
                            Mei ex aliquid eleifend forensibus, quo ad dicta
                            apeirian neglegentur, ex has tantas percipit
                            perfecto.
                          </p>
                          <div className=" flex items-center">
                            <button className="hover:translate-x-5 duration-700 font-bold text-sm ">
                              READ MORE{" "}
                            </button>
                            <Icon
                              icon="ph:arrow-right-duotone"
                              className="group-hover:translate-x-7 duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card 2*/}
                  <div className="max-w-sm mx-auto hover:no-underline focus:no-underline m-5 border-2 border-solid  hover:border-brand rounded-md duration-300 shadow-lg   sm:block group">
                    <img
                      role="presentation"
                      className="object-cover pb-4 w-full rounded mx-auto group-hover:p-2 duration-500"
                      src={blogImage3}
                      alt="blogImage"
                    />
                    <div className="relative overflow-">
                      <div className="p-6 space-y-4 ">
                        <div className="relative group">
                          <div className="flex items-center">
                            <Icon icon="mdi:tag" className="text-brand" />
                            <h1 className="ml-2 font-bold text-xs hover:text-brand duration-200">
                              ARCHITECTURE
                            </h1>
                          </div>
                          <h3 className="py-3 text-2xl font-bold hover:underline text-secondary ">
                            Industrial Factory Building Equipment 2021
                          </h3>
                          <p className="text-gray-500 pb-7">
                            Mei ex aliquid eleifend forensibus, quo ad dicta
                            apeirian neglegentur, ex has tantas percipit
                            perfecto.
                          </p>
                          <div className=" flex items-center">
                            <button className="hover:translate-x-5 duration-700 font-bold text-sm ">
                              READ MORE{" "}
                            </button>
                            <Icon
                              icon="ph:arrow-right-duotone"
                              className="group-hover:translate-x-7 duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card 3*/}
                  <div className="max-w-sm mx-auto hover:no-underline focus:no-underline m-5 border-2 border-solid  hover:border-brand rounded-md duration-300 shadow-lg   sm:block group">
                    <img
                      role="presentation"
                      className="object-cover pb-4 w-full rounded group-hover:p-2 duration-500 mx-auto"
                      src={blogImage4}
                      alt="blogImage"
                    />
                    <div className="relative overflow-">
                      <div className="p-6 space-y-4 ">
                        <div className="relative group">
                          <div className="flex items-center">
                            <Icon icon="mdi:tag" className="text-brand" />
                            <h1 className="ml-2 font-bold text-xs hover:text-brand duration-200">
                              ARCHITECTURE
                            </h1>
                          </div>
                          <h3 className="py-3 text-2xl font-bold hover:underline text-secondary ">
                            Industrial Factory Building Equipment 2021
                          </h3>
                          <p className="text-gray-500 pb-7">
                            Mei ex aliquid eleifend forensibus, quo ad dicta
                            apeirian neglegentur, ex has tantas percipit
                            perfecto.
                          </p>
                          <div className=" flex items-center align-bottom">
                            <button className="hover:translate-x-5 duration-700 font-bold text-sm ">
                              READ MORE{" "}
                            </button>
                            <Icon
                              icon="ph:arrow-right-duotone"
                              className="group-hover:translate-x-7 duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card 4*/}
                  <div className="max-w-sm mx-auto hover:no-underline focus:no-underline m-5 border-2 border-solid  hover:border-brand rounded-md duration-300 shadow-lg   sm:block group">
                    <img
                      role="presentation"
                      className="object-cover pb-4 w-full rounded group-hover:p-2 duration-500 mx-auto"
                      src={blogImage}
                      alt="blogImage"
                    />
                    <div className="relative overflow-">
                      <div className="p-6 space-y-4 ">
                        <div className="relative group">
                          <div className="flex items-center">
                            <Icon icon="mdi:tag" className="text-brand" />
                            <h1 className="ml-2 font-bold text-xs hover:text-brand duration-200">
                              ARCHITECTURE
                            </h1>
                          </div>
                          <h3 className="py-3 text-2xl font-bold hover:underline text-secondary ">
                            Industrial Factory Building Equipment 2021
                          </h3>
                          <p className="text-gray-500 pb-7">
                            Mei ex aliquid eleifend forensibus, quo ad dicta
                            apeirian neglegentur, ex has tantas percipit
                            perfecto.
                          </p>
                          <div className=" flex items-center align-bottom">
                            <button className="hover:translate-x-5 duration-700 font-bold text-sm ">
                              READ MORE{" "}
                            </button>
                            <Icon
                              icon="ph:arrow-right-duotone"
                              className="group-hover:translate-x-7 duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="grid rounded  sm:p-8 relative mt-7">
            <div className="mx-auto mt-1 w-full text-center rounded-md lg:text-left">
              <div>
                <div class="relative">
                  <input
                    type="text"
                    class="w-full text-gray-900 bg-slate-100 p-4 pe-12 text-xs shadow-sm"
                    placeholder="Search..."
                  />

                  <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <Icon icon="material-symbols:search" width={20} />
                  </span>
                </div>
              </div>
              <div className="group">
                <div>
                  <h1 className="text-secondary font-bold text-xl mt-14 mb-5 flex align-baseline items-center">
                    Latest Postst
                    <Icon
                      icon="ph:arrow-right-duotone"
                      className="group-hover:translate-x-5 duration-300"
                    />
                  </h1>
                </div>
                <div>
                  <div className="flex my-3">
                    <div className="w-1/2 flex justify-center items-center">
                      <img src={blogImage4} alt="" />
                    </div>
                    <div className="ml-2">
                      <h1 className="text-secondary font-bold text-lg hover:underline duration-300">
                        Industrial Factory Building Equipment 2021
                      </h1>
                      <h3 className="text-gray-500 font-bold text-xs">
                        SEPTEMBER 21, 2020
                      </h3>
                    </div>
                  </div>
                  <div className="flex my-3">
                    <div className="w-1/2 flex justify-center items-center">
                      <img src={blogImage3} alt="" />
                    </div>
                    <div className="ml-2">
                      <h1 className="text-secondary font-bold text-lg hover:underline duration-300">
                        Industrial Factory Building Equipment 2021
                      </h1>
                      <h3 className="text-gray-500 font-bold text-xs">
                        SEPTEMBER 21, 2020
                      </h3>
                    </div>
                  </div>
                  <div className="flex my-3">
                    <div className="w-1/2 flex justify-center items-center">
                      <img src={blogImage2} alt="" />
                    </div>
                    <div className="ml-2">
                      <h1 className="text-secondary font-bold text-lg hover:underline duration-300">
                        Industrial Factory Building Equipment 2021
                      </h1>
                      <h3 className="text-gray-500 font-bold text-xs">
                        SEPTEMBER 21, 2020
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group">
                <div>
                  <h1 className="text-secondary font-bold text-xl mt-14 flex align-baseline items-center">
                    Categories{" "}
                    <Icon
                      icon="ph:arrow-right-duotone"
                      className="group-hover:translate-x-5 duration-300"
                    />
                  </h1>
                </div>
                <ul>
                  <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                    Architecture
                  </li>
                  <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                    Building
                  </li>
                  <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                    Construction
                  </li>
                  <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                    Factory
                  </li>
                  <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                    Renovation
                  </li>
                </ul>
              </div>
              <div className="group">
                <div>
                  <h1 className="text-secondary font-bold text-xl mt-14 flex align-baseline items-center">
                    Tags{" "}
                    <Icon
                      icon="ph:arrow-right-duotone"
                      className="group-hover:translate-x-5 duration-300"
                    />
                  </h1>
                </div>
                <ul className="grid md:grid-cols-2 grid-cols-3 mt-5">
                  <li className="mt-5">
                    <Link
                      to="/"
                      className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                    >
                      Architecture
                    </Link>
                  </li>
                  <li className="mt-5">
                    <Link
                      to="/"
                      className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                    >
                      Building
                    </Link>
                  </li>
                  <li className="mt-5 ">
                    <Link
                      to="/"
                      className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                    >
                      Construction
                    </Link>
                  </li>
                  <li className="mt-5 ">
                    <Link
                      to="/"
                      className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                    >
                      Factory
                    </Link>
                  </li>
                  <li className="mt-5 mb-10">
                    <Link
                      to="/"
                      className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                    >
                      Renovation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="w-full h-80 bg-gray-300 rounded-lg overflow- sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  title="map"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
