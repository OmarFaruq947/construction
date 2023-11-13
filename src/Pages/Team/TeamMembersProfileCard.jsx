import React from "react";

const TeamMembersProfileCard = ({ operationalMember }) => {
  const { name, email, profilePicture, intro, allSocial, role, designation } =
  operationalMember;

  return (
    <>
      <div className="container border">
        <div className="panel">
          <div className="panel-inner group">
            <div className="panel-media">
              <img src={profilePicture} alt="" />
            </div>
            <div className="panel-body">
              <div className="text-center mt-2 text-3xl font-medium text-secondary">
                {name}
              </div>
              <div className="text-center mt-2 font-light text-sm">
                {designation}
              </div>
              <div className="text-center font-normal text-lg">address</div>
              <div className="px-6 text-center mt-2 font-light text-sm mb-2">
                <p>{intro}</p>
              </div>

              <div className="flex p-4 border-t-[1px] border-yellow-100">
                <div className="w-1/2 text-center group-hover:text-secondary">
                  <a target="_blank" href={allSocial[1]?.linkedIn}>
                    linkedin
                  </a>
                </div>
                <div className="w-0 border border-yellow-100"></div>
                <div className="w-1/2 text-center ">
                  <a href={`mailto: ${email}`}>Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembersProfileCard;
