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
import { useForm, } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddBikeMutation } from "@/redux/api/bike/bikeApi";
import { useState } from "react";
import Spinner from "../ui/Spinner";

const AddBike = () => {
  const [open, setOpen] = useState(false);

  const [addBike, { isLoading }] = useAddBikeMutation();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();


  const onSubmit = async (data) => {
    const { name, description, brand, model, pricePerHour, cc, year } = data;
    try {
      // Handle image upload to ImgBB
      let imageUrl = "";
      if (data.image && data.image[0]) {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
        const imgBBResponse = await fetch(
          `https://api.imgbb.com/1/upload?key=${img_hosting_token}`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!imgBBResponse.ok) {
          throw new Error("Image upload failed");
        }

        const imgBBData = await imgBBResponse.json();
        imageUrl = imgBBData.data.url; // Get the image URL from ImgBB
      }

      // Handle sending bike data to your server
      const bikeData = {
        name,
        description,
        brand,
        model,
        pricePerHour: Number(pricePerHour),
        cc: Number(cc),
        year: Number(year),
        image: imageUrl, // Add the image URL to the bike data
      };
      console.log(bikeData);
      const response = await addBike(bikeData);
      if (response.data) {
        Swal.fire({
          title: "Bike Added Successfully",
          text: "Your bike has been added successfully",
          icon: "success",
        });
        setOpen(false);
        reset(); // Reset form after successful submission
      } else {
        Swal.fire({
          title: "Error",
          text: response?.error?.data.message ||"Failed to add bike",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "something went wrong try again!!",
      });
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <MdAdd className="text-xl" />
            <p>Add Bike</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a Bike</DialogTitle>
            <DialogDescription className="text-gray-500">
              Add a new bike to your list!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
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
                {...register("year", { required: true })}
                placeholder="Year"
                id="year"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="year" className="text-right">
                Image
              </Label>
              <Input
                {...register("image", { required: true })}
                id="image"
                className="col-span-3"
                type="file"
              />
            </div>
          </div>
          <DialogFooter>
            {
              isLoading? <Spinner/> : (
                <Button type="submit" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
              )
            }
            
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddBike;
