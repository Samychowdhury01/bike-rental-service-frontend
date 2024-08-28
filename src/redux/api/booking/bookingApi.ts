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
    addBooking: builder.query({
      query: (data) => ({
        url: "/rentals",
        method: "POST",
        body: data,
      }),
      providesTags: ["booking"],
    }),
    updateBooking: builder.query({
      query: (id) => ({
        url: `/${id}/return`,
        method: "POST",
      }),
      providesTags: ["booking"],
    }),
  }),
});

export const { useGetBookingQuery } = bookingApi;
