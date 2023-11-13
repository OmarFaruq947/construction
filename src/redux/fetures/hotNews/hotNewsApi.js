import { api } from "../../api/apiSlice";


export const hotNewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHotNews: builder.query({
      query: () => "/hotNews",
    //   providesTags: ["myProfile"],
    }),
  }),
});

export const { useGetHotNewsQuery } = hotNewsApi;
