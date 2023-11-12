import React from "react";
import PolicyParagraph from "../../components/PolicyParagraph/PolicyParagraph";

const PrivacyPolicy = () => {
  const policys = [
    {
      title: "Personal Information",
      description: "We may collect personal information such as your name, contact details, address, and other relevant details when you interact with us, request information, or use our services. We may collect personal information such as your name, contact details, address, and other relevant details when you interact with us, request information, or use our services.We may collect personal information such as your name, contact details, address, and other relevant details when you interact with us, request information, or use our services.",
    },
    {
      title: "Website Usage Information",
      description: "When you visit our website, we may collect information about your browsing behavior, including the pages you view, the links you click, and other actions taken on our site.When you visit our website, we may collect information about your browsing behavior, including the pages you view, the links you click, and other actions taken on our site.When you visit our website, we may collect information about your browsing behavior, including the pages you view, the links you click, and other actions taken on our site.",
    },
    {
      title: "Providing and Improving Services",
      description: "We use your personal information to provide and improve our services, respond to your inquiries, and fulfill your requests.We use your personal information to provide and improve our services, respond to your inquiries, and fulfill your requests.We use your personal information to provide and improve our services, respond to your inquiries, and fulfill your requests.",
    },
    {
      title: "Communication",
      description: "We may use your contact information to communicate with you about our services, updates, and relevant information.We may use your contact information to communicate with you about our services, updates, and relevant information.We may use your contact information to communicate with you about our services, updates, and relevant information.We may use your contact information to communicate with you about our services, updates, and relevant information.",
    },
    {
      title: "Marketing and Promotions",
      description: "With your consent, we may send you promotional materials and marketing communications.With your consent, we may send you promotional materials and marketing communications.With your consent, we may send you promotional materials and marketing communications.With your consent, we may send you promotional materials and marketing communications.",
    },
    {
      title: "Analytics",
      description: "We use website analytics tools to understand how visitors interact with our site, which helps us improve our website and services.We use website analytics tools to understand how visitors interact with our site, which helps us improve our website and services.We use website analytics tools to understand how visitors interact with our site, which helps us improve our website and services.We use website analytics tools to understand how visitors interact with our site, which helps us improve our website and services.",
    },
    {
      title: "Service Providers",
      description: "We may share your information with third-party service providers who assist us in providing and improving our servicesWe may share your information with third-party service providers who assist us in providing and improving our servicesWe may share your information with third-party service providers who assist us in providing and improving our servicesWe may share your information with third-party service providers who assist us in providing and improving our services",
    },
    {
      title: "Legal Compliance",
      description: "We may disclose your information when required by law or in response to legal requests.We may disclose your information when required by law or in response to legal requests.We may disclose your information when required by law or in response to legal requests.We may disclose your information when required by law or in response to legal requests.",
    },
  ];
  return (
    <>
      <p className="my-10 text-center text-3xl text-se font-bold">
        Privacy Policy
      </p>
      {policys?.map((policy, index) => (
        <PolicyParagraph
        index={index}
         key={policy.title.length}
          title={policy.title}
          description={policy.description}
        />
      ))}
    </>
  );
};

export default PrivacyPolicy;
