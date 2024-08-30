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
  }),
});

export const { useAdvancePaymentMutation, useMakePaymentMutation } = paymentApi;
