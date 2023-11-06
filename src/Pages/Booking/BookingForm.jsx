import React from "react";
import InputFiled from "../../components/InputFiled/InputFiled";

const BookingForm = () => {
  return (
    <>
      <div className="mx-auto w-full md:max-w-[80%]  border border-gray-100 p-10">
        <form>
          <div className="mb-5 pt-3">
            <div className="-mx-3 flex flex-wrap">
              <InputFiled type="text" name="name" placeholder="Full Name" />

              <InputFiled type="email" name="email" placeholder="Email" />
              <InputFiled type="tel" name="phone" placeholder="Phone Number" />
              <InputFiled
                type="tel"
                name="phone"
                placeholder="Alternative Phone No."
              />
              <InputFiled
                type="text"
                name="present-address"
                placeholder="Present Address"
              />

              <InputFiled
                type="text"
                name="working-site-address"
                placeholder="working Site Address"
              />

              <InputFiled type="text" name="nid" placeholder="NID No." />

              <InputFiled
                type="text"
                name="additional-information"
                placeholder="Additional Information"
              />
            </div>
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-brand hover:bg-secondary duration-300 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Book Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
