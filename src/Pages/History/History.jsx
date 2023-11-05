import React from "react";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic1.png";
import banner from "../../assets/Banner/pic1.jpg";

import logo from "../../assets/logo/colorLogo.png";

const History = () => {
  const print = () => {
    let printContents = document.getElementById("printDiv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const bannerContent = {
    heading: "HISTORY",
    afterPage: "home",
    beforePage: "history",
    banner_imag: `${bannerImg}`,
    banner: `${banner}`,
  };

  return (
    <>
      {/* banner section start*/}
      <AllComponentTopBanner bannerContent={bannerContent} />
      {/* banner section end*/}

      <section className="bg-backgroundColor py-20">
        <div className="flex flex-col text-center w-full mb-20 pt-14">
          <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
            product
            <span className="text-brand"> History</span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
            Construction is a general term meaning the art and science to form
            objects systems organizations, and comes from Latin construction and
            Old French construction. To construct is the verb: the act of
            building, and the noun is construction.
          </p>
        </div>
        <div className="max-w-2xl mx-auto py-0 md:py-16">
          <article className="drop-shadow-md md:rounded-md overflow-hidden">
            <div id="printDiv" className="md:rounded-b-md  bg-gray-100">
              <div className="p-9 border-b border-yellow-100">
                <div className="space-y-6">
                  <div className="flex justify-between items-top">
                    <div className="space-y-4">
                      <div>
                        <img className="h-8 object-cover mb-4" src={logo} />
                        <p className="font-bold text-lg"> Invoice </p>
                        <p> MJWebs </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-400">
                          Billed To
                        </p>
                        <p> Tony Stark </p>
                        <p> tony@starkindustriesxyz.com </p>
                        <p> (02) 1234 1234 </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm text-gray-400">
                          Invoice Number
                        </p>
                        <p> INV-MJ0001 </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-400">
                          Invoice Date
                        </p>
                        <p> 31 December 2021 </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-400">ABN</p>
                        <p> 57 630 182 446 </p>
                      </div>
                      <div>
                        <a
                          href="#"
                          target="_blank"
                          className="inline-flex items-center text-sm font-medium  text-secondary hover:opacity-75 "
                        >
                          Download PDF
                          <svg
                            className="ml-0.5 h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          target="_blank"
                          className="inline-flex items-center text-sm font-medium  text-secondary hover:opacity-75 "
                        >
                          Pay Balance
                          <svg
                            className="ml-0.5 h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-9 border-b border-yellow-100">
                <p className="font-medium text-sm text-gray-400"> Note </p>
                <p className="text-sm"> Thank you for your order. </p>
              </div>
              <table className="w-full divide-y divide-yellow-100 text-sm">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-9 py-4 text-left font-semibold text-gray-400"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-left font-semibold text-gray-400"
                    ></th>
                    <th
                      scope="col"
                      className="py-3 text-left font-semibold text-gray-400"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-left font-semibold text-gray-400"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-left font-semibold text-gray-400"
                    />
                  </tr>
                </thead>
                <tbody className="divide-y divide-yellow-100">
                  <tr>
                    <td className="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                      <div>
                        <p> Jericho III (YA-4) </p>
                        <p className="text-sm text-gray-400">
                          Nuclear-armed ICBM
                        </p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap text-gray-600 truncate" />
                    <td className="whitespace-nowrap text-gray-600 truncate">
                      $380,000.00
                    </td>
                    <td className="whitespace-nowrap text-gray-600 truncate">
                      0%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                      <div>
                        <p> Pym Particles (Pack of 10,000) </p>
                        <p className="text-sm text-gray-400">
                          Redacted Description
                        </p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap text-gray-600 truncate" />
                    <td className="whitespace-nowrap text-gray-600 truncate">
                      $280,000.00
                    </td>
                    <td className="whitespace-nowrap text-gray-600 truncate">
                      0%
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-9 border-b border-yellow-100">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gray-500 text-sm"> Subtotal </p>
                    </div>
                    <p className="text-gray-500 text-sm"> $660,000.00 </p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gray-500 text-sm"> Tax </p>
                    </div>
                    <p className="text-gray-500 text-sm"> $0.00 </p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gray-500 text-sm"> Total </p>
                    </div>
                    <p className="text-gray-500 text-sm"> $660,000.00 </p>
                  </div>
                </div>
              </div>
              <div className="p-9 border-b border-yellow-100">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold  text-brand text-lg">
                        Amount Due
                      </p>
                    </div>
                    <p className="font-bold  text-brand text-lg"> $360.00 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={print}
                className="bg-yellow-200 text-yellow-900 py-2 px-4 rounded shadow hover:shadow-xl hover:bg-yellow-300 duration-300"
              >
                Print This Page
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default History;
