import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/user/userApi";

import SectionHeading from "../ui/SectionHeading";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "../ui/button";
import Swal from "sweetalert2";

const UserInfo = () => {
  // react-form-hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [toggle, setToggle] = useState(true);
  const { data } = useGetProfileQuery("");
  //   const { name, phone, address, email } = data?.data;
  const [updateProfile] = useUpdateProfileMutation();
  const onSubmit = async (data) => {
    const response = await updateProfile(data);
    if (response.data) {
      Swal.fire({
        title: "Success",
        text: "Profile updated successfully",
        icon: "success",
      });
      setToggle(!toggle);
    } else {
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response?.error?.data.message,
      });
    }
  };
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      <SectionHeading title="Profile" text="" width="w-28" />
      {data && (
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              readOnly={toggle}
              defaultValue={data.data.name}
              placeholder="Your Name"
              id="name"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              defaultValue={data.data.email}
              readOnly={toggle}
              placeholder="Your Email"
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Phone No.</Label>
            <Input
              defaultValue={data.data.phone}
              readOnly={toggle}
              placeholder="Your Phone No."
              id="phone"
              type="number"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="address">Address</Label>
            <Input
              defaultValue={data.data.address}
              readOnly={toggle}
              placeholder="Your Address"
              id="address"
              type="text"
              {...register("address", { required: true, maxLength: 11 })}
            />
          </div>
          <div className="flex gap-2 mt-5">
            {toggle ? (
              <Button onClick={() => setToggle(!toggle)}>Edit</Button>
            ) : (
              <Button onClick={handleSubmit(onSubmit)}>Update</Button>
            )}
            {!toggle && (
              <Button variant="outline" onClick={() => setToggle(true)}>
                Cancel
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
