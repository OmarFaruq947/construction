import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";
import pic1 from "../../assets/Profile Pic/profilePic1.jpg";
import pic2 from "../../assets/Profile Pic/profilePic2.jpg";
import pic3 from "../../assets/Profile Pic/profilePic3.jpg";
import pic4 from "../../assets/Profile Pic/profilePic4.jpg";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      avatar: `${pic1}`,
      testimonialText:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      name: "omar faruq",
      designation: "Architecture",
    },

    {
      id: 2,
      avatar: `${pic2}`,
      testimonialText:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      name: "Md. Rifat",
      designation: "civil engineer",
    },

    {
      id: 3,
      avatar: `${pic3}`,
      testimonialText:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      name: "Md. Sadid",
      designation: "Architecture",
    },

    {
      id: 4,
      avatar: `${pic4}`,
      testimonialText:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      name: "Md. Bappi",
      designation: "Civil engineer",
    },
  ];
  return (
    <>
      <section className="text-text body-font">
        <div className="px-0 py-24 mx-auto">
         
            <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
              Grate
              <span className="text-brand"> Testimonial</span>
            </h2>
        

          <div className="flex flex-wrap ">
            <Carousel
              
              plugins={[
                "centered",
                "infinite",
                {
                  resolve: autoplayPlugin,

                  options: {
                    interval: 2000,
                    // numberOfSlides: 4,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}

              {/* <TestimonialCard /> */}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
