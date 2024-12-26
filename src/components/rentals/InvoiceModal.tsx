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
import { useMakePaymentMutation } from "@/redux/api/payment/paymentApi";

interface InvoiceModalProps {
  totalAmount: number;
  bikeId: string;
  bookingId: string;
}

export default function InvoiceModal({
  totalAmount,
  bikeId,
  bookingId,
}: InvoiceModalProps) {
  const [makePayment, { isLoading }] = useMakePaymentMutation();

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
        size="sm"
        disabled={isLoading || totalAmount === 0}
        variant="outline">View Invoice</Button>
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
          <Button
            onClick={handlePayment}
            // disabled={isLoading || totalAmount === 0}
            size="sm"
            variant="outline"
          >
            Pay
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
