import React from "react";

const OurServicesCard = ({ cardData }) => {
  const { id, title, description, date } = cardData;

  return (
    <>
      <div className="w-11/12 py-4 flex flex-col justify-center bg-white rounded-lg border border-secondary shadow-md drop-shadow-lg px-4">
        <div>
          <h4
            tabindex="0"
            className="focus:outline-none text-accent font-bold mb-3"
          >
            <span className=" text-brand text-[30px]">{id}. </span>
            <span className="text-heading">{title}</span>
          </h4>
          <p
            tabindex="0"
            className="focus:outline-none text-textColure text-sm"
          >
            {description}
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between text-textColure">
            <p
              tabindex="0"
              className="focus:outline-none text-sm text-secondary"
            >
              {date}
            </p>
            <button
              type="button"
              className="w-10 h-10 rounded-full text-brand hover:text-secondary hover:scale-110 duration-300 cursor-help  flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 9.5A2.5 2.5 0 0 0 9.5 12a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 9.5m0 3.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m0-3.5A2.5 2.5 0 0 0 9.5 12a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 9.5m0 3.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m0-11A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 14c-2.63 0-5-1.57-6-4a6.505 6.505 0 0 1 8.5-3.5A6.52 6.52 0 0 1 18 12c-1 2.43-3.37 4-6 4m0-6.5A2.5 2.5 0 0 0 9.5 12a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 12 9.5m0 3.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServicesCard;
