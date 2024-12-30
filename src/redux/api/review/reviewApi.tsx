import { baseApi } from "../api";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (payload) => {
        return {
          url: `/reviews`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["review"],
    }),
    getAllReviewsForSingleBike: builder.query({
      query: (bikeId) => {
        return {
          url: `/reviews/bike/${bikeId}`,
          method: "GET",
        };
      },
      providesTags: ["review"],
    }),
    getAllUserReviews: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        // Iterate over the data object and add each key-value pair to params
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
          }
        });
        return {
          url: `/reviews/user-review?${query}`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["review"],
    }),
    getAllReviews: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        // Iterate over the data object and add each key-value pair to params
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
          }
        });
        return {
          url: `/reviews/admin`,
          method: "GET",
        };
      },
      providesTags: ["review"],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetAllReviewsForSingleBikeQuery,
  useGetAllUserReviewsQuery,
  useGetAllReviewsQuery,
} = reviewApi;
