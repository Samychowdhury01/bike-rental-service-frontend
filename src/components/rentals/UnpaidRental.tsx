import Spinner from "../ui/Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/utils/formatDate";

import InvoiceModal from "./InvoiceModal";
import { Button } from "../ui/button";
import { useCancelBookingMutation } from "@/redux/api/booking/bookingApi";
import Swal from "sweetalert2";
import { isGreaterThan24Hours } from "@/utils/isGreaterThan24Hours";


const UnpaidRental = ({ unpaidRental, loading }) => {
  const [cancelRide, { isLoading }] = useCancelBookingMutation();
  // handle cancel payment
  const HandleCancelBooking = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await cancelRide(id);
        if (response?.data?.success) {
          Swal.fire({
            title: "Canceled!",
            text: "Your booking has been canceled.",
            icon: "success",
          });
        }
      }
    });
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
            {unpaidRental?.map((rental) => (
              <TableRow key={rental._id}>
                <TableCell className="font-medium">
                  {rental?.bikeId?.name}
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
                    <InvoiceModal
                      totalAmount={rental.totalCost}
                      bookingId={rental?._id}
                      bikeId={rental?.bikeId._id}
                      points={rental?.userId?.points}
                    />
                    <Button
                      disabled={
                        rental?.isReturned ||
                        isLoading ||
                        isGreaterThan24Hours(rental?.createdAt)
                      }
                      onClick={() => HandleCancelBooking(rental._id)}
                      variant="destructive"
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default UnpaidRental;
