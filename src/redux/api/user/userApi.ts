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
      providesTags: ["user"],
    }),
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    getDashboardData: builder.query({
      query: () => {
        return {
          url: `/users/dashboard`,
          method: "GET",
        };
      },
      providesTags: ["user"],
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
    promoteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/promote/${id}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["user"],
    }),
    removeUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useRemoveUserMutation,
  useGetAllUsersQuery,
  usePromoteUserMutation,
  useGetDashboardDataQuery,
} = userApi;
