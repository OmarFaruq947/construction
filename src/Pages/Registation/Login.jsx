import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { z } from "zod";
import logo from "../../assets/logo/colorLogo.png";
const Login = () => {


  const userSchema = z.object({
    email: z.string().email({ message: "Must be required your email" }),
    password: z.string().min(6, { message: "Must be 6 digit" }),
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      userSchema?.parse(formData);
      console.log("Login Data is valid:----->>>", formData);
      setValidationErrors(null);
      toast.success("Successfully submitted");
    } catch (error) {
      setValidationErrors(error.formErrors.fieldErrors);
      toast.error("submit Failed");
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
      px-6 py-10 sm:px-10 sm:py-6 
      bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <img src={logo} alt="" className="mx-auto w-48" />
            <form className="mt-10" onSubmit={handleSubmit}>
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
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e-mail address"
                autoComplete="email"
                className="block w-full py-3 px-1 mt-2 
              text-brand appearance-none 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              />
               {validationErrors && validationErrors.email && (
                <span className="text-red-500 text-[10px] italic">
                  {validationErrors.email}
                </span>
              )}

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
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="current-name"
                className="block w-full py-3 px-1 mt-2 mb-4
              text-brand appearance-none 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              />
               {validationErrors && validationErrors.password && (
                <span className="text-red-500 text-[10px] italic">
                  {validationErrors.password}
                </span>
              )}

              <button
                type="submit"
                className="w-full py-3 mt-10 bg-brand
              font-medium text-white uppercase
              focus:outline-none hover:bg-secondary hover:shadow-none"
              >
                Login
              </button>
            </form>
            <Link
              to="/registration"
              className="text-sm italic underline flex justify-start mx-auto hover:text-brand mt-3"
            >
              Register first if not registered
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
