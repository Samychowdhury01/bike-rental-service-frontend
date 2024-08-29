import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import { useDeleteCouponMutation, useGetCouponsQuery } from "@/redux/api/coupon/couponApi";

const CouponTable = () => {
  const { data } = useGetCouponsQuery("");
  const [removeCoupon] = useDeleteCouponMutation()

  // handle promote user
  const handleDeleteUser = async (id: string) => {
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
        const response = await removeCoupon(id).unwrap();
        if (response.data) {
          Swal.fire({
            icon: "success",
            title: "User Deleted successfully",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: response.error.data.message || "Something went wrong!",
          });
        }
      }
    });
  };
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Discount</TableHead>
            <TableHead>Coupon</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((coupon) => (
            <TableRow key={coupon._id}>
              <TableCell className="font-medium">{coupon.option}</TableCell>
              <TableCell>{coupon.coupon}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleDeleteUser(coupon._id)}
                    variant="destructive"
                    size="sm"
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CouponTable;
