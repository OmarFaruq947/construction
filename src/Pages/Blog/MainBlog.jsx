import React from "react";
import { Link } from "react-router-dom";

const MainBlog = ({ blogData }) => {
  const { id, userName, status, blog, tags, banner, avatar } = blogData;
  return (
    <>
      <div className="flex w-full p-8 border-b border-[#eee]">
        <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full">
          <img src={avatar} alt="" />
        </span>
        <div className="flex flex-col flex-grow ml-4 ">
          <Link to={`/blogDetails/${id}`}>
          <div className="flex">
            <span className="font-semibold">{userName}</span>
            <span className="ml-1  text-brand">@{userName}</span>
            <span className="ml-auto text-sm">{status}</span>
          </div>
          <p className="mt-1">
            {blog}
            <br />
            <a className="underline" href="#">
              #{tags}
            </a>
          </p>
          <div className="flex items-center justify-center h-64 mt-2 bg-gray-200">
            <img className="h-64 w-[624px]" alt="..." src={banner} />
          </div>
          </Link>
          <div className="flex mt-2">
            <button className="text-sm font-semibold">Like</button>
            <button className="ml-2 text-sm font-semibold">Reply</button>
            <button className="ml-2 text-sm font-semibold">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlog;
