import React from "react";
import { Link } from "react-router-dom";
import RatingStar from "../../components/Rating/RatingStar";

const ServiceInfoCard = ({ serviceInfo }) => {
  const {id, img, title, description, rating} = serviceInfo
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
              <RatingStar rating={rating}/>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceInfoCard;
