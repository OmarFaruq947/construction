import { Icon } from "@iconify/react";
import React from "react";
import image1 from "../../assets/pic100.jpg";
import ToggleMenus from "./ToggleMenus";

const AboutProject = () => {
  return (
    <div className="py-10 max-w-screen-2xl mx-auto px-4">
      {/* <div>
        <h1 className="text-center text-5xl font-semibold">
          About <span className="text-brand">Project</span>
        </h1>
      </div>
      <div className="md:py-10 py-4 text-center">
        <p>
          Real Estate agents are Property consisting of land and the buildings
          on it, along with its seds naturals resources such seds <br /> as
          crops, minerals, or water; immovable property of this nature.Since
          this was a limited seds unit auction, we had approached by <br />{" "}
          Developers to release incremental units to fulfill the demands at a
          stepped up cut-off price.
        </p>
      </div> */}
      <div>
        <h1 className="text-center text-5xl text-secondary font-semibold md:py-10 py-5">
          Project <span className="text-brand">Details</span>
        </h1>
      </div>
      {/* Project details card started */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5 mb-5 md:mb-0">
        <div className="md:space-y-10 space-y-5 border-brand p-3">
          <h1 className="md:text-4xl text-2xl font-semibold">
            Project Details Title Here
          </h1>
          <p className="overflow-hidden">
            The containers function as storage that members can access from
            outside the envelope, the structure of the second floor, a central
            conference room with views of the Rocky Mountains, and entry portals
            to the building. The base is then wrapped with a pre-engineered
            metal building. Continuous ribbon windows, maximizing the structural
            nature of the lightweight envelope, provide views out and let
            daylight in.
          </p>

          <div className="grid grid-cols-3 text-center">
            <div className=" grid justify-items-center text-2xl font-semibold">
              <Icon
                icon="mdi:office-building-outline"
                className="text-brand"
                width="50px"
              />
              <p>Buildings</p>
              <p>13</p>
            </div>
            <div className="border-x grid justify-items-center text-2xl font-semibold">
              <Icon
                icon="carbon:property-relationship"
                className="text-brand"
                width="50px"
              />
              <p>Square Feet</p>
              <p>22304</p>
            </div>
            <div className=" grid justify-items-center text-2xl font-semibold">
              <Icon
                icon="bi:calendar2-date"
                className="text-brand"
                width="50px"
              />
              <p>Year Build</p>
              <p>2022</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <img src={image1} alt="" className="w-full h-96 rounded-md" />
        </div>
      </div>
      {/* card details end */}
      {/* toggle menus */}
      <ToggleMenus />
      {/* Bottom slider */}
      {/* <div className="py-8">
        <h1 className="text-5xl font-semibold">
          Related <span className="text-brand">Projects</span>
        </h1>
      </div> */}
    </div>
  );
};

export default AboutProject;
