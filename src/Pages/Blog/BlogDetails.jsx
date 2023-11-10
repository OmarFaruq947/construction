import { Icon } from "@iconify/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic4.png";
import banner from "../../assets/Banner/pic1.jpg";
import blogImage from "../../assets/blogpic/pic2.jpg";
import {
  default as blogImage2,
  default as blogImage3,
  default as blogImage4,
} from "../../assets/blogpic/pic4.jpg";

const BlogDetails = () => {
  const bannerContent = {
    heading: "blog grid",
    afterPage: "home",
    beforePage: "blog grid",
    banner: `${banner}`,
    banner_imag: `${bannerImg}`,
  };

  const {id} = useParams()
  console.log(id);

  return (
    <>
      <AllComponentTopBanner bannerContent={bannerContent} />

      {/* blog */}
      <section>
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2">
              {/* blog details section */}
              <section className="bg-white ">
                <div className=" px-6 py-10 space-y-3">
                  {/* blog image`` */}
                  <div>
                    <img src={blogImage} alt="" className="w-full h-80" />
                  </div>
                  {/* Some minor details about blog`` */}
                  <div className="flex md:space-x-4 w-full">
                    <div>
                      <p className="flex items-center justify-between ">
                        <Icon
                          className="text-brand md:mr-2"
                          icon="ant-design:comment-outlined"
                        />{" "}
                        2 comments
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <p className="flex items-center justify-between">
                        <Icon
                          className="text-brand md:mr-2"
                          icon="ph:factory"
                        />
                        Factory
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center justify-between ">
                        <Icon
                          className="text-brand md:mr-2"
                          icon="ic:baseline-person"
                        />
                        posted by admin
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center justify-between ">
                        <Icon
                          className="text-brand mr-2"
                          icon="simple-line-icons:calender"
                        />
                        December 11, 2022
                      </p>
                    </div>
                  </div>
                  {/* blog full details`` */}
                  <div>
                    <h1 className="text-4xl text-secondary font-semibold">
                      Blog Title Here
                    </h1>
                  </div>
                  <hr />
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fuga tempora molestiae error harum quas repellat hic illum
                      eaque recusandae, nesciunt rerum obcaecati enim atque
                      quibusdam laudantium minima eos perspiciatis dignissimos!
                      Impedit accusamus ab unde sequi facere odit similique
                      illum provident quaerat dolores, error, placeat esse
                      voluptatem sint, tenetur officiis reiciendis aut
                      voluptates fuga sunt atque praesentium. Dolorum eligendi
                      sit nulla voluptatum dolor veritatis totam. Voluptas,
                      corrupti odit officiis soluta nisi repudiandae dolores
                      atque molestias in eaque impedit animi a placeat ex
                      suscipit. Sapiente autem quaerat vero, nesciunt molestias
                      veniam amet itaque voluptas eum. Assumenda laborum,
                      distinctio commodi voluptatibus fugiat nostrum eligendi
                      nemo, non eaque corrupti ipsum fuga quam ab accusantium a
                      eum, sunt modi saepe explicabo facere. Libero hic ratione
                      corrupti vitae reprehenderit, error aut vero sunt pariatur
                      optio commodi nulla cumque itaque quaerat, facilis quae
                      deserunt reiciendis molestias rem quis? Omnis voluptatum
                      qui natus eaque sequi, ratione in alias assumenda incidunt
                      aperiam, temporibus esse doloribus laborum quis officiis
                      optio nulla, modi vitae! Dolores excepturi temporibus
                      alias, dignissimos culpa asperiores maiores porro
                      accusamus a in soluta cupiditate sequi necessitatibus quos
                      ratione voluptas quia? Exercitationem unde esse, quod
                      incidunt dolore ex. Velit, rem? Asperiores architecto ex
                      voluptatem quibusdam perferendis libero maiores?
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center">
                      <Icon
                        icon="mdi:tag-outline"
                        className="text-brand mr-2"
                      />
                      Factory
                    </p>
                  </div>
                  <hr />
                  {/* all users comments here */}
                  <div className="grid space-y-3 text-sm">
                    <h1 className="text-xl font-semibold">Comments</h1>
                    <div className="w-full bg-slate-50 rounded-lg shadow-md cursor-pointer">
                      <div className="flex p-4 space-x-5 group">
                        <div>
                          <Icon
                            icon="clarity:avatar-line"
                            width="100px"
                            className="bg-slate-200"
                          />
                        </div>
                        <div className="space-y-3">
                          <h3 className="flex items-center">
                            WRITTEN BY{" "}
                            <p className="text-brand mx-2 group-hover:translate-x-3 font-semibold duration-300">
                              JOSH
                            </p>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Blanditiis nobis doloremque dicta iste
                            impedit, sint odio vero corporis voluptas molestiae.
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid, ab iure? Iusto quaerat eos, et
                            dignissimos natus velit obcaecati ex.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-slate-50 rounded-lg shadow-md cursor-pointer">
                      <div className="flex p-4 space-x-5 group">
                        <div>
                          <Icon
                            icon="clarity:avatar-line"
                            width="100px"
                            className="bg-slate-200"
                          />
                        </div>
                        <div className="space-y-3">
                          <h3 className="flex items-center">
                            WRITTEN BY{" "}
                            <p className="text-brand mx-2 group-hover:translate-x-3 font-semibold duration-300">
                              BUTLER
                            </p>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Blanditiis nobis doloremque dicta iste
                            impedit, sint odio vero
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* user comments end here */}
                  <hr />
                  <div>
                    <h1 className="font-semibold text-xl">Post A Comment</h1>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="uppercase text-secondary text-xs font-bold mb-2">
                        Name*
                      </label>
                      <input
                        className="appearance-none block w-full md:w-1/2 bg-slate-100 text-gary-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="Your Name Here"
                        required
                      />
                    </div>
                    <div>
                      <label className="uppercase text-secondary text-xs font-bold mb-2">
                        Email*
                      </label>
                      <input
                        className="appearance-none block w-full md:w-1/2 bg-slate-100 text-gary-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
                        type="email"
                        placeholder="email@domain.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="uppercase text-secondary text-xs font-bold mb-2">
                        Comment
                      </label>
                      <textarea
                        className="appearance-none block border w-full rounded focus:outline-none focus:bg-white bg-slate-100"
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        href="#"
                        className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-brand rounded hover:bg-white group"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                          Submit
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* Blog details section end here */}
            </div>
            <div className="grid rounded  sm:p-8 relative mt-7">
              <div className="mx-auto mt-1 w-full text-center rounded-md lg:text-left">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      class="w-full text-gray-900 bg-slate-100 p-4 pe-12 text-xs shadow-sm"
                      placeholder="Search..."
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <Icon icon="material-symbols:search" width={20} />
                    </span>
                  </div>
                </div>
                <div className="group">
                  <div>
                    <h1 className="text-secondary font-bold text-xl mt-14 mb-5 flex align-baseline items-center">
                      Latest Postst
                      <Icon
                        icon="ph:arrow-right-duotone"
                        className="group-hover:translate-x-5 duration-300"
                      />
                    </h1>
                  </div>
                  <div>
                    <div className="flex my-3">
                      <div className="w-1/2 flex justify-center items-center">
                        <img src={blogImage4} alt="" />
                      </div>
                      <div className="ml-2">
                        <h1 className="text-secondary font-bold text-lg hover:underline duration-300">
                          Industrial Factory Building Equipment 2021
                        </h1>
                        <h3 className="text-gray-500 font-bold text-xs">
                          SEPTEMBER 21, 2020
                        </h3>
                      </div>
                    </div>
                    <div className="flex my-3">
                      <div className="w-1/2 flex justify-center items-center">
                        <img src={blogImage3} alt="" />
                      </div>
                      <div className="ml-2">
                        <h1 className="text-secondary font-bold text-lg hover:underline duration-300">
                          Industrial Factory Building Equipment 2021
                        </h1>
                        <h3 className="text-gray-500 font-bold text-xs">
                          SEPTEMBER 21, 2020
                        </h3>
                      </div>
                    </div>
                    <div className="flex my-3">
                      <div className="w-1/2 flex justify-center items-center">
                        <img src={blogImage2} alt="" />
                      </div>
                      <div className="ml-2">
                        <h1 className="text-secondary font-bold text-lg hover:underline duration-300">
                          Industrial Factory Building Equipment 2021
                        </h1>
                        <h3 className="text-gray-500 font-bold text-xs">
                          SEPTEMBER 21, 2020
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div>
                    <h1 className="text-secondary font-bold text-xl mt-14 flex align-baseline items-center">
                      Categories{" "}
                      <Icon
                        icon="ph:arrow-right-duotone"
                        className="group-hover:translate-x-5 duration-300"
                      />
                    </h1>
                  </div>
                  <ul>
                    <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                      Architecture
                    </li>
                    <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                      Building
                    </li>
                    <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                      Construction
                    </li>
                    <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                      Factory
                    </li>
                    <li className="mt-5 text-sm text-gray-500 font-bold hover:underline duration-300">
                      Renovation
                    </li>
                  </ul>
                </div>
                <div className="group">
                  <div>
                    <h1 className="text-secondary font-bold text-xl mt-14 flex align-baseline items-center">
                      Tags{" "}
                      <Icon
                        icon="ph:arrow-right-duotone"
                        className="group-hover:translate-x-5 duration-300"
                      />
                    </h1>
                  </div>
                  <ul className="grid md:grid-cols-2 grid-cols-3 mt-5">
                    <li className="mt-5">
                      <Link
                        to="/"
                        className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                      >
                        Architecture
                      </Link>
                    </li>
                    <li className="mt-5">
                      <Link
                        to="/"
                        className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                      >
                        Building
                      </Link>
                    </li>
                    <li className="mt-5 ">
                      <Link
                        to="/"
                        className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                      >
                        Construction
                      </Link>
                    </li>
                    <li className="mt-5 ">
                      <Link
                        to="/"
                        className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                      >
                        Factory
                      </Link>
                    </li>
                    <li className="mt-5 mb-10">
                      <Link
                        to="/"
                        className="bg-brand py-1 px-3 font-bold text-white hover:shadow-lg"
                      >
                        Renovation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
