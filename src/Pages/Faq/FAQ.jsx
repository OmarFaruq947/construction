import React from "react";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic2.png";
import backgroundImg from "../../assets/Banner/bannerBackground2.jpg";
import Heading from "../../components/Heading/Heading";
import { useGetFaqQuery } from "../../redux/fetures/faq/faqApi";
const FAQ = () => {
  const { data: faqData, error, isLoading } = useGetFaqQuery(null);
  console.log("user info data",faqData);  // for testing purpose



  const bannerContent = {
    heading: "faq",
    afterPage: "home",
    beforePage: "faq",
    banner_imag: `${bannerImg}`,
    banner: `${backgroundImg}`,
  };
const  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptates vero ad, veniam aut officia id? Unde maxime reprehenderit expedita quam iusto, voluptatibus error et quasi officia accusantium consequatur fugit"
  return (
    <>
      {/* banner section start*/}
      <AllComponentTopBanner bannerContent={bannerContent} />
      {/* banner section end*/}

      <Heading
        text1="Do you"
        text2="Know ?"
        description={description}
      />

      <div className="max-w-[70%] px-4 my-10 mx-auto sm:px-6 lg:px-8 space-y-4 mb-20">
        {faqData?.map((faq, index) => (
          <div className="collapse collapse-plus border border-brand" key={faq?._id}>
            <input
              type="radio"
              name="my-accordion-3"
              checked={faq?.active ? "checked " : null}
            />
            <div className="collapse-title text-xl font-medium text-gray-600">
              <span className="text-4xl italic text-gray-400">{ index+1 }.</span>
              {faq?.question}
            </div>
            <div className="collapse-content text-gray-600">
              <p>{faq?.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
