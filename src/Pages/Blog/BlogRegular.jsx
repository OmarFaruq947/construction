import React from "react";
import pic1 from "../../assets/blogpic/pic1.jpg";
import pic10 from "../../assets/blogpic/pic10.jpg";
import pic11 from "../../assets/blogpic/pic11.jpg";
import pic2 from "../../assets/blogpic/pic2.jpg";
import pic3 from "../../assets/blogpic/pic3.jpg";
import pic4 from "../../assets/blogpic/pic4.jpg";
import pic5 from "../../assets/blogpic/pic5.jpg";
import pic6 from "../../assets/blogpic/pic6.jpg";
import pic7 from "../../assets/blogpic/pic7.jpg";
import pic8 from "../../assets/blogpic/pic8.jpg";
import pic9 from "../../assets/blogpic/pic9.jpg";
import MainBlog from "./MainBlog";

import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic3.png";
import banner from "../../assets/Banner/pic1.jpg";
import profilePic1 from "../../assets/Profile Pic/profilePic1.jpg";
import profilePic10 from "../../assets/Profile Pic/profilePic10.jpg";
import profilePic11 from "../../assets/Profile Pic/profilePic11.jpg";
import profilePic2 from "../../assets/Profile Pic/profilePic2.jpg";
import profilePic3 from "../../assets/Profile Pic/profilePic3.jpg";
import profilePic4 from "../../assets/Profile Pic/profilePic4.jpg";
import profilePic5 from "../../assets/Profile Pic/profilePic5.jpg";
import profilePic6 from "../../assets/Profile Pic/profilePic6.jpg";
import profilePic7 from "../../assets/Profile Pic/profilePic7.jpg";
import profilePic8 from "../../assets/Profile Pic/profilePic8.jpg";
import profilePic9 from "../../assets/Profile Pic/profilePic9.jpg";

const BlogRegular = () => {
  const data = [
    {
      id: 1,
      userName: "Sed stet rebum",
      status: "just in",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "javaScript",
      banner: `${pic1}`,
      avatar: `${profilePic1}`,
    },
    {
      id: 2,
      userName: "Importance of Prototype",
      status: "1 minute ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "javaScript",
      banner: `${pic2}`,
      avatar: `${profilePic2}`,
    },
    {
      id: 3,
      userName: "Construction cost Analysis",
      status: "1 day ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "react js",
      banner: `${pic3}`,
      avatar: `${profilePic3}`,
    },
    {
      id: 4,
      userName: "Green city Policy",
      status: "1 hour ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "react js",
      banner: `${pic4}`,
      avatar: `${profilePic4}`,
    },
    {
      id: 5,
      userName: "Importance Soil test",
      status: "3 weeks ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "react js",
      banner: `${pic5}`,
      avatar: `${profilePic5}`,
    },
    {
      id: 6,
      userName: "Shifty fist",
      status: "2 Months ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "node js",
      banner: `${pic6}`,
      avatar: `${profilePic6}`,
    },
    {
      id: 7,
      userName: "Importance Team work",
      status: "2 Months ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "node js",
      banner: `${pic7}`,
      avatar: `${profilePic7}`,
    },
    {
      id: 8,
      userName: "Importance of Land Servay",
      status: "2 Months ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "node js",
      banner: `${pic8}`,
      avatar: `${profilePic8}`,
    },
    {
      id: 9,
      userName: "Design Process",
      status: "2 Months ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "node js",
      banner: `${pic9}`,
      avatar: `${profilePic9}`,
    },
    {
      id: 10,
      userName: "Saifty",
      status: "2 Months ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "node js",
      banner: `${pic10}`,
      avatar: `${profilePic10}`,
    },
    {
      id: 11,
      userName: "Saifety materials",
      status: "2 Months ago",
      blog: "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      tags: "node js",
      banner: `${pic11}`,
      avatar: `${profilePic11}`,
    },
  ];

  const bannerContent = {
    heading: "Blogs",
    afterPage: "home",
    beforePage: "blog",
    banner: `${banner}`,
    banner_imag: `${bannerImg}`,
  };

  return (
    <>
      <AllComponentTopBanner bannerContent={bannerContent} />
      <div className="flex justify-center w-screen h-screen px-4 ">
        <div className="flex w-full max-w-screen-lg">
          <div className="flex flex-col w-64 py-4 pr-3">
            <a
              className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-brand"
              href="#"
            >
              Home
            </a>
            <a
              className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-brand"
              href="#"
            >
              Discover
            </a>
            <a
              className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-brand"
              href="#"
            >
              Notifications
            </a>
            <a
              className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-brand"
              href="#"
            >
              Inbox
            </a>
            <a
              className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-brand"
              href="#"
            >
              Saved Posts
            </a>
            <a
              className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-brand"
              href="#"
            >
              Groups
            </a>
            <a
              className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-brand"
              href="#"
            >
              Profile
            </a>
          </div>

          <div className="flex flex-col flex-grow border-l border-r border-[#eee]">
            <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-[#eee]">
              <h1 className="text-xl font-semibold  text-brand">Feed Title</h1>
              
            </div>
            <div className="flex-grow h-0 overflow-auto">
              <div className="flex w-full p-8 border-b-4 border-[#eee]">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full">
                  <img
                    alt="..."
                    src="https://i.ibb.co/5946gPx/pexels-tima-miroshnichenko-6474475.jpg"
                  />
                </span>
                <div className="flex flex-col flex-grow ml-4">
                  <textarea
                    className="p-3 bg-transparent border border-brand rounded-sm"
                    name
                    id
                    rows={3}
                    placeholder="What's happening?"
                    defaultValue={""}
                  />
                  <div className="flex justify-between mt-2">

                  <input type="file" className="file-input file-input-ghost bg-brand w-full max-w-xs" />

                    <button className="btn flex items-center h-8 px-3 text-xs rounded-sm bg-brand hover:bg-secondary hover:text-white duration-300">
                      Post
                    </button>
                  </div>
                </div>
              </div>

              {/* main blog */}

              {data.map((blogData) => (
                <MainBlog key={blogData.id} blogData={blogData} />
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4">
            <input
              className="flex items-center h-8 px-2 border border-brand rounded-sm"
              type="search"
              placeholder="Search…"
            />
            <div>
              <h3 className="mt-6 font-semibold  text-brand">Trending</h3>

              <div className="flex w-full py-4 border-b border-[#eee] hover:bg-yellow-200">
                <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full">
                  <img
                    src="https://i.ibb.co/VNKx4BQ/pexels-andrea-piacquadio-3831159.jpg"
                    alt="..."
                  />
                </span>

                <div className="flex flex-col flex-grow ml-2">
                  <div className="flex text-sm">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1  text-brand">@username</span>
                  </div>
                  <p className="mt-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, et
                    dolore magna aliqua.
                    <a className="underline" href="#">
                      #hashtag
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRegular;
