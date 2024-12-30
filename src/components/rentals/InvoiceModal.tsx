import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  useMakePaymentMutation,
  usePayThroughPointMutation,
} from "@/redux/api/payment/paymentApi";
import { Separator } from "../ui/separator";
import Swal from "sweetalert2";
import { useState } from "react";

interface InvoiceModalProps {
  totalAmount: number;
  bikeId: string;
  bookingId: string;
  points: number;
}

export default function InvoiceModal({
  totalAmount,
  bikeId,
  bookingId,
  points,
}: InvoiceModalProps) {
  const [open, setOpen] = useState(false);
  const [makePayment, { isLoading }] = useMakePaymentMutation();
  const [makePaymentWithPoints, { isLoading: isUsePointLoading }] =
    usePayThroughPointMutation();

  const coupon = localStorage.getItem("coupon") || "No Discount";
  const couponValue = parseInt(localStorage.getItem("value")) || 0;
  const discountGot = (totalAmount * couponValue) / 100;
  const afterDiscount = totalAmount - discountGot;

  const handlePayment = async () => {
    const createBookingData = {
      bookingId,
      bikeId,
      totalAmount,
      amount: afterDiscount,
    };

    const response = await makePayment(createBookingData);
    if (response.data) {
      console.log(response?.data);
      window.location.href = response.data.data.payment_url;
    }
  };
  const handlePayThroughPoints = async () => {
    const response = await makePaymentWithPoints(bookingId);
    if (response.data) {
      Swal.fire({
        title: "Payment Successful",
        text: "Payment Successful",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Payment Failed",
        text: "Payment Failed",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          disabled={isLoading || totalAmount === 0}
          variant="outline"
        >
          View Invoice
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invoice Details</DialogTitle>
          <DialogDescription>
            Review your invoice and apply a coupon if available.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <label htmlFor="total" className="text-sm font-medium">
              Total Amount:
            </label>
            <div className="col-span-3">{totalAmount.toFixed(2)}TK</div>
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="coupon" className="text-sm font-medium">
              Coupon Code:
            </label>
            <Input
              id="coupon"
              //   value={couponCode}
              //   onChange={(e) => setCouponCode(e.target.value)}
              readOnly
              defaultValue={coupon}
              className="col-span-2"
            />
            {/* <Button onClick={applyCoupon}>Apply</Button> */}
          </div>
          {discountGot > 0 && (
            <div className="flex items-center gap-4">
              <label htmlFor="discount" className="text-sm font-medium">
                Discount:
              </label>
              <div className="col-span-3 text-green-600">
                -${discountGot.toFixed(2)}
              </div>
            </div>
          )}
          <div className="flex items-center gap-4">
            <label htmlFor="final" className="text-sm font-medium">
              Final Amount:
            </label>
            <div className="col-span-3 font-bold">
              {afterDiscount.toFixed(2)}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handlePayment} size="sm">
            Pay
          </Button>
          <Separator orientation="vertical" />
          <Button
            onClick={handlePayThroughPoints}
            disabled={points < totalAmount || isUsePointLoading}
            size="sm"
            variant="outline"
          >
            Use Points
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
