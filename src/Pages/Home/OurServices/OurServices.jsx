import React from "react";
import OurServicesCard from "./OurServicesCard";
const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Automobile",
      date: "12/08/2023",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
    },
    {
      id: 2,
      title: "Manufacturing",
      date: "12/08/2023",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
    },
    {
      id: 3,
      title: "Mechanical Service",
      date: "12/08/2023",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
    },
    {
      id: 4,
      title: "Oil Gas",
      date: "12/08/2023",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
    },
    {
      id: 5,
      title: "Power Plant",
      date: "12/08/2023",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
    },
    {
      id: 6,
      title: "Home Decor",
      date: "12/08/2023",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
    },
    {
      id: 7,
      title: "Left Installation",
      date: "12/08/2023",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
    },
    {
      id: 8,
      title: "Power Management",
      date: "12/08/2023",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
    },
  ];
  return (
    <>
      <div className="flex flex-col text-center w-full mb-20 pt-14">
        <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
          Whats type Service
          <span className="text-brand"> Needed!</span>
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
          Construction is a general term meaning the art and science to form
          objects systems organizations, and comes from Latin construction and
          Old French construction. To construct is the verb: the act of
          building, and the noun is construction.
        </p>
      </div>

      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center px-24">
        {data.map((cardData) => (
          <OurServicesCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </>
  );
};

export default OurServices;
