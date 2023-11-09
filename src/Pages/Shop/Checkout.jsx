import { React, useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

const Checkout = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  //   for payment complete
  const [isPayment, setIsPayment] = useState(false);
  console.log(isPayment);
  const handlePaymentComplete = () => {
    setIsPayment(!isPayment);
  };

  const checkoutSchema = z.object({
    name: z.string().min(6, { message: "Must be 6 or more characters long" }),
    email: z.string().email({ message: "Must be required your email" }),
    phone: z
      .string()
      .max(11, { message: "too long, Must be 11 digit required" })
      .min(11, { message: "short digit, please ensure 11 digit" }),
    address: z
      .string()
      .max(60, { message: "please enter your full home/office address" }),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [validationErrors, setValidationErrors] = useState(null);
  console.log("checkout...--->", validationErrors);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      checkoutSchema?.parse(formData);
      console.log("Data is valid:----->>>", formData);
      setValidationErrors(null);
      toast.success("Successfully order placed");
    } catch (error) {
      setValidationErrors(error.formErrors.fieldErrors);
      toast.error("Something is wrong 🛑");
    }
  };

  return (
    <>

<div className="flex flex-col text-center w-full mt-10">
        <h2 className="text-secondary font-bold text-xl uppercase relative h-auto w-full pb-1 text-center ">
         Shipping & 
          <span className="text-brand ml-1.5">Payment</span>
        </h2>
      </div>



      <div class="grid grid-cols-6 gap-4 max-w-[80%] mx-auto my-10">
        {/* part 1 */}
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg sm:col-span-6 md:col-span-3 lg:col-span-4">
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              id="text"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="name"
              className="block w-full py-3 px-5 mb-4  
              border-b-2 border-gray-100     "
            />
            {validationErrors && validationErrors.name && (
              <span className="text-red-500 text-[10px] italic">
                {validationErrors.name}
              </span>
            )}

            <input
              id="name"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e-mail"
              className="block w-full py-3 px-5 mb-4  
              border-b-2 border-gray-100     "
            />
            {validationErrors && validationErrors.email && (
              <span className="text-red-500 text-[10px] italic">
                {validationErrors.email}
              </span>
            )}

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="block w-full py-3 px-5 mb-4  
              border-b-2 border-gray-100      "
            />
            {validationErrors && validationErrors.phone && (
              <span className="text-red-500 text-[10px] italic">
                {validationErrors.phone}
              </span>
            )}

            <textarea
              id="address"
              cols="30"
              rows="5"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="please write your full address..."
              className={`block w-full py-3 px-5 mb-4  
              border-b-2 border-gray-100 ${
                validationErrors && validationErrors.address && "border-red-500"
              }`}
            ></textarea>
            {validationErrors && validationErrors.address && (
              <span className="text-red-500 text-[10px] italic">
                {validationErrors.address}
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
                All information absolutely true ?
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={`${!isPayment ? "disabled" : ""}`}
                className="btn w-1/2 py-3 mt-10 bg-brand
              font-medium text-white
              focus:outline-none hover:bg-secondary hover:shadow-none"
              >
                Order Confirm
              </button>
            </div>
          </form>
        </div>

        {/* part 2 */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 p-4 bg-gray-100 rounded-lg shadow-lg">
          <div className="bg-white rounded-lg mt-4 shadow-lg py-6">
            <p className="px-8 text-center font font-bold">Cost summery</p>
            <hr />
            <div className="px-8 mt-4">
              <div className="flex items-end justify-between">
                <span className="text-sm">Product </span>
                <span className="text-sm mb-px">10%</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-sm">Discount</span>
                <span className="text-sm mb-px">10%</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-sm">Tax</span>
                <span className="text-sm  mb-px">10%</span>
              </div>
            </div>
            <div className="px-8 mt-4 border-t pt-4">
              <div className="flex items-end justify-between">
                <span className="font-semibold">Total Taka</span>
                <span className="font-semibold">$0</span>
              </div>
            </div>

            {!!isChecked ? (
              <div className=" ml-4 flex gap-4 mt-8">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600 h-5 w-5"
                  checked={isPayment}
                  onChange={handlePaymentComplete}
                />
                <p className="italic text-[12px]">Payment completed ?</p>
              </div>
            ) : null}

            {!isPayment ? (
              <div className="flex flex-col px-8 py-8">
                <button
                  type="submit"
                  disabled={`${!isChecked ? "disabled" : ""}`}
                  className="btn w-full py-3  bg-brand font-medium text-white  hover:bg-secondary"
                >
                  Payment
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-gray-400 font-bold text-xl uppercase relative h-auto w-full pb-1 text-center ">
          🚫Product Replacement Policy🚫
        </h2>
      </div>

      <div className="mx-auto w-full md:max-w-[90%] px-28 my-10">
        <ol class="list-decimal text-gray-300 italic font-serif marker:text-5xl marker:italic marker:font-serif marker:text-gray-200 text-[12px]">
          <li>
            Customers are eligible for a product replacement if they receive a
            defective or damaged item.
          </li>
          <li>
            If a product is found to be defective or damaged upon receipt,
            customers are required to contact our customer service department
            immediately.
          </li>
          <li>
            In the rare event of an incorrect product being shipped to the
            customer, we apologize for any inconvenience caused.
          </li>
          <li>
            To initiate the replacement process, customers must contact our
            customer service department via [contact email/phone].
          </li>
          <li>
            Customers may be required to return the defective or damaged
            product, depending on the nature of the issue.
          </li>
          <li>
            Once the defective or damaged item is received and inspected, a
            replacement will be processed and shipped.
          </li>
          <li>
            Products damaged due to misuse, mishandling, or neglect are not
            eligible for replacement. - Replacement requests outside the
            specified timeframe may not be honored.
          </li>
          <li>
            For replacement inquiries, please contact our customer service
            department at [customer service email/phone].
          </li>
        </ol>
      </div>
    </>
  );
};

export default Checkout;
