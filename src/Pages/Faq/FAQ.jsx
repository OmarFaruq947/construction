import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic2.png";
import backgroundImg from "../../assets/Banner/bannerBackground2.jpg";
import blogImage2 from "../../assets/blogpic/pic3.jpg";
import blogImage3 from "../../assets/blogpic/pic4.jpg";
import blogImage4 from "../../assets/blogpic/pic5.jpg";
const FAQ = () => {
  let [show, setShow] = useState(false);
  let [show2, setShow2] = useState(false);
  let [show3, setShow3] = useState(false);



  const bannerContent = {
    heading: "faq",
    afterPage: "home",
    beforePage: "faq",
    banner_imag: `${bannerImg}`,
    banner: `${backgroundImg}`,
  };
  return (
    <>
      {/* banner section start*/}
      <AllComponentTopBanner bannerContent={bannerContent} />
      {/* banner section end*/}

      <div className="max-w-screen px-4 my-10 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          {/* Left side start*/}
          <div className="bg-white lg:col-span-2">
            <div className="px-6 mx-auto ">
              <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                {/* Faq Section start*/}
                <div className="flex-1 lg:mx-12">
                  {/* question 1 */}
                  <div>
                    <button className="flex items-center focus:outline-none">
                      {!show ? (
                        <svg
                          className="w-6 h-6 text-brand"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6   text-brand"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      )}
                      <h1
                        onClick={() => setShow(!show)}
                        className="mx-4 text-xl text-accent"
                      >
                        Q1 How i can play for my appoinment ?
                      </h1>
                    </button>
                    {show && (
                      <div className="flex mt-8 md:mx-10">
                        <span className="border border-yellow-100" />

                        <p className="max-w-3xl px-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni, eum quae. Harum officiis reprehenderit ex
                          quia ducimus minima id provident molestias optio nam
                          vel, quidem iure voluptatem, repellat et ipsa.
                        </p>
                      </div>
                    )}
                  </div>
                  <hr className="my-8 border-brand opacity-30" />

                  {/* question 2 */}
                  <div>
                    <button className="flex items-center focus:outline-none">
                      <svg
                        className="w-6 h-6 text-brand"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <h1
                        onClick={() => setShow2(!show2)}
                        className="mx-4 text-xl text-accent"
                      >
                        Q 2 How i can play for my appoinment ?
                      </h1>
                    </button>
                    {show2 && (
                      <div className="flex mt-8 md:mx-10">
                        <span className="border border-yellow-100" />

                        <p className="max-w-3xl px-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni, eum quae. Harum officiis reprehenderit ex
                          quia ducimus minima id provident molestias optio nam
                          vel, quidem iure voluptatem, repellat et ipsa.
                        </p>
                      </div>
                    )}
                  </div>
                  <hr className="my-8 border-brand opacity-30" />

                  {/* question 3 */}
                  <div>
                    <button className="flex items-center focus:outline-none">
                      <svg
                        className="w-6 h-6   text-brand"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <h1
                        onClick={() => setShow3(!show3)}
                        className="mx-4 text-xl text-accent"
                      >
                        Q 3 How i can play for my appoinment ?
                      </h1>
                    </button>
                    {show3 && (
                      <div className="flex mt-8 md:mx-10">
                        <span className="border border-yellow-100" />

                        <p className="max-w-3xl px-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni, eum quae. Harum officiis reprehenderit ex
                          quia ducimus minima id provident molestias optio nam
                          vel, quidem iure voluptatem, repellat et ipsa.
                        </p>
                      </div>
                    )}
                  </div>
                  <hr className="my-8 border-brand opacity-30" />
                </div>
                {/* Faq Section end*/}
              </div>
            </div>
          </div>

          {/* Right side start */}
          <div className="rounded sm:p-8 relative">
            <div className="mx-auto mt-1 w-full text-center rounded-md lg:text-left">
              <div className="relative">
                <input
                  type="text"
                  class="w-full text-gray-900 bg-slate-100 p-4 pe-12 text-xs shadow-sm"
                  placeholder="Search..."
                />

                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <Icon icon="material-symbols:search" width={20} />
                </span>
              </div>

              <div className="group">
                <div>
                  <h1 className="text-secondary font-bold text-xl mt-14 mb-5 flex align-baseline items-center">
                    Latest Post
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

              {/* Categories section start */}
              <div className="group">
                <div>
                  <h1 className="text-secondary font-bold text-xl mt-14 flex align-baseline items-center">
                    Categories
                    <Icon
                      icon="ph:arrow-right-duotone"
                      className="group-hover:translate-x-5 duration-300"
                    />
                  </h1>
                </div>
                <ul className="mt-5 text-left">
                  <li className="mt-5 text-sm text-gray-500 font-bold hover:underline hover:text-secondary duration-300 cursor-pointer">
                    Architecture
                  </li>
                  <li className="mt-2 text-sm text-gray-500 font-bold hover:underline hover:text-secondary duration-300 cursor-pointer">
                    Building
                  </li>
                  <li className="mt-2 text-sm text-gray-500 font-bold hover:underline hover:text-secondary duration-300 cursor-pointer">
                    Construction
                  </li>
                  <li className="mt-2 text-sm text-gray-500 font-bold hover:underline hover:text-secondary duration-300 cursor-pointer">
                    Factory
                  </li>
                  <li className="mt-2 text-sm text-gray-500 font-bold hover:underline hover:text-secondary duration-300 cursor-pointer">
                    Renovation
                  </li>
                </ul>
              </div>

              {/* Tag section start*/}
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
                <ul className="mt-5 text-left grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  <li className="mt-5">
                    <Link
                      to="/"
                      className="bg-brand hover:bg-secondary py-1 px-3 font-bold text-secondary hover:text-white"
                    >
                      Architecture
                    </Link>
                  </li>
                  <li className="mt-5">
                    <Link
                      to="/"
                      className="bg-brand hover:bg-secondary py-1 px-3 font-bold text-secondary hover:text-white"
                    >
                      Building
                    </Link>
                  </li>
                  <li className="mt-5 ">
                    <Link
                      to="/"
                      className="bg-brand hover:bg-secondary py-1 px-3 font-bold text-secondary hover:text-white"
                    >
                      Construction
                    </Link>
                  </li>
                  <li className="mt-5 ">
                    <Link
                      to="/"
                      className="bg-brand hover:bg-secondary py-1 px-3 font-bold text-secondary hover:text-white"
                    >
                      Factory
                    </Link>
                  </li>
                  <li className="mt-5 mb-10">
                    <Link
                      to="/"
                      className="bg-brand hover:bg-secondary py-1 px-3 font-bold text-secondary hover:text-white"
                    >
                      Renovation
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Tag section end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
