import { Icon } from "@iconify/react";
import React from "react";

const ExecutivePanelMemberCard = ({ executivePanel }) => {
  const { name, email, profilePicture, intro, allSocial, role, designation } =
    executivePanel;
 
  return (
    <>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
        <img
          class="object-cover w-full h-56 md:h-64 xl:h-80"
          src={profilePicture}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-secondary bg-opacity-75 opacity-0 hover:opacity-100">
          <p class="mb-1 text-lg font-bold text-gray-100">{name}</p>
          <p class="mb-4 text-xs text-gray-100">{designation}</p>
          <p class="mb-4 text-xs tracking-wide text-gray-400">{intro}</p>
          <div className="flex items-center justify-center space-x-3">
            <div className="flex mt-8 space-x-2 text-white">
              <a
                className="bg-[#0c2042] hover:bg-brand px-[5px] py-[5px] cursor-pointer hover:scale-110 duration-300"
                href={`${allSocial[0]?.facebook}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="ic:baseline-facebook" className="w-6 h-6" />
              </a>
              <a
                className="bg-[#0c2042] hover:bg-brand px-[5px] py-[5px] cursor-pointer hover:scale-110 duration-300"
                href={`${allSocial[1]?.linkedIn}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:instagram" className="w-6 h-6" />
              </a>
              <a
                className="bg-[#0c2042] hover:bg-brand px-[5px] py-[5px] cursor-pointer hover:scale-110 duration-300"
                href={`${allSocial[2]?.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutivePanelMemberCard;
