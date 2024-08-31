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
import { MdAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import Spinner from "../ui/Spinner";
import { useAddCouponMutation } from "@/redux/api/coupon/couponApi";
import { getErrorData } from "@/utils/getErrorData";

const AddCoupon = () => {
  const [open, setOpen] = useState(false);

  const [addCoupon, { isLoading }] = useAddCouponMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await addCoupon(data);
  
      if (response.data) {
        Swal.fire({
          title: "Coupon Added Successfully",
          icon: "success",
        });
        reset(); // Reset form after successful submission
        setOpen(false); // Close modal or dialog
      } else {
        const errorData = getErrorData(response.error);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: errorData?.message || "Something went wrong!",
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong, try again!";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <MdAdd className="text-xl" />
            <p>Add Coupon</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a Coupon</DialogTitle>
            <DialogDescription className="text-gray-500">
              Add a new Coupon to your list!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Discount
              </Label>
              <Input
                {...register("option", { required: true })}
                placeholder="Type discount amount"
                id="name"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Coupon
              </Label>
              <Input
                {...register("coupon", { required: true })}
                placeholder="Coupon code"
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            {isLoading ? (
              <Spinner />
            ) : (
              <Button type="submit" onClick={handleSubmit(onSubmit)}>
                Add
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCoupon;
