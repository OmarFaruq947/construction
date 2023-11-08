import React from "react";

const DashboardDetails = () => {
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

  const userInformation = [
    {
      pic: "https://i.ibb.co/vjgB5sn/image-23.png",
      name: "bina",
      email: "bina@gmail.com",
      phone: "78965412302",
      district: "nuakhaly",
    },
    {
      pic: "https://i.ibb.co/mB0XZnk/image-22.png",
      name: "dukus",
      email: "dukus@gmail.com",
      phone: "78945612301",
      district: "pabna",
    },
    {
      pic: "https://i.ibb.co/L9MYcxB/image-21.png",
      name: "sorho",
      email: "sorho@gmail.com",
      phone: "12345678936",
      district: "india",
    },
    {
      pic: "https://i.ibb.co/6JpXhQs/image-19.png",
      name: "luypa",
      email: "luypa@gmail.com",
      phone: "78945123698",
      district: "Mirpur",
    },
    {
      pic: "https://i.ibb.co/TBCd32R/jahanara-alam.png",
      name: "hafij",
      email: "hafij@gmail.com",
      phone: "01254 456 789",
      district: "borisal",
    },
    {
      pic: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      name: "Omar Faruq",
      email: "omar@gmail.com",
      phone: "01752 456 789",
      district: "Dhaka",
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
              <th class="py-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Profile pic
              </th>
              <th class="py-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Name
              </th>
              <th class="py-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                e-Mail
              </th>

              <th class="py-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                Phone
              </th>
              <th class="py-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                District Name
              </th>
            </tr>
          </thead>
          <tbody>
            {userInformation?.map((user) => (
              <tr class="hover:bg-grey-lighter">
                <td class="py-1 px-4 border-b border-grey-light">
                  <img
                    src={user?.pic}
                    alt="..."
                    class="rounded-full h-10 w-10 "
                  />
                </td>
                <td class="py-1 border-b border-grey-light">
                  {user?.name}
                </td>
                <td class="py-1 border-b border-grey-light">
                  {user?.email}
                </td>
                <td class="py-1 border-b border-grey-light">
                  {user?.phone}
                </td>
                <td class="py-1 border-b border-grey-light">
                  {user?.district}
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
