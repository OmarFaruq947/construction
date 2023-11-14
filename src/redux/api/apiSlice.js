import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wecons-server.onrender.com/api',
   
  }),
  endpoints: () => ({}),
});