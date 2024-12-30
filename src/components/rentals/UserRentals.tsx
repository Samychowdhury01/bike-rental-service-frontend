import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetMyBookingQuery } from "@/redux/api/booking/bookingApi";
import PaidRental from "./PaidRental";
import UnpaidRental from "./UnpaidRental";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import { TQuery } from "@/types/query.types";
import CustomPagination from "../ui/CustomPagination";

const UserRentals = () => {
  const [query, setQuery] = useState<TQuery>({
    limit: 20,
    page: 1,
  });
  const { data, isLoading } = useGetMyBookingQuery(query);
  const totalPages = data?.meta?.totalPage;

  let paidRental;
  let unpaidRental;

  if (data && !isLoading) {
    paidRental = data?.data?.filter((booking) => booking.status === "paid");
    unpaidRental = data?.data?.filter((booking) => booking.status === "unpaid");
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <Tabs defaultValue="unpaid">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>
        <TabsContent value="unpaid">
          <UnpaidRental unpaidRental={unpaidRental} loading={isLoading} />
        </TabsContent>
        <TabsContent value="paid">
          <PaidRental paidRental={paidRental} loading={isLoading} />
        </TabsContent>
      </Tabs>
      {totalPages > 1 &&<CustomPagination
        query={query}
        setQuery={setQuery}
        totalPages={totalPages}
      />}
    </>
  );
};

export default UserRentals;
