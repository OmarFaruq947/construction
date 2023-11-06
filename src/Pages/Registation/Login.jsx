import React from "react";
import logo from "../../assets/logo/colorLogo.png";
const Login = () => {
  return (
    <>
      {/* Container */}
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Auth Card Container */}
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          {/* Auth Card */}
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
      px-6 py-10 sm:px-10 sm:py-6 
      bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            {/* Card Title */}

            <img src={logo} alt="" className="mx-auto w-48" />

            <form className="mt-10" method="POST">
              {/* Email Input */}
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-secondary uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e-mail address"
                autoComplete="email"
                className="block w-full py-3 px-1 mt-2 
              text-brand appearance-none 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />
              {/* name Input */}
              <label
                htmlFor="name"
                className="block mt-2 text-xs font-semibold text-secondary uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                autoComplete="current-name"
                className="block w-full py-3 px-1 mt-2 mb-4
              text-brand appearance-none 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />

              <button
                type="submit"
                className="w-full py-3 mt-10 bg-brand
              font-medium text-white uppercase
              focus:outline-none hover:bg-secondary hover:shadow-none"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
