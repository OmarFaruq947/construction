import React from "react";

const InputFiled = ({type, name, placeholder}) => {
  return (
    <div className="w-full px-3 lg:w-1/3 md:w-1/2 mb-6">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand focus:shadow-md"
      />
    </div>
  );
};

export default InputFiled;
