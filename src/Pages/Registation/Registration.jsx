import { Icon } from "@iconify/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { z } from "zod";
import logo from "../../assets/logo/colorLogo.png";
const Registration = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const userSchema = z.object({
    name: z.string().min(6, { message: "Must be 6 or more characters long" }),
    email: z.string().email({ message: "Must be required your email" }),
    password: z.string().min(6, { message: "Must be 6 digit" }),
    phone: z
      .string()
      .max(11, { message: "too long, Must be 11 digit required" })
      .min(11, { message: "short digit, please ensure 11 digit" }),
    district: z
      .string()
      .min(5, { message: "please enter your district (min 12 characters)" }),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    district: "",
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
      console.log("Data is valid:----->>>", formData);
      setValidationErrors(null);
      toast.success("Successfully submitted");
    } catch (error) {
      setValidationErrors(error.formErrors.fieldErrors);
      toast.error("submit Failed");
    }
  };

  return (
    <>
      <div className="flex flex-col my-20">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
      px-6 py-10 sm:px-10 sm:py-6 
      bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <img src={logo} alt="" className="mx-auto w-48" />
            <form onSubmit={handleSubmit} className="mt-10">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="name"
                className="block w-full py-3 px-1 mt-2 mb-4   
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              />
              {validationErrors && validationErrors.name && (
                <span className="text-red-500 text-[10px] italic">
                  {validationErrors.name}
                </span>
              )}

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e-mail"
                className="block w-full py-3 px-1 mt-2 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              />
              {validationErrors && validationErrors.email && (
                <span className="text-red-500 text-[10px] italic">
                  {validationErrors.email}
                </span>
              )}

              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="block w-full py-3 px-1 mt-2 
                 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              />
              {validationErrors && validationErrors.password && (
                <span className="text-red-500 text-[10px] italic">
                  {validationErrors.password}
                </span>
              )}

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="block w-full py-3 px-1 mt-2 
                 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              />
              {validationErrors && validationErrors.phone && (
                <span className="text-red-500 text-[10px] italic">
                  {validationErrors.phone}
                </span>
              )}

              <input
                id="district"
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                placeholder="district"
                className="block w-full py-3 px-1 mt-2 
                 
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              />
              {validationErrors && validationErrors.district && (
                <span className="text-red-500 text-[10px] italic">
                  {validationErrors.district}
                </span>
              )}
              {/* terms and condition */}

              <div className="flex gap-1 mt-8">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600 h-5 w-5"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p className="italic text-[12px]">
                  are you agree ? our Terms and Conditions
                </p>
                <span
                  className={`${
                    !isChecked ? "text-secondary" : "text-brand"
                  } text-2xl -mt-1`}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-delay-hide={500}
                >
                  <Icon icon="heroicons-solid:light-bulb" />
                </span>
              </div>

              <button
                type="submit"
                disabled={`${!isChecked ? "disabled" : ""}`}
                className="btn w-full py-3 mt-10 bg-brand
              font-medium text-white
              focus:outline-none hover:bg-secondary hover:shadow-none"
              >
                Registration
              </button>
            </form>
            <Link
              to="/login"
              className="text-sm italic underline flex justify-start mx-auto hover:text-brand mt-3"
            >
              Already Registered ?
            </Link>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" place="bottom">
        <>
          <h3 className="text-brand">Terms and Conditions</h3>
          <hr />
          <ul className="text-yellow-300">
            <li>
              Accuracy of Information: You certify that all the information
              provided during registration is accurate and complete.
            </li>
            <li>
              Governing Law: These terms are governed by the laws, and you agree
              to submit to the exclusive jurisdiction of its courts.
            </li>
          </ul>
        </>
      </Tooltip>
      {/* <Login /> */}
    </>
  );
};

export default Registration;
