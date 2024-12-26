import { baseApi } from "../api";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllReviews: builder.query({
      query: (bikeId) => {
        return {
          url: `/reviews/${bikeId}`,
          method: "GET",
        };
      },
      providesTags: ["review"],
    }),
    addReview: builder.mutation({
      query: (payload) => {
        return {
          url: `/reviews`,
          method: "POST",
          body: payload
        };
      },
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetAllReviewsQuery
} = reviewApi;
