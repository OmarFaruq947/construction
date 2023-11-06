import React from "react";
import banner4 from "../../assets/Banner/servicesDetailsBanner.jpg";
import constriction from "../../assets/cardImg/pic1.jpg";
import card2 from "../../assets/cardImg/pic3.jpg";
import card3 from "../../assets/cardImg/pic4.jpg";
import card5 from "../../assets/cardImg/pic6.jpg";
import tractor from "../../assets/exclevetor.jpg";
import servicePic1 from "../../assets/our_services/servicePic1.jpg";
import servicePic2 from "../../assets/our_services/servicePic2.jpg";
import {
    default as servicePic3,
    default as services,
} from "../../assets/our_services/servicePic3.jpg";
import servicePic4 from "../../assets/our_services/servicePic4.jpg";
import Architecture from "./Architecture";
import ServiceInfoCard from "./ServiceInfoCard";

const ServicesDetails = () => {
  const data = [
    {
      id: 1,
      title: "Automobile Manufacturing",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: servicePic1,
      rating:4
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      subtitle: "Wrathall Sed stet rebum",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: servicePic2,
      rating:5
    },
    {
      id: 3,
      title: "Accurate Measurements",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: servicePic3,
      rating:4
    },
    {
      id: 4,
      title: "Fast Transportation",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: servicePic4,
      rating:5
    },
    {
      id: 5,
      title: "Constant Maintenance",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: card5,
      rating:5
    },
    {
      id: 6,
      title: "Automobile Manufacturing",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: card2,
      rating:3
    },
    {
      id: 7,
      title: "Fast Transportation",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: servicePic1,
      rating:4
    },
    {
      id: 8,
      title: "Constant Maintenance",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: card3,
      rating:5
    },
    {
      id: 9,
      title: "Accurate Measurements",
      description:
        "Sed stet rebum magna no sed, labore dolore ipsum diam ea aliquyam vero. Sanctus invidunt justo eirmod eos diam.",
      img: card2,
      rating:4
    },
  ];
  return (
    <>
      <div className="relative flex flex-col text-center w-full">
        <img src={banner4} alt="" className="w-full h-96" />
        <span className="absolute top-0 left-0 inset-0 bg-secondary opacity-90 h-[385px]"></span>
        <div className="absolute top-10 lg:top-16 md:left-[7%] lg:left-[27%] mx-10">
          <h5 className="text-brand font-semibold  text-lg">Our Services</h5>
          <h1 className="text-4xl text-white font-bold mt-3">
            High Quality Construction Solutions <br /> For Residentials &
            <span className="text-brand">Industries!</span>
          </h1>
          <p className="mt-4 text-white font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            dolore voluptate accusantium molestiae.
          </p>
        </div>
      </div>

      <div className="service container mx-auto py-8 px-6 h-auto ">
        <div>
          <div className="flex flex-col text-center w-full mb-20 pt-14">
            <h2 className="text-secondary font-bold text-4xl lg:text-5xl uppercase relative h-auto w-full pb-1 text-center ">
              OUR
              <span className="text-brand"> services</span>
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia accusamus? Nostrum doloribus vitae ratione ut ex eos amet atque saepe in! Voluptates, maiores? Officia est fugit qui quod reiciendis?
          </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {data.map((serviceInfo) => (
              <ServiceInfoCard key={serviceInfo.id} serviceInfo={serviceInfo} />
            ))}
          </div>
        </div>
      </div>

      {/* Architecture section */}
      <Architecture />
      {/* ................... */}

      {/* services start*/}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col text-center w-full mb-20 pt-14">
          <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
            OUR Service
            <span className="text-brand"> Type</span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
            Construction is a general term meaning the art and science to form
            objects systems organizations, and comes from Latin construction and
            Old French construction. To construct is the verb: the act of
            building, and the noun is construction.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center">
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-brand">
                  <svg
                    class="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      className="text-secondary"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
              </div>
              <div>
                <h6 class="mb-2 font-semibold leading-5 text-secondary">
                  They urge you to put down
                </h6>
                <p class="text-sm text-textColure">
                  Skate ipsum dolor sit amet, alley oop vert mute-air Colby
                  Carter flail 180 berm. Half-cab camel back ollie transition
                  ledge Wes Humpston 1080.
                </p>
                <hr class="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-brand">
                  <svg
                    class="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      className="text-secondary"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
              </div>
              <div>
                <h6 class="mb-2 font-semibold leading-5 text-secondary">
                  The powerless in a world
                </h6>
                <p class="text-sm text-textColure">
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest.
                  Michael Knight a young loner.
                </p>
                <hr class="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-brand">
                  <svg
                    class="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      className="text-secondary"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
              </div>
              <div>
                <h6 class="mb-2 font-semibold leading-5 text-secondary">
                  Tell them I hate them
                </h6>
                <p class="text-sm text-textColure">
                  Chase ball of string eat plants, meow, and throw up because I
                  ate plants going to catch the red dot today going to catch the
                  red dot today. I could pee on this if I had the energy.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              class="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src={tractor}
              alt=""
            />
            <img
              class="object-cover w-full h-48 rounded shadow-lg"
              src={services}
              alt=""
            />
            <img
              class="object-cover w-full h-48 rounded shadow-lg"
              src={constriction}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
