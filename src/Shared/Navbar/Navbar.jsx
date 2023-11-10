import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import colorLogo from "../../assets/logo/colorLogo.png";

import ProductPrice from "../../Pages/Shop/ProductPrice";
import ShopDetailsCard from "../../Pages/Shop/ShopDetailsCard";
import "./Navbar.css";

const Navbar = () => {
  const [isLogeIn, setLogeIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [doctorsDropdownOpen, setDoctorsDropdownOpen] = useState(false);


  //for blog
  const toggleBlogDropdown = () => setBlogDropdownOpen(!blogDropdownOpen);
  const blogDropdownClose = () => setBlogDropdownOpen(false);


  const menuItems = (
    <>
      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-400">
        <Link
        onClick={isMenuOpen}
          to="/"
          className="flex group items-center py-[14px]  hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Home</span>
        </Link>
      </li>

      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-400">
        <Link
        onClick={isMenuOpen}
          to="/team"
          className="flex group items-center py-[14px]  hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Team</span>
        </Link>
      </li>

      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300 ">
        <Link
        onClick={isMenuOpen}
          to="/blogRegular"
          className="flex group items-center py-[14px]   hover:translate-x-1 duration-300 uppercase  text-[14px]"
        >
          <span>Blog</span>
        </Link>
      </li>
      

      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300  ">
        <Link
        onClick={isMenuOpen}
          to="/ProjectDetails"
          className="flex group items-center py-[14px]  hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Project</span>
        </Link>
      </li>
     

      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300">
        <Link
        onClick={isMenuOpen}
          to="/servicesDetails"
          className="flex group items-center py-[14px]  hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Service</span>
        </Link>
      </li>

      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-400">
        <Link
        onClick={isMenuOpen}
          to="/shop"
          className="flex group items-center py-[14px]  hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Store</span>
        </Link>
      </li>

      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300">
        <Link
        onClick={isMenuOpen}
          to="/pricing"
          className="flex group items-center py-[14px]  hover:translate-x-1 duration-300 uppercase  text-[14px] "
        >
          <span>Pricing</span>
        </Link>
      </li>
     

      <li className="font-bold nav-item  text-[14px] text-black  hover:text-brand duration-300">
        <Link
          onClick={isMenuOpen}
          to="/contact"
          className="flex group items-center py-[14px] hover:translate-x-1 duration-300 uppercase  text-[14px]"
        >
          Contact us
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#FFFFFF] sticky shadow-md  top-0 z-50 border-4 border-white">
      <div className="px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
           
            className="inline-flex items-center"
          >
            <img src={colorLogo} alt="..." className="w-40" />
          </Link>
          <ul className="items-center nav-list hidden space-x-4 lg:flex">
            {menuItems}
          </ul>
          <ul className=" items-center hidden space-x-8 lg:flex">
            {/* add to cart start*/}
            <li className="cursor-pointer indicator drawer drawer-end">
              <span className="indicator-item badge badge-secondary">3</span>
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <Icon
                    icon="tdesign:cart-add"
                    className="text-secondary w-7 h-7"
                  />
                </label>
              </div>
              <div className="drawer-side z-[9999]">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-[85%] mt-[6.8%] bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <p className="text-center font-semibold mb-3 text-secondary text-lg">
                    Product List (3)
                  </p>
                  <li>
                    <ShopDetailsCard />
                    <ShopDetailsCard />
                    <ShopDetailsCard />
                  </li>
                  <li>
                    <ProductPrice />
                  </li>
                </ul>
              </div>
            </li>
            {/* add to cart end */}
            <li>
              <div
                className="avatar dropdown dropdown-end  mt-1.5"
                tabIndex={0}
              >
                <div className="w-10 rounded-full ring ring-brand  ring-offset-2 ">
                  <img
                    src={
                      !isLogeIn
                        ? "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png"
                        : "https://i.ibb.co/nn1YTRS/image159-1024x655.jpg"
                    }
                  />
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-white mt-3 rounded-box w-52"
                  >
                    <li className="bg-brand mb-[1px] rounded-lg">
                      <Link to="/dashboard/profile">Profile</Link>
                    </li>
                    <li className="bg-brand mb-[1px] rounded-lg">
                      <Link to="/dashboard/user-dashboard">Dashboard</Link>
                    </li>
                    <li className="bg-brand mb-[1px] rounded-lg">
                      <a>Settings</a>
                    </li>
                    <li className="bg-brand mb-[1px] rounded-lg">
                      <a
                        target="_blank"
                        href="https://omarfaruqmebd.netlify.app/"
                      >
                        Developer
                      </a>
                    </li>

                    <li className="mt-1.5 bg-secondary text-brand rounded-md">
                      {!!isLogeIn ? (
                        <span>
                          {" "}
                          <Icon icon="ic:outline-logout" />
                          Log out
                        </span>
                      ) : (
                        <Link to="/registration">
                          {" "}
                          <Icon icon="material-symbols-light:login-outline" />{" "}
                          Logo In
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white  border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={colorLogo} alt="" className="w-52" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul>{menuItems}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
