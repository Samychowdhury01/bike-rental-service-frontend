import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BikesTable = ({ bikes }) => {
  return (
    <>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>Bike Name</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>Return Time</TableHead>
            <TableHead>Total Costing</TableHead>
            <TableHead>Status</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {bikes.slice(0,5).map((bike) => (
            <TableRow key={bike._id}>
              
              <TableCell>{bike.bikeId?.name}</TableCell>
              <TableCell>{bike.startTime}</TableCell>
              <TableCell>{bike.returnTime}</TableCell>
              <TableCell>{bike.totalCost}</TableCell>
              <TableCell>{bike.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default BikesTable;
