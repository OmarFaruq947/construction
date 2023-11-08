import React, { useState } from "react";
import toast from "react-hot-toast";

import { z } from "zod";

const UserFeedBack = () => {
  const userSchema = z.object({
    feedback: z
      .string()
      .min(50, { message: "Must be required minimum 50 character" }),
  });

  const [formData, setFormData] = useState({
    name: "omar faruq",
    email: "omar@gmail.com",
    feedback: "",
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
      <div className="bg-white rounded-lg w-1/2">
        <form onSubmit={handleSubmit} className="p-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={formData.name}
            disabled={true}
            className="block w-full py-3 px-1 mt-2 mb-4 
              border-2 border-gray-100 cursor-not-allowed bg-gray-200
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={formData.email}
            disabled={true}
            className="block w-full py-3 px-1 mt-2 
              appearance-none bg-gray-200
              border-2 border-gray-100 cursor-not-allowed
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
          />

          <textarea
            cols="30"
            rows="5"
            type=""
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            placeholder="please write your feedback..."
            className={`block w-full py-3 px-1 mt-2  border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200  ${
              validationErrors && validationErrors.feedback && "border-red-500"
            }`}
          ></textarea>
          {validationErrors && validationErrors.feedback && (
            <span className="text-red-500 text-[10px] italic">
              {validationErrors.feedback}
            </span>
          )}

          <button
            type="submit"
            className="btn w-full py-3 mt-10 bg-brand
              font-medium text-white
              focus:outline-none hover:bg-secondary hover:shadow-none"
          >
            Submit your feedback
          </button>
        </form>
      </div>
    </>
  );
};

export default UserFeedBack;
