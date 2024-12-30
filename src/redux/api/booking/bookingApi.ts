import { baseApi } from "../api";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        // Iterate over the data object and add each key-value pair to params
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
          }
        });
        return {
          url: "/rentals/all",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
    }),
    getMyBooking: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        // Iterate over the data object and add each key-value pair to params
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
          }
        });
        return {
          url: `/rentals`,
          method: "GET",
          params: params,
        };
      },
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
    cancelBooking: builder.mutation({
      query: (id) => ({
        url: `/rentals/${id}/cancel`,
        method: "PUT",
      }),
      invalidatesTags: ["booking"],
    }),
    getAllUserCanceledRentals: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        // Iterate over the data object and add each key-value pair to params
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
          }
        });

        return {
          url: "/rentals/canceled",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
    }),
    getUserCanceledRentals: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        // Iterate over the data object and add each key-value pair to params
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
          }
        });

        return {
          url: "/rentals/user/canceled",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
    }),
  }),
});

export const {
  useGetAllBookingQuery,
  useAddBookingMutation,
  useUpdateBookingMutation,
  useGetMyBookingQuery,
  useCancelBookingMutation,
  useGetAllUserCanceledRentalsQuery,
  useGetUserCanceledRentalsQuery
} = bookingApi;
