import React from "react";

const AchievementsCard = ({ infoData }) => {
  const { title, description, img } = infoData;
  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-[2px] ">
        <div className="flex relative ">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={img}
          />
          <div className="px-8 py-10 relative w-full border-2 border-brand bg-brand opacity-0 hover:opacity-100 transition duration-300 ease-linear">
            <h2 className="tracking-widest text-[30px] title-font font-bold text-secondary mb-1">
              {title}
            </h2>
            <p className="leading-relaxed text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementsCard;
