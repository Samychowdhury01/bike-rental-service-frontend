
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

interface InvoiceModalProps {
  totalAmount: number;
}

export default function InvoiceModal({ totalAmount }: InvoiceModalProps) {
  //   const [couponCode, setCouponCode] = useState('')
  //   const [discount, setDiscount] = useState(0)
  const coupon = localStorage.getItem("coupon") || 'No Discount';
  const couponValue = parseInt(localStorage.getItem("value")) || 0;
  const afterDiscount = (totalAmount * couponValue) / 100;
  const discountGot = totalAmount - afterDiscount
//   const applyCoupon = () => {
//     if (couponCode === "DISCOUNT10") {
//       setDiscount(totalAmount * 0.1);
//     } else if (couponCode === "DISCOUNT20") {
//       setDiscount(totalAmount * 0.2);
//     } else {
//       setDiscount(0);
//     }
//   };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Invoice</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invoice Details</DialogTitle>
          <DialogDescription>
            Review your invoice and apply a coupon if available.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="total" className="text-right font-medium">
              Total Amount:
            </label>
            <div className="col-span-3">{totalAmount.toFixed(2)}TK</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="coupon" className="text-right font-medium">
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
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="discount" className="text-right font-medium">
                Discount:
              </label>
              <div className="col-span-3 text-green-600">
                -${discountGot.toFixed(2)}
              </div>
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="final" className="text-right font-medium">
              Final Amount:
            </label>
            <div className="col-span-3 font-bold">
              {afterDiscount.toFixed(2)}
            </div>
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
