import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const RatingStar = ({ rating , starSize=18}) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className={`text-[#F1C40F] text-[${starSize}px]`} />
        ) : rating >= number ? (
          <FaStarHalfAlt className={`text-[#F1C40F] text-[${starSize}px]`} />
        ) : (
          <AiOutlineStar className={`text-[#F1C40F] text-[${starSize}px]`} />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="flex items-center">{ratingStar}</div>
    </>
  );
};

export default RatingStar;
