import { api } from "../../api/apiSlice";


export const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => "/blog",
    //   providesTags: ["myProfile"],
    }),
  }),
});

export const { useGetBlogQuery } = blogApi;
