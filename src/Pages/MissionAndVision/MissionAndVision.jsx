import React from "react";
import { Link } from "react-router-dom";
import missionVisionImag from "../../assets/ACHIEVEMENT_Pic/achievementPic4.jpg";
const MissionAndVision = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1">
                We're Building Everything Best That You
                <span className="text-brand"> Needed!</span>
              </h2>
              <p class="text-base text-textColure md:text-lg">
                Construction is a general term meaning the art and science to
                form objects systems organizations, and comes from Latin
                construction and Old French construction. To construct is the
                verb: the act of building, and the noun is construction.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">

              <Link to="/mission">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1024"
                    height="1024"
                    viewBox="0 0 1024 1024"
                    className="text-brand"
                  >
                    <path
                      fill="currentColor"
                      d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8z"
                    />
                  </svg>
                </div>
                <h6 class="mb-2 text-2xl font-bold leading-5 text-secondary">
                  Industry Mission <span className="text-brand">⇾</span>
                </h6>
                <p class="text-sm text-textColure">
                  Construction is a general term meaning the art and science to
                  form objects systems.
                </p>
              </Link>

              <Link to="/vision">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1024"
                    height="1024"
                    viewBox="0 0 1024 1024"
                    className="text-brand"
                  >
                    <path
                      fill="currentColor"
                      d="M856 376H648V168c0-8.8-7.2-16-16-16H168c-8.8 0-16 7.2-16 16v464c0 8.8 7.2 16 16 16h208v208c0 8.8 7.2 16 16 16h464c8.8 0 16-7.2 16-16V392c0-8.8-7.2-16-16-16zm-480 16v188H220V220h360v156H392c-8.8 0-16 7.2-16 16zm204 52v136H444V444h136zm224 360H444V648h188c8.8 0 16-7.2 16-16V444h156v360z"
                    />
                  </svg>
                </div>
                <h6 class="mb-2 text-2xl font-bold leading-5 text-secondary">
                  Our Vision <span className="text-brand">⇾</span>
                </h6>
                <p class="text-sm text-textColure">
                  Construction is a general term meaning the art and science to
                  form objects systems.
                </p>
              </Link>

            </div>
          </div>

          <div className="">
            <img
              class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={missionVisionImag}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionAndVision;
