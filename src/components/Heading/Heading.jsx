import React from "react";

const Heading = ({text1, text2, description}) => {
  return (
    <>
      <div className="flex flex-col text-center w-full my-20">
        <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
         {text1}
          <span className="text-brand ml-1.5">{text2}</span>
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
         {description}
        </p>
      </div>
    </>
  );
};

export default Heading;
