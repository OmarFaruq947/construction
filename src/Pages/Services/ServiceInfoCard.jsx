import React from "react";
import { Link } from "react-router-dom";

const ServiceInfoCard = ({ infoCard }) => {
  const {id, img, title, description} = infoCard
  return (
    <>
      <div class="w-full">
        <Link
    
          to={`/service-more-details/${id}`}
          class="h-72 md:h-96 block group relative overflow-hidden shadow-lg"
        >
          <img
            alt=""
            src={img}
            className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150 duration-300"
          />
          <div class="absolute gradient transition duration-300 bg-secondary opacity-70 group-hover:bg-secondary group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div class="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
            <div class="h-1/2 relative">
              <div class="absolute bottom-0">
                <h2 class="font-bold text-white leading-tight transition duration-300 text-4xl pb-6 ">
                  {title}
                </h2>
              </div>
            </div>
            <div class="h-1/2">
              <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
                {description}
              </p>

              <Link
                to="/service-more-details"
                className="relative inline-flex items-center justify-start px-4 py-2 mb-10 overflow-hidden font-medium transition-all bg-brand rounded hover:bg-secondary group"
              >
                <span className="w-20 h-20 rounded rotate-[-40deg] hover:bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                  Read More
                </span>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceInfoCard;
