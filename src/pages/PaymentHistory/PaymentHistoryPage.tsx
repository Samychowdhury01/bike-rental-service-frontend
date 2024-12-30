/* eslint-disable @typescript-eslint/no-explicit-any */
import PaymentHistory from "@/components/dashboard/PaymentHistory";
import CustomPagination from "@/components/ui/CustomPagination";
import SectionHeading from "@/components/ui/SectionHeading";
import useDecodeToken from "@/hooks/useDecodeToken";
import {
  useGetUserPaymentHistoryQuery,
  useGetPaymentHistoryQuery,
} from "@/redux/api/payment/paymentApi";
import { TQuery } from "@/types/query.types";
import { useState } from "react";

const PaymentHistoryPage = () => {
  const [query, setQuery] = useState<TQuery>({
    limit: 10,
    page: 1,
  });

  const user: any = useDecodeToken();
  const { data: userPaymentHistory, isFetching: isUserPaymentFetching } =
    useGetUserPaymentHistoryQuery(query);
  const { data: paymentHistory, isFetching: isPaymentFetching } =
    useGetPaymentHistoryQuery(query);

  const totalPages =
    user?.role === "admin"
      ? paymentHistory?.meta?.totalPage
      : userPaymentHistory?.meta?.totalPage;

  return (
    <>
      <SectionHeading text="" title="Payment History" width="w-1/6" />
      <PaymentHistory
        data={user?.role === "admin" ? paymentHistory : userPaymentHistory}
        isFetching={
          user?.role === "admin" ? isPaymentFetching : isUserPaymentFetching
        }
        role={user?.role}
      />
      {totalPages > 1 &&<CustomPagination
        query={query}
        setQuery={setQuery}
        totalPages={totalPages}
      />}
    </>
  );
};

export default PaymentHistoryPage;
