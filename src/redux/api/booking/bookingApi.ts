import { baseApi } from "../api";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: () => ({
        url: "/rentals/all",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    getMyBooking: builder.query({
      query: () => ({
        url: `/rentals`,
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
 
    updateBooking: builder.mutation({
      query: (id) => ({
        url: `/rentals/${id}/return`,
        method: "PUT",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetAllBookingQuery,
  useAddBookingMutation,
  useUpdateBookingMutation,
  useGetMyBookingQuery

} = bookingApi;
