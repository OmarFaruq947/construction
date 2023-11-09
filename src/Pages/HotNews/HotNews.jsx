import React from "react";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic2.png";
import banner from "../../assets/Banner/pic1.jpg";
import blogImage2 from "../../assets/blogpic/pic3.jpg";
import blogImage3 from "../../assets/blogpic/pic4.jpg";
import blogImage4 from "../../assets/blogpic/pic5.jpg";
import Heading from "../../components/Heading/Heading";

const HotNews = () => {
  const bannerContent = {
    heading: "Hot News",
    afterPage: "home",
    beforePage: "hot-news",
    banner: `${banner}`,
    banner_imag: `${bannerImg}`,
  };

  const description =
    "Breaking Ground: Revolutionary Sustainable Construction Material Unveiled! Learn how this game-changing innovation is set to reshape the future of eco-friendly building practices.";

  return (
    <>
      <AllComponentTopBanner bannerContent={bannerContent} />
      {/* banner section */}
      <Heading text1="Hot" text2="News" description={description} />

      {/* search box start */}
      <div class="max-w-md w-full mx-auto">
        <i class="fas fa-search text-gray-400"></i>
        <input
          class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full "
          type="search"
          placeholder="Search"
        />
      </div>
      {/* search box end */}

      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 my-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-1 md:gap-2 lg:gap-3 ">
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
    </>
  );
};

export default HotNews;
