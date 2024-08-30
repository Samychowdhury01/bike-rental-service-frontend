import {
  useGetAllBookingQuery,
  useUpdateBookingMutation,
} from "@/redux/api/booking/bookingApi";
import Spinner from "../ui/Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { formatDate } from "@/utils/formatDate";
import { useMakePaymentMutation } from "@/redux/api/payment/paymentApi";

const UnpaidRental = ({ unpaidRental, loading }) => {
  const [makePayment, { isLoading }] = useMakePaymentMutation();
  // handle payment
  const handlePayment = async (id, totalCost, bikeId) => {
    const createBookingData = {
      bookingId: id,
      bikeId,
      totalCost,
      amount: totalCost,
    };
    console.log(createBookingData);

    const response = await makePayment(createBookingData);
    console.log(response.data);
    if (response.data) {
      window.location.href = response.data.data.payment_url;
    }
  };

  if (!unpaidRental) {
    return (
      <div className="text-red-500 flex items-center justify-center">
        {loading ? <Spinner /> : <p>No user rentals found!</p>}
      </div>
    );
  }
  return (
    <>
      <div>
        {
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bike</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Return Time</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Pay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unpaidRental.map((rental) => (
                <TableRow key={rental._id}>
                  <TableCell className="font-medium">
                    {rental?.bikeId.name}
                  </TableCell>
                  <TableCell className="font-medium">
                    {formatDate(rental.startTime)}
                  </TableCell>
                  <TableCell>
                    {rental.returnTime
                      ? formatDate(rental.returnTime)
                      : " Not returned yet"}
                  </TableCell>
                  <TableCell>{rental.totalCost} TK</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        onClick={() =>
                          handlePayment(
                            rental._id,
                            rental.totalCost,
                            rental.bikeId._id
                          )
                        }
                        disabled={isLoading || rental.totalCost === 0}
                        size="sm"
                        variant="outline"
                      >
                        Pay
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </div>
    </>
  );
};

export default UnpaidRental;
