import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/utils/formatDate";
import Spinner from "../ui/Spinner";

const PaidRental = ({ paidRental, loading }) => {
  if (!paidRental.length) {
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
