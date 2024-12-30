
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

const PaymentHistory = ({data, isFetching, role}) => {
  
  if (!data?.data) {
    return (
      <div className="text-red-500 flex items-center justify-center">
        {isFetching ? <Spinner /> : <p>No payment History found!</p>}
      </div>
    );
  }
  return (
    <>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {role === 'admin' && <TableHead>User Name</TableHead>}
              <TableHead>Bike Name</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Payment Type</TableHead>
              <TableHead>Total Cost</TableHead>
              <TableHead>Payment Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((payment) => (
              <TableRow key={payment._id}>
               {role === 'admin'&& <TableCell className="font-medium">
                  {payment?.userId?.name}
                </TableCell>}
                <TableCell className="font-medium">
                  {payment?.bikeId?.name}
                </TableCell>
                <TableCell>{payment?.transactionId}</TableCell>
                <TableCell>{payment?.paymentType}</TableCell>
                <TableCell>{payment.totalCost} TK</TableCell>
                <TableCell>{formatDate(payment?.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default PaymentHistory;
