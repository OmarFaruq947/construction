import React from "react";
import png2 from "../../assets/icon/location.png";
import png1 from "../../assets/icon/mail.png";
import png3 from "../../assets/icon/phone.png";
import mapBanner from "../../assets/stateBackground/light-map.png";

const Contact = () => {
  return (
    <>
      <div className="relative">
        <img
          src={mapBanner}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="absolute inset-0 bg-opacity-100 bg-gradient-to-r from-secondary"></div>
        <div className="relative ">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-around xl:flex-row ">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Reach Out To Us In The <br></br> Nearest
                  <span className="text-teal-accent-400 text-brand ml-2">
                    Office.
                  </span>
                </h2>

                <div href="tel:+88 01303 384414" className="mt-16">
                  <div className=" flex items-center gap-4">
                    <p className=" rounded-md">
                      <img src={png1} alt="" className="w-16 h-16 p-3" />
                    </p>
                    <div>
                      <h1 className="text-lg font-semibold text-gray-400">
                        infolazy@gmail.com
                      </h1>
                      <a
                        href="tel:+8801303384414"
                        className="text-lg font-semibold text-gray-400"
                      >
                        contact@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className=" flex items-center gap-4">
                    <p className=" rounded-md">
                      <img src={png2} alt="" className="w-16 h-16  p-3" />
                    </p>
                    <div>
                      <h1 className="text-lg font-semibold text-gray-400">
                        infolazy@gmail.com
                      </h1>
                      <a
                        href="tel:+8801303384414"
                        className="text-lg font-semibold text-gray-400"
                      >
                        contact@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex items-center gap-4">
                    <p className=" rounded-md">
                      <img src={png3} alt="" className="w-16 h-16  p-3" />
                    </p>
                    <div>
                      <h1 className="text-lg font-semibold text-gray-400">
                        +(123) 1234-567-8901
                      </h1>
                      <a
                        href="tel:+8801303384414"
                        className="text-lg font-semibold text-gray-400"
                      >
                        +(123) 1234-567-8901
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-xl xl:w-5/12">
                <h3 className="mb-4 text-xl text-white font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Contact-Us
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <input
                      placeholder=" First name"
                      required=""
                      type="text"
                      className="  w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <input
                      placeholder=" Last name"
                      required=""
                      type="text"
                      className="  w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <input
                      placeholder="Email Address"
                      required=""
                      type="text"
                      className="w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none  focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <textarea
                    name="comment"
                    rows="5"
                    cols="50"
                    placeholder="Message"
                    className="  w-full px-4 mb-2 transition duration-200 bg-transparent border border-brand inset-0 bg-opacity-100 bg-gradient-to-r from-secondary text-brand rounded   appearance-none focus:outline-none focus:shadow-outline"
                  ></textarea>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="w-full h-12 px-6 tracking-wide bg-brand hover:bg-secondary text-white transition duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-80 bg-gray-300 rounded-lg overflow- sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.383596373436!2d90.34606223734163!3d23.806295990218175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c5074ec8db%3A0x1450dad46461cbe8!2sMirpur-2%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1684572048986!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
