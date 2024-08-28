import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../features/tokenSlice";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
    prepareHeaders: (headers, { getState }) => {
      // Retrieve the token using your custom hook
      const token = selectToken(getState());

      // Set headers
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["bike", "booking", "user"],
});
