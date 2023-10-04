import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";

import tools1 from "../../../assets/Shop-img/tools1.jpg";
import tools2 from "../../../assets/Shop-img/tools2.jpg";
import tools3 from "../../../assets/Shop-img/tools3.jpg";
import tools4 from "../../../assets/Shop-img/tools4.jpg";

const Category2 = () => {
  return (
    <>
      <Carousel
        plugins={[
          "centered",
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              "centered",
              "infinite",
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          900: {
            plugins: [
              "centered",
              "infinite",
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
      >
        <div className="px-2">
          <div className="absolute opacity-0 hover:opacity-70 inset-x-2 inset-y-0  bg-gradient-to-r from-secondary to-secondary duration-300 flex justify-center items-center">
            <span className="bg-brand w-10 h-10 text-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                />
              </svg>
            </span>
          </div>
          <img src={tools3} />
        </div>
        <div className="px-2">
          <div className="absolute opacity-0 hover:opacity-70 inset-x-2 inset-y-0  bg-gradient-to-r from-secondary to-secondary duration-300 flex justify-center items-center">
            <span className="bg-brand w-10 h-10 text-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                />
              </svg>
            </span>
          </div>
          <img src={tools2} />
        </div>
        <div className="px-2">
          <div className="absolute opacity-0 hover:opacity-70 inset-x-2 inset-y-0  bg-gradient-to-r from-secondary to-secondary duration-300 flex justify-center items-center">
            <span className="bg-brand w-10 h-10 text-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                />
              </svg>
            </span>
          </div>
          <img src={tools4} />
        </div>

        <div className="px-2">
          <div className="absolute opacity-0 hover:opacity-70 inset-x-2 inset-y-0  bg-gradient-to-r from-secondary to-secondary duration-300 flex justify-center items-center">
            <span className="bg-brand w-10 h-10 text-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                />
              </svg>
            </span>
          </div>
          <img src={tools1} />
        </div>
      </Carousel>
    </>
  );
};

export default Category2;
