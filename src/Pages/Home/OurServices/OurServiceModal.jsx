import React, { useState } from "react";

const OurServiceModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
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
      {showModal ? (
        <>
          <div className="flex justify-center items-center  inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-end p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    className=" bg-transparent border-0 text-secondary float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-7 bg-brand  h-8 w-8 text-xl block text-white hover:bg-secondary  rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-secondary text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input
                      placeholder="First Name"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />

                    <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                      Last Name
                    </label>
                    <input
                      placeholder="Last Name"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="name"
                      name="last name"
                    />
                    <label className="block text-secondary text-sm font-bold mb-1 mt-3">
                      Email
                    </label>
                    <input
                      placeholder="Email"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                    <label className="block text-secondary text-sm font-bold mt-3 mb-1">
                      Phone Number
                    </label>
                    <input
                      placeholder="Phone Number"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="phone"
                      name="phone"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 gap-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="px-5 py-2 rounded  font-bold text-[14px] text-secondary border border-brand"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className=" px-4 py-2  font-bold text-[14px]  bg-brand rounded  hover:bg-secondary"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default OurServiceModal;
