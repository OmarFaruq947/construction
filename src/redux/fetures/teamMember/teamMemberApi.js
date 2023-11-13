import { api } from "../../api/apiSlice";

export const teamMemberApi = api.injectEndpoints({

  endpoints: (builder) => ({
    getTeamMember: builder.query({
      query: (data) => `/teamMember?role=${data}`,
    //   providesTags: ["myProfile"],
    }),


  }),

});

export const { useGetTeamMemberQuery } = teamMemberApi;
//?role=${ROLE}