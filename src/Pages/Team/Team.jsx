import React from "react";
import AllComponentTopBanner from "../../Shared/AllComponentTopBanner/AllComponentTopBanner";
import bannerImg from "../../assets/Banner/BannerPicture/bannerPic1.png";
import banner from "../../assets/Banner/pic1.jpg";
import profilePic1 from "../../assets/Profile Pic/profilePic1.jpg";
import profilePic10 from "../../assets/Profile Pic/profilePic10.jpg";
import profilePic11 from "../../assets/Profile Pic/profilePic11.jpg";
import profilePic12 from "../../assets/Profile Pic/profilePic12.jpg";
import profilePic13 from "../../assets/Profile Pic/profilePic13.jpg";
import profilePic2 from "../../assets/Profile Pic/profilePic2.jpg";
import profilePic4 from "../../assets/Profile Pic/profilePic4.jpg";
import profilePic5 from "../../assets/Profile Pic/profilePic5.jpg";
import profilePic6 from "../../assets/Profile Pic/profilePic6.jpg";
import profilePic7 from "../../assets/Profile Pic/profilePic7.jpg";
import profilePic8 from "../../assets/Profile Pic/profilePic8.jpg";
import profilePic9 from "../../assets/Profile Pic/profilePic9.jpg";
import AllDepartment from "./AllDepartment";
import ExecutivePanelMember from "./ExecutivePanelMember";
import TeamMembersProfileCard from "./TeamMembersProfileCard";

import { useGetTeamMemberQuery } from "../../redux/fetures/teamMember/teamMemberApi";
import "./TeamMemberProfileCard.css";

const Team = () => {
  const { data:operationalPanels , error, isLoading }= useGetTeamMemberQuery("OPERATION")

  const data = [
    {
      id: 1,
      fullName: "Billie",
      designation: "Site Supervisor",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "address",
      profilePic: `${profilePic1}`,
    },
    {
      id: 2,
      fullName: "Patty",
      designation: "Estimator",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "Intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "97508 Lindbergh Drive",
      profilePic: `${profilePic2}`,
    },
    {
      id: 3,
      fullName: "Elfie",
      designation: "Architect",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "4 Schlimgen Drive",
      profilePic: `${profilePic9}`,
    },
    {
      id: 4,
      fullName: "Chloette",
      designation: "Civil Engineer",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "01 Harbort Place",
      profilePic: `${profilePic4}`,
    },
    {
      id: 5,
      fullName: "Coop",
      designation: "Structural Engineer",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "83 Mcbride Place",
      profilePic: `${profilePic5}`,
    },
    {
      id: 6,
      fullName: "Noah",
      designation: "Electrical Engineer",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "713 Gateway Plaza",
      profilePic: `${profilePic6}`,
    },
    {
      id: 7,
      fullName: "Alard",
      designation: "Mechanical Engineer",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "1666 Carioca Crossing",
      profilePic: `${profilePic7}`,
    },
    {
      id: 8,
      fullName: "Wenda",
      designation: "Quantity Surveyor",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "04 Rockefeller Hill",
      profilePic: `${profilePic8}`,
    },
    {
      id: 9,
      fullName: "Craig",
      designation: "Health and Safety Officer",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "035 Dawn Parkway",
      profilePic: `${profilePic9}`,
    },
    {
      id: 10,
      fullName: "Tadeas",
      designation: "Procurement Manager",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "317 Lakewood Center",
      profilePic: `${profilePic10}`,
    },

    {
      id: 11,
      fullName: "laba",
      designation: "Contracts Manager",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "317 Lakewood Center",
      profilePic: `${profilePic11}`,
    },

    {
      id: 12,
      fullName: "Tadeas",
      designation: "Electrician",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "317 Lakewood Center",
      profilePic: `${profilePic12}`,
    },

    {
      id: 13,
      fullName: "TadeasPainter",
      designation: "Painter",
      email: "omarfaruq.bplus.6600@gmail.com",
      intro: "intro",
      linkedin: "https://www.linkedin.com/in/md-omar-faruq-7458b819a/",
      address: "317 Lakewood Center",
      profilePic: `${profilePic13}`,
    },
  ];

  const bannerContent = {
    heading: "All Member",
    afterPage: "home",
    beforePage: "Team",
    banner: `${banner}`,
    banner_imag: `${bannerImg}`,
  };
  return (
    <>
   
      <AllComponentTopBanner bannerContent={bannerContent} />
      <ExecutivePanelMember />
      <div className="bg-backgroundColor">
        <div className="flex flex-col text-center w-full mb-20 pt-14">
          <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
            Operation Team
            <span className="text-brand"> Member</span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
            Construction is a general term meaning the art and science to form
            objects systems organizations, and comes from Latin construction and
            Old French construction. To construct is the verb: the act of
            building, and the noun is construction.
          </p>
        </div>
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-4  xl:mt-12 xl:gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            {operationalPanels?.map((operationalMember) => (
              <TeamMembersProfileCard
                key={operationalMember._id}
                operationalMember={operationalMember}
              />
            ))}
          </div>
        </div>
      </div>
      <AllDepartment />
    </>
  );
};

export default Team;
