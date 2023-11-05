import React from "react";
import achievementPic1 from "../../../assets/ACHIEVEMENT_Pic/achievementPic1.jpg";
import achievementPic2 from "../../../assets/ACHIEVEMENT_Pic/achievementPic2.jpg";
import achievementPic3 from "../../../assets/ACHIEVEMENT_Pic/achievementPic3.jpg";
import achievementPic4 from "../../../assets/ACHIEVEMENT_Pic/achievementPic4.jpg";
import achievementPic5 from "../../../assets/ACHIEVEMENT_Pic/achievementPic5.jpg";
import achievementPic6 from "../../../assets/ACHIEVEMENT_Pic/achievementPic6.jpg";
import AchievementsCard from "./AchievementsCard";

const Achievements = () => {
  const data = [
    {
      id: 1,
      title: "Successful project",
      description:
        "Construction companies often measure success based on completing projects within the agreed-upon timeline, budget, and quality standards.",
      img: `${achievementPic1}`,
    },
    {
      id: 2,
      title: "Client satisfaction",
      description:
        "A satisfied client is a testament to a construction company's ability to meet their expectations and deliver a high-quality project.",
      img: `${achievementPic4}`,
    },
    {
      id: 3,
      title: "Safety records",
      description:
        "Maintaining an excellent safety record is a significant achievement in the construction industry.  ",
      img: `${achievementPic6}`,
    },
    {
      id: 4,
      title: "Employee",
      description:
        "Creating a positive work environment, investing in employee training and development,and maintaining a skilled workforce are",
      img: `${achievementPic2}`,
    },
    {
      id: 5,
      title: "Sustainable practices",
      description:
        "Construction companies are increasingly focusing on sustainability. Implementing environmentally friendly construction practices,",
      img: `${achievementPic3}`,
    },
    {
      id: 6,
      title: "Collaborations",
      description:
        "Construction companies often work in partnership with other firms, subcontractors, and suppliers. Building strong collaborative",
      img: `${achievementPic5}`,
    },
  ];

  return (
    <>
      <section className="text-accent body-font container my-24 mx-auto">
        <div className="flex flex-col text-center w-full my-20">
          <h2 className="text-secondary font-bold text-4xl uppercase relative h-auto w-full pb-1 text-center ">
            Our Grate
            <span className="text-brand"> Achievement</span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-textColure">
            Construction is a general term meaning the art and science to form
            objects systems organizations, and comes from Latin construction and
            Old French construction. To construct is the verb: the act of
            building, and the noun is construction.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((infoData) => (
            <AchievementsCard
              key={infoData.id}
              infoData={infoData}
            ></AchievementsCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Achievements;
