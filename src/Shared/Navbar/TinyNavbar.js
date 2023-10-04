import React from "react";
import { Link } from "react-router-dom";

const TinyNavbar = () => {
  return (
    <>
      <nav className="bg-secondary h-8">
        <div className="px-4">
          <div className="flex justify-between py-1 item-center h-8">
            {/* contact info */}
            {/* 1st Flex section */}
            <div className="flex item-center">
              <a
                href="tel:+8801752555788"
                className="flex space-x-1 items-center border-brand text-"
              >
                <svg
                  className="h-4 w-4  text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-[14px] text-brand border-r pr-2 border-r-gray-400">
                  +8801752555788
                </span>
              </a>

              <a
                href="mailto: abc@example.com"
                className="flex space-x-1 pl-2 items-center text-accent"
              >
                <svg
                  className="h-5 w-5  text-white pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-brand text-[14px]">
                  abcdefg@dragon.com
                </span>
              </a>
            </div>

            {/* 2nd Flex section */}
            <div className="flex item-center">
              <a
                target="_blank"
                href="https://goo.gl/maps/U9GQsriGG2YVRehe8"
                className="  space-x-1 items-center text-accent hidden lg:block md:block"
              >
                <div className="flex justify-center items-center">
                  <svg
                    className="h-5 w-5  text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-brand border-r border-r-gray-400 pr-2">
                    Store location
                  </span>
                </div>
              </a>

              <a
                href="/news"
                className="space-x-1 pl-2 items-center text-accent hidden md:block lg:block"
              >
                <div className="flex justify-center items-center">
                  <svg
                    className="h-5 w-5  text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-brand border-r border-r-gray-400 pr-2">
                    Hot News
                  </span>
                </div>
              </a>
              <Link
                to="/registration"
                className="font-medium group pl-3 hover:scale-105 duration-300"
              >
                <span className="text-white uppercase font-bold tracking-wide ">
                  Register
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TinyNavbar;
