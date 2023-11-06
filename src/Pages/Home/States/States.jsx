import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const States = () => {
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = countRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <div className="flex flex-col text-center w-full my-14">
        <h2 className="text-secondary font-bold text-5xl uppercase relative h-auto w-full pb-1 text-center ">
          Delivering The Most Innovation
          <span className="text-brand"> Goals.</span>
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
          Construction is a general term meaning the art and science to form
          objects systems organizations, and comes from Latin construction and
          Old French construction. To construct is the verb: the act of
          building, and the noun is construction.
        </p>
      </div>
      <div className="px-4 py-16 mx-auto screen-xl md:px-24  lg:py-20 stateBg  opacity-75">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
          <div className="text-center">
            <h6 class="text-5xl font-bold text-brand" ref={countRef}>
              {isVisible && (
                <CountUp start={100} end={3200} duration={6} ref={countRef} />
              )}
              +
            </h6>
            <p class="mb-2 font-bold text-md  text-secondary">
              Project Complete
            </p>
            <p class="text-gray-700">
              It’s something that’s many of the wisest people in history have
              kept in mind.
            </p>
          </div>
          <div className="text-center">
            <h6 class="text-5xl font-bold text-brand">
              {isVisible && (
                <CountUp start={100} end={3300} duration={6} ref={countRef} />
              )}
              +
            </h6>
            <p class="mb-2 font-bold text-md  text-secondary">Happy Customer</p>
            <p class="text-gray-700">
              For many men, the acquisition of wealth does not end their
              troubles, it only changes them.
            </p>
          </div>
          <div className="text-center">
            <h6 class="text-5xl font-bold text-brand">
              {isVisible && (
                <CountUp
                  start={10000}
                  end={404300}
                  duration={6}
                  ref={countRef}
                />
              )}
              +
            </h6>
            <p class="mb-2 font-bold text-md  text-secondary">Hours Worked</p>
            <p class="text-gray-700">
              It's a helluva start, being able to recognize what makes you happy
              today, in this moment.
            </p>
          </div>
          <div className="text-center">
            <h6 class="text-5xl font-bold text-brand">
              {isVisible && (
                <CountUp start={10} end={200} duration={6} ref={countRef} />
              )}
            </h6>
            <p class="mb-2 font-bold text-md text-secondary">
              Worldwide Brunch
            </p>
            <p class="text-gray-700">
              Happiness is when what you think, what you say, and what you do
              are in harmony.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default States;
