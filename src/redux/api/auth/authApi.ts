import { baseApi } from "../api";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/signup",
          method: "POST",
          body: data,
        };
      },
    }),
    login: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {useSignUpMutation , useLoginMutation } = authApi;
