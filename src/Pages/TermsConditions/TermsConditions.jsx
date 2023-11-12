import React from "react";
import PolicyParagraph from "../../components/PolicyParagraph/PolicyParagraph";

const TermsConditions = () => {
  const conditions = [
    {
      title: "General Terms",
      description: "By engaging in any business relationship with [Your Construction Company Name], clients agree to abide by the terms and conditions outlined herein.Your Construction Company Name reserves the right to modify these terms at any time. Clients will be notified of any changes, and continued use of our services implies acceptance of the modified terms."
    },
    {
      title: "Services",
      description: "Your Construction Company Name] agrees to provide construction services as agreed upon in the contract or agree The client is responsible for providing accurate and complete project details to ensure the successful execution of services.Your Construction Company Name will make reasonable efforts to complete projects within the agreed-upon timeframe. Delays caused by unforeseen circumstances or events beyond our control may occur, and [Your Construction Company Name] shall not be held liable for such delays."
    },
    {
      title: "Payments:",
      description: "Clients agree to pay [Your Construction Company Name] according to the agreed-upon payment schedule outlined in the contract.Invoices not paid within the specified timeframe are subject to late fees as outlined in the contract.Failure to make payments may result in the suspension of services or termination of the contract."
    },
    {
      title: "Changes and Amendments:",
      description: "Any changes to the scope of work must be agreed upon by both parties in writing.Your Construction Company Name] reserves the right to adjust project timelines and costs for changes requested by the client."
    },
    {
      title: "Termination",
      description: "Either party may terminate the contract in writing for a material breach of its terms by the other party.Termination by the client may result in additional fees as outlined in the contract."
    },
    {
      title: "Liability",
      description: "Your Construction Company Name] is not liable for damages or delays caused by events beyond our control, including but not limited to natural disasters, government actions, or labor strikes.Your Construction Company Name] is not responsible for the discovery of unforeseen conditions that may affect the cost or timeline of the project."
    },
    {
      title: "Confidentiality",
      description: "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project."
    },
    {
      title: "Dispute Resolution",
      description: "Any disputes arising from this agreement shall be resolved through negotiation and, if necessary, mediation before pursuing legal action.By engaging in business with [Your Construction Company Name], clients acknowledge that they have read, understood, and agreed to these terms and conditions."
    }
  ];
  return (
    <>
      <p className="my-10 text-center text-3xl text-se font-bold">
        Terms & conditions
      </p>
      {conditions?.map((condition, index) => (
        <PolicyParagraph
        index={index}
         key={condition.title.length}
          title={condition.title}
          description={condition.description}
        />
      ))}
    </>
  );
};

export default TermsConditions;
