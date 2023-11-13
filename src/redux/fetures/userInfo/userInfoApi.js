import { api } from "../../api/apiSlice";


export const userInfoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/userInformation",
    //   providesTags: ["myProfile"],
    }),
  }),
});

export const { useGetUserInfoQuery } = userInfoApi;
