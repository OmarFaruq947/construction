import { api } from "../../api/apiSlice";

export const teamMemberApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTeamMember: builder.query({
      query: () => "/teamMember",
    //   providesTags: ["myProfile"],
    }),
  }),
});

export const { useGetTeamMemberQuery } = teamMemberApi;
