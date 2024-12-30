import { baseApi } from "../api";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    advancePayment: builder.mutation({
      query: (data) => ({
        url: "/payment/advance-payment",
        method: "POST",
        body: data,
      }),
    }),
    makePayment: builder.mutation({
      query: (data) => ({
        url: "/payment",
        method: "POST",
        body: data,
      }),
    }),
    getUserPaymentHistory: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        // Iterate over the data object and add each key-value pair to params
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
          }
        });
        return {
          url: "/payment/history",
          params: params,
        };
      },
    }),
    getPaymentHistory: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        // Iterate over the data object and add each key-value pair to params
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            params.append(key, value.toString());
          }
        });
        return {
          url: "/payment/admin/history",
          params: params,
        };
      },
    }),
  }),
});

export const {
  useAdvancePaymentMutation,
  useMakePaymentMutation,
  useGetUserPaymentHistoryQuery,
  useGetPaymentHistoryQuery,
} = paymentApi;
