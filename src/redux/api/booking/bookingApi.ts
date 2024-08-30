import { baseApi } from "../api";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: () => ({
        url: "/rentals",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/rentals",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    payment: builder.mutation({
      query: () => ({
        url: "/rentals/payment",
        method: "POST",
      }),
      invalidatesTags: ["booking"],
    }),
    updateBooking: builder.mutation({
      query: (id) => ({
        url: `/${id}/return`,
        method: "POST",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetBookingQuery,
  useAddBookingMutation,
  useUpdateBookingMutation,
  usePaymentMutation,
} = bookingApi;
