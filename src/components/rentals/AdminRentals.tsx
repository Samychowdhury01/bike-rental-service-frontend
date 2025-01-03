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
import { useState } from "react";
import { TQuery } from "@/types/query.types";
import CustomPagination from "../ui/CustomPagination";

const AdminRentals = () => {
  const [query, setQuery] = useState<TQuery>({
    limit: 10,
    page: 1,
  });
  const { data, isLoading } = useGetAllBookingQuery(query);
  const [returnBike] = useUpdateBookingMutation();
  const totalPages = data?.meta?.totalPage;

  //   Handle Calculate
  const HandleCalculate = async (id: string) => {
    const response = await returnBike(id);

    console.log(response);
  };

  if (!data) {
    return (
      <div className="text-red-500 flex items-center justify-center">
        {isLoading ? <Spinner /> : <p>No user rentals found!</p>}
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
                <TableHead>Start Time</TableHead>
                <TableHead>Return Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Calculate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.map((rental) => (
                <TableRow key={rental._id}>
                  <TableCell className="font-medium">
                    {formatDate(rental.startTime)}
                  </TableCell>
                  <TableCell>
                    {rental.returnTime
                      ? rental.returnTime
                      : " Not returned yet"}
                  </TableCell>
                  <TableCell>{rental.totalCost} TK</TableCell>
                  <TableCell>{rental.status}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => HandleCalculate(rental._id)}
                        size="sm"
                        disabled={rental.isReturned}
                        variant="outline"
                      >
                        Calculate
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </div>
      {totalPages > 1 &&<CustomPagination
        query={query}
        setQuery={setQuery}
        totalPages={totalPages}
      />}
    </>
  );
};

export default AdminRentals;
