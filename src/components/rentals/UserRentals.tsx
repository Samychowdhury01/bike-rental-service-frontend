import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetMyBookingQuery } from "@/redux/api/booking/bookingApi";
import PaidRental from "./PaidRental";
import UnpaidRental from "./UnpaidRental";
import Spinner from "../ui/Spinner";

const UserRentals = () => {
  const { data, isLoading } = useGetMyBookingQuery("");
  let paidRental;
  let unpaidRental;

  if (data && !isLoading) {
    paidRental = data.data.filter((booking) => booking.status === "paid");
    unpaidRental = data.data.filter((booking) => booking.status === "unpaid");
  }

  if (isLoading) {
    return <div className="flex items-center justify-center">
      <Spinner />
    </div>;
  }
  return (
    <>
      {!data?.data.length ? (
        <div className="mt-10 text-center text-xl text-red-500">
          <p>You didn't rent bikes yet</p>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default UserRentals;
