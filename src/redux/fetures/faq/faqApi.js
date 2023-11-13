import { api } from "../../api/apiSlice";


export const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFaq: builder.query({
      query: () => "/faq",
    //   providesTags: ["myProfile"],
    }),
  }),
});

export const { useGetFaqQuery } = faqApi;
