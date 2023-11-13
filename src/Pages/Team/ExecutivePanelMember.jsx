import React from "react";
import { useGetTeamMemberQuery } from "../../redux/fetures/teamMember/teamMemberApi";
import ExecutivePanelMemberCard from "./ExecutivePanelMemberCard";

const ExecutivePanelMember = () => {

  const { data:executivePanels , error, isLoading }= useGetTeamMemberQuery("EXECUTIVE")

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
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {executivePanels?.map((executivePanel) => (
            <ExecutivePanelMemberCard
              key={executivePanel?._id}
              executivePanel={executivePanel}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExecutivePanelMember;
