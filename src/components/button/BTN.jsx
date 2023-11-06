import React from "react";
import { Link } from "react-router-dom";

const BTN = ({link, innerText}) => {
    
  return (
    <>
      <Link
        to={link}
        className="text-[14px] relative inline-flex items-center justify-start px-4 py-2 overflow-hidden transition-all bg-brand hover:bg-white group border border-brand"
      >
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
          {innerText}
        </span>
      </Link>
    </>
  );
};

export default BTN;
