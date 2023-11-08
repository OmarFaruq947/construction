import React from "react";

const UserProfile = () => {
  return (
    <div class="flex-1 flex flex-wrap">
      <div class="flex-1 p-4 w-full md:w-1/2">
        <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">

          <div class="bg-white p-4 shadow rounded-lg">
            <h2 class="text-secondary font-semibold text-xl mb-5 ">Profile Photo</h2>
            <div class="mb-6">
                <img src="https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png" alt="" />
            </div>
          </div>

          <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
            <div className="flex justify-between">

            <h2 class="text-secondary text-xl font-semibold">User Information</h2>
            <button className="btn btn-square btn-warning"> Edit</button>
            </div>
            
       <div className="">
        <p>Name:</p>
        <p>Email:</p>
        <p>Phone (1):</p>
        <p>Phone (2):</p>
        <p>Address:</p>
       </div>
          </div>
        </div>
        

        
      </div>
    </div>
  );
};

export default UserProfile;
