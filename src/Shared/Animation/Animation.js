import React from "react";
import leftTractor1 from "../../assets/construction tractor icon/LTR1.png";
import leftTractor2 from "../../assets/construction tractor icon/LTR2.png";
import rightTractor1 from "../../assets/construction tractor icon/RTL1.png";
import rightTractor2 from "../../assets/construction tractor icon/RTL2.png";
import "./Animation.css";

const Animation = () => {
  return (
    <>
      <div className="relative w-full  animationBg bg-[#2F2F30] border-b border-gray-800">
        <img
          src={rightTractor1}
          alt="..."
          className="w-20 rightToLeft1 top-0"
        />

        <img
          src={leftTractor1}
          alt=""
          className="w-20 leftToRight1 absolute top-0"
        />

        <img
          src={rightTractor2}
          alt=""
          className="w-20 rightToLeft2 absolute top-0"
        />

        <img
          src={leftTractor2}
          alt=""
          className="w-20 leftToRight2 absolute top-[-5px]"
        />
      </div>
      <p className="pb-0 pt-14 text-xs  text-brand bg-[#2F2F30] text-center">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/md-omar-faruq-7458b819a/"
        >
          © 2022 Weero Digital
        </a>
      </p>
    </>
  );
};

export default Animation;
