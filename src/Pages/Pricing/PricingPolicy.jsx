import React from "react";

const PricingPolicy = () => {
  return (
    <>
      <div className="flex flex-col text-center w-full my-5">
        <h2 className="text-gray-400 font-bold text-xl uppercase relative h-auto w-full pb-1 text-center ">
          🚫booking cancellation Policy🚫
        </h2>
      </div>

      <div className="mx-auto w-full md:max-w-[90%] px-28 mb-10">
        <ol class="list-decimal text-gray-300 italic font-serif marker:text-5xl marker:italic marker:font-serif marker:text-gray-200 text-[12px]">
          <li>
            Termination Reasons: Specify the conditions under which either the
            owner or the contractor can terminate the contract. Common
            termination reasons include failure to perform, breach of contract,
            or force majeure events (e.g., acts of nature, strikes, or
            government actions).
          </li>
          <li>
            Notice Period: Describe the notice period that the terminating party
            must provide to the other party. This period allows the
            non-terminating party time to rectify issues or make arrangements
            for project termination
          </li>
          <li>
            Compensation for Work Done: Outline how payment will be made for
            work completed up to the point of cancellation. This may involve
            calculating the value of the work completed and any approved change
            orders.
          </li>
          <li>
            Termination Costs: Detail any costs associated with contract
            termination. These costs could include demobilization, disposal of
            materials, and any other expenses incurred due to project
            cancellation.
          </li>
          <li>
            Liquidated Damages: If applicable, specify any liquidated damages
            that may be assessed against the contractor if the owner terminates
            the contract. Liquidated damages are pre-determined amounts the
            contractor agrees to pay if they fail to meet certain milestones or
            deadlines.
          </li>
          <li>
            Payment for Materials and Equipment: Clarify how payment for
            materials and equipment that have been purchased but not yet used on
            the project will be handled. This may include reimbursement or
            ownership transfer.
          </li>
          <li>
            Subcontractor and Supplier Payments: Address how the termination
            will affect payments to subcontractors and suppliers. It's important
            to ensure that subcontractors and suppliers are compensated fairly
            and that they are informed of the termination.
          </li>
          <li>
            Ownership of Work: Define who will have ownership of any work,
            drawings, plans, and specifications created for the project. This
            can be important if the owner decides to complete the project with
            another contractor.
          </li>
          <li>
            Dispute Resolution: Include a provision for resolving disputes
            related to the termination, such as through mediation, arbitration,
            or litigation.
          </li>
          <li>
            Compliance with Legal Requirements: Ensure that the cancellation
            policy complies with local laws and regulations regarding
            construction contracts.
          </li>
        </ol>
      </div>
    </>
  );
};

export default PricingPolicy;
