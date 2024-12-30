/* eslint-disable @typescript-eslint/no-explicit-any */
import CancelRides from "@/components/dashboard/CancelRides";
import CustomPagination from "@/components/ui/CustomPagination";
import SectionHeading from "@/components/ui/SectionHeading";
import useDecodeToken from "@/hooks/useDecodeToken";
import {
  useGetAllUserCanceledRentalsQuery,
  useGetUserCanceledRentalsQuery,
} from "@/redux/api/booking/bookingApi";
import { TQuery } from "@/types/query.types";
import { useState } from "react";

const CancelRidesPage = () => {
  const [query, setQuery] = useState<TQuery>({
    limit: 10,
    page: 1,
  });
  const user: any = useDecodeToken();
  const { data: userCancelBookings, isFetching: isUserCancelBookingsFetching } =
    useGetUserCanceledRentalsQuery(query);
  const { data, isFetching } = useGetAllUserCanceledRentalsQuery(query);

  const totalPages =
    user?.role === "admin"
      ? data?.meta?.totalPage
      : userCancelBookings?.meta?.totalPage;

  return (
    <>
      <SectionHeading text="" title="Canceled Rides" width="w-1/6" />
      <CancelRides
        data={user?.role === "admin" ? data : userCancelBookings}
        isFetching={
          user?.role === "admin" ? isFetching : isUserCancelBookingsFetching
        }
        role={user?.role}
      />
      {/* pagination */}
      {totalPages > 1 && (
        <CustomPagination
          query={query}
          setQuery={setQuery}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default CancelRidesPage;
