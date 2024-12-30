import Spinner from "../ui/Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Rating } from "@smastrom/react-rating";

const ReviewTable = ({ data, isFetching }) => {
  if (isFetching) {
    return (
      <div className="text-red-500 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <div>
        {!isFetching && data?.data ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Name</TableHead>
                <TableHead>Bike Name</TableHead>
                <TableHead>Review</TableHead>
                <TableHead>Ratings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.map((review) => (
                <TableRow key={review._id}>
                  <TableCell className="font-medium">
                    {review?.userName}
                  </TableCell>
                  <TableCell>{review?.bikeId?.name}</TableCell>
                  <TableCell>{review?.review}</TableCell>
                  <TableCell>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={review?.rating}
                      readOnly
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-red-500 flex items-center justify-center">
            No Reviews found!
          </p>
        )}
      </div>
    </>
  );
};

export default ReviewTable;
