import { baseApi } from "../api";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: "/users/me",
          method: "PUT",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = userApi;
