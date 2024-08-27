import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
const SignUp = ({ setActiveTab }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const typedErrors = errors as FieldErrors<FieldValues>;
  const onSubmit = (data) => {
   
    if(data){
        const userInfo = {...data, role: 'user'}
        
    }
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription className="text-black">
            Create an account to start exploring and enjoying the freedom of
            eco-friendly rides.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              placeholder="Your Name"
              id="name"
              type="text"
              {...register("name", { required: true })}
            />
            {typedErrors.name && (
              <p className="text-red-500 text-sm">Name is Required</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Your Email"
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
            {typedErrors.email && (
              <p className="text-red-500 text-sm">Email is Required</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              placeholder="Your password"
              id="password"
              type="password"
              {...register("password", {
                required: true,
                min: 8,
                maxLength: 16,
              })}
            />
            {typedErrors.password && (
              <p className="text-red-500 text-sm">
                Password must be at least 8 characters and not more than 16
                characters
              </p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Phone No.</Label>
            <Input
              placeholder="Your Phone No."
              id="phone"
              type="number"
              {...register("phone", { required: true, max: 11, min: -1 })}
            />
            {typedErrors.phone && (
              <p className="text-red-500 text-sm">Phone number is required</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="address">Address</Label>
            <Input
              placeholder="Your Address"
              id="address"
              type="text"
              {...register("address", { required: true })}
            />
            {typedErrors.address && (
              <p className="text-red-500 text-sm">Address is Required</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit(onSubmit)}>Sign-up</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignUp;
