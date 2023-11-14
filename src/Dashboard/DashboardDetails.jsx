import React from "react";
import { useGetUserInfoQuery } from "../redux/fetures/userInfo/userInfoApi";

const DashboardDetails = () => {
  const { data: userInformation, error, isLoading } = useGetUserInfoQuery(null);
  // console.log("user info data",userInformation);  // for testing purpose
  
  // const [searchTerm, setSearchTerm] = useState('')
  // const [debounceTerm, setDebounceTerm] = useState('')
  // console.log(debounceTerm);

  // const handleSearch =(e)=>{
  //   e.preventDefault()
  //   setSearchTerm(e.target.value);
  // }

  // const debouncedTerm = useDebounced({
  //   searchQuery:searchTerm,
  //   delay:600,
  // });

  // if(!!debouncedTerm){
  //   setDebounceTerm(debouncedTerm)
  // }


  const filedName = [
    {
      id: 1,
      rowName: "Image",
    },
    {
      id: 2,
      rowName: "Name",
    },
    {
      id: 3,
      rowName: "e-mail",
    },
    {
      id: 4,
      rowName: "phone",
    },
    {
      id: 5,
      rowName: "District Name",
    },
  ];

  return (
    <>
      {/* search box start */}
      <div class="max-w-md w-full mx-auto">
        <i class="fas fa-search text-gray-400"></i>
        <input
          class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full "
          type="search"
          placeholder="Search"
        />
      </div>
      {/* search box end */}

      <div class="mt-8 bg-white p-4 shadow rounded-lg">
        <h2 class="text-secondary text-xl font-semibold pb-4">
          All user Information
        </h2>

        <div class="bg-gradient-to-r from-yellow-300 to-yellow-500 h-px mb-6"></div>

        <table class="w-full table-auto text-sm">
          <thead>
            <tr class="text-sm text-left">
              {filedName?.map((filed) => (
                <th
                  class="py-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"
                  key={filed?.id}
                >
                  {filed?.rowName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userInformation?.map((user) => (
              <tr class="hover:bg-grey-lighter"  key={user?._id}>
                <td class="py-1 px-4 border-b border-grey-light">
                  <img
                    src={user?.profilepicture}
                    alt="..."
                    class="rounded-full h-10 w-10 "
                  />
                </td>
                <td class="py-1 border-b border-grey-light">{user?.name}</td>
                <td class="py-1 border-b border-grey-light">{user?.email}</td>
                <td class="py-1 border-b border-grey-light">{user?.phone}</td>
                <td class="py-1 border-b border-grey-light">
                  {user?.districTName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardDetails;
