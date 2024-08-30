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

const PaidRental = ({ paidRental }) => {
  if (!paidRental.length) {
    return (
      <p className="text-red-500 flex items-center justify-center mt-5">
        No paid rentals found!
      </p>
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
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paidRental.map((rental) => (
                <TableRow key={rental._id}>
                  <TableCell>{rental.bikeId.name} TK</TableCell>
                  <TableCell className="font-medium">
                    {formatDate(rental.startTime)}
                  </TableCell>
                  <TableCell>
                    {rental.returnTime
                      ? formatDate(rental.returnTime)
                      : " Not returned yet"}
                  </TableCell>
                  <TableCell>{rental.totalCost} TK</TableCell>
                  <TableCell>{rental.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </div>
    </>
  );
};

export default PaidRental;
