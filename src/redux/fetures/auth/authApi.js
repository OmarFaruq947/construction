import { api } from "../../api/apiSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuth: builder.query({
      query: () => "/user",
    //   providesTags: ["myProfile"],
    }),
  }),
});

export const { useGetAuthQuery } = authApi;
