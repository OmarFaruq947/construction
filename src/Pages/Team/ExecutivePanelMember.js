import React from "react";
import exExecutiveMember1 from "../../assets/Profile Pic/Chief_officer/pic1.jpg";
import exExecutiveMember2 from "../../assets/Profile Pic/Chief_officer/pic2.jpg";
import exExecutiveMember3 from "../../assets/Profile Pic/Chief_officer/pic3.jpg";
import exExecutiveMember4 from "../../assets/Profile Pic/Chief_officer/pic4.jpg";
import exExecutiveMember5 from "../../assets/Profile Pic/Chief_officer/pic5.jpg";
import exExecutiveMember6 from "../../assets/Profile Pic/Chief_officer/pic6.jpg";
import exExecutiveMember7 from "../../assets/Profile Pic/Chief_officer/pic7.jpg";
import exExecutiveMember8 from "../../assets/Profile Pic/Chief_officer/pic8.jpg";
import ExecutivePanelMemberCard from "./ExecutivePanelMemberCard";

const ExecutivePanelMember = () => {
  const executivePanels = [
    {
      id: 1,
      name: "name",
      designation: "CEO(Chief Executive Officer)",
      intro: "intro",
      linkedin: "linkedin",
      profilePic: `${exExecutiveMember1}`,
    },
    {
      id: 2,
      name: "name",
      designation: "COO (Chief Operating Officer)",
      intro: "intro",
      linkedin: "linkedin",
      profilePic: `${exExecutiveMember2}`,
    },
    {
      id: 3,
      name: "name",
      designation: "CFO (Chief Financial Officer)",
      intro: "intro",
      linkedin: "linkedin",
      profilePic: `${exExecutiveMember3}`,
    },
    {
      id: 4,
      name: "name",
      designation: "CTO (Chief Technology Officer)",
      intro: "intro",
      linkedin: "linkedin",
      profilePic: `${exExecutiveMember4}`,
    },
    {
      id: 5,
      name: "name",
      designation: "CTO (Chief Production Manager)",
      intro: "intro",
      linkedin: "linkedin",
      profilePic: `${exExecutiveMember5}`,
    },
    {
      id: 6,
      name: "name",
      designation: "Chief Marketing Manager",
      intro: "intro",
      linkedin: "linkedin",
      profilePic: `${exExecutiveMember6}`,
    },
    {
      id: 7,
      name: "name",
      designation: "(HR) HR Department head",
      intro: "intro",
      linkedin: "linkedin",
      profilePic: `${exExecutiveMember7}`,
    },
    {
      id: 8,
      name: "name",
      designation: "Chief Testing Officer",
      intro: "intro",
      linkedin: "linkedin",
      profilePic: `${exExecutiveMember8}`,
    },
  ];

  return (
    <>
      <div className="flex flex-col text-center w-full mb-10 pt-14">
        <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
          Executive Panel
          <span className="text-brand"> Members</span>
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
          Construction is a general term meaning the art and science to form
          objects systems organizations, and comes from Latin construction and
          Old French construction. To construct is the verb: the act of
          building, and the noun is construction.
        </p>
      </div>
      <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {executivePanels.map((executivePanel) => (
            <ExecutivePanelMemberCard
              key={executivePanel.id}
              executivePanel={executivePanel}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExecutivePanelMember;
