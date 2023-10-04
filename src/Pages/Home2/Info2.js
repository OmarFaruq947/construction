import React from "react";
import "./info2.css";

const Info2 = () => {
  return (
    <>
      <div className="hero-bg flex items-center justify-center text-center">
        <div className="bg-brand bg-opacity-80 text-white rounded-md lg:rounded-lg h-96 flex flex-col items-center justify-center container">
          <h1 className="font-semibold text-2xl mb-2 md:mb-4 md:text-4xl">
            The gift of happiness
          </h1>
          <p className="md:text-lg">
            Show your gratitude with one of our gift sets, large and small,
            specially designed to spread joy to someone you love.
          </p>
          <button
            type="button"
            className="bg-secondary opacity-90 hover:opacity-100 text-white uppercase py-3 px-8 mt-5 rounded-md inline-block sm:mt-8 text-sm tracking-wider"
          >
            shop now
          </button>
        </div>
      </div>
    </>
  );
};

export default Info2;
