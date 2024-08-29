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
import Swal from "sweetalert2";
import { useUpdateBikeMutation } from "@/redux/api/bike/bikeApi";
import { useState } from "react";
import Spinner from "../ui/Spinner";
import { FiEdit3 } from "react-icons/fi";

const UpdateBike = ({ item }) => {
  const [open, setOpen] = useState(false);

  const [updateBike, { isLoading }] = useUpdateBikeMutation();
  const {
    register,
    handleSubmit,
  } = useForm();
 
//  onSubmit Handler
const onSubmit = async (data: any) => {
    try {
      const { name, description, brand, model, pricePerHour, cc, year } = data;
      const payload = {
        id: item._id,
        name,
        description,
        brand,
        model,
        pricePerHour: Number(pricePerHour),
        cc: Number(cc),
        year: Number(year),
      };
      const response = await updateBike(payload).unwrap(); // Use unwrap() to handle the response properly
  
      Swal.fire({
        title: "Bike updated successfully",
        icon: "success",
      });
      setOpen(false);
    } catch (error: any) {
      Swal.fire({
        title: "Error updating bike",
        icon: "error",
        text: error.data.message || "Something went wrong",
      });
    }
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <FiEdit3 className="text-xl mr-1" />
            <p>Update</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update a Bike</DialogTitle>
            <DialogDescription className="text-gray-500">
              Update your existing bike details!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
              defaultValue={item.name}
                {...register("name", { required: true })}
                placeholder="bike Name"
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
              defaultValue={item.description}
                {...register("description", { required: true })}
                placeholder="Description"
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price per Hour
              </Label>
              <Input
              defaultValue={item.pricePerHour}
                {...register("pricePerHour", { required: true })}
                placeholder="Price per Hour"
                id="price"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right">
                Brand
              </Label>
              <Input
              defaultValue={item.brand}
                {...register("brand", { required: true })}
                placeholder="Brand"
                id="brand"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="model" className="text-right">
                Model
              </Label>
              <Input
              defaultValue={item.model}
                {...register("model", { required: true })}
                placeholder="Model"
                id="model"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cc" className="text-right">
                CC
              </Label>
              <Input
              defaultValue={item.cc}
                {...register("cc", { required: true })}
                placeholder="CC"
                id="cc"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="year" className="text-right">
                Year
              </Label>
              <Input
              defaultValue={item.year}
                {...register("year", { required: true })}
                placeholder="Year"
                id="year"
                className="col-span-3"
                type="number"
              />
            </div>
          </div>
          <DialogFooter>
            {isLoading ? (
              <Spinner />
            ) : (
              <Button type="submit" onClick={handleSubmit(onSubmit)}>
                Submit
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateBike;
