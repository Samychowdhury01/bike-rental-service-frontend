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
  }),
});

export const {
  useAdvancePaymentMutation,
} = paymentApi;
