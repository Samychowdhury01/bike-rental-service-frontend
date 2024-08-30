import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAdvancePaymentMutation } from "@/redux/api/payment/paymentApi";

const BookNow = ({ bookingInfo }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [advancePayment, {isLoading}] = useAdvancePaymentMutation();

  const onSubmit = async (data: Record<string, unknown>) => {
    const createBookingData = {
      bikeId: bookingInfo.bikeId,
      startTime: `${data.startTime}:00Z`,
    };
    console.log(createBookingData);

    const response = await advancePayment(createBookingData);
    console.log(response.data);
    if (response.data) {
      window.location.href = response.data.data.payment_url;
    }
  };

  return (
    <>
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button disabled={!bookingInfo?.isUserExist || !bookingInfo.isAvailable}>Book Now !</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Book a bike</DialogTitle>
              <DialogDescription className="text-gray-500">
                Book a bike for your ride!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  {...register("startTime", { required: true })}
                  placeholder="Start Time"
                  id="startTime"
                  className="col-span-3"
                  type="datetime-local"
                />
              </div>
            </div>
            <DialogFooter>
              <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>Advance Payment</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    </>
  );
};

export default BookNow;
