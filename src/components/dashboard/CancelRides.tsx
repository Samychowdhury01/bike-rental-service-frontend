import { useGetMyBookingQuery } from "@/redux/api/booking/bookingApi";
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

const CancelRides = ({ data, isFetching, role }) => {
  if (!data?.data) {
    return (
      <div className="text-red-500 flex items-center justify-center">
        {isFetching ? <Spinner /> : <p>No user rentals found!</p>}
      </div>
    );
  }
  return (
    <>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {role === "admin" && <TableHead>User Name</TableHead>}
              <TableHead>Bike Name</TableHead>
              <TableHead>start Time</TableHead>
              <TableHead>Canceled Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data
              ?.filter((rental) => rental?.status === "canceled")
              .map((rental) => (
                <TableRow key={rental._id}>
                  {role === "admin" && (
                    <TableCell className="font-medium">
                      {rental?.userId?.name}
                    </TableCell>
                  )}
                  <TableCell className="font-medium">
                    {rental?.bikeId?.name}
                  </TableCell>
                  <TableCell className="font-medium">
                    {formatDate(rental.startTime)}
                  </TableCell>
                  <TableCell>
                    {rental.returnTime
                      ? formatDate(rental.createdAt)
                      : " Not returned yet"}
                  </TableCell>
                  <TableCell>{rental.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CancelRides;
