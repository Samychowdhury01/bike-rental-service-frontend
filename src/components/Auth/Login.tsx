/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Swal from "sweetalert2";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "@/redux/hook";
import { jwtDecode } from "jwt-decode";
import { addUserInfo } from "@/redux/features/userInfoSlice";

const Login = () => {
  // redux
  const [login, { isLoading }] = useLoginMutation();
  // dispatch function
  const dispatch = useAppDispatch();

  // react-form-hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // type for form-hook error
  const typedErrors = errors as FieldErrors<FieldValues>;
  // error message state
  const [errorMessage, setErrorMessage] = useState("");

  // cookies for testing
  const [cookies, setCookie] = useCookies(["token"]);

  // onSubmit handler
  const onSubmit = async (data) => {
    setErrorMessage("");
    const response = await login(data);

    if (response.data) {
      setCookie("token", response.data.token);
      const decoded = jwtDecode(cookies.token);
      dispatch(addUserInfo(decoded));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });

      setErrorMessage("");
    } else {
      setErrorMessage(response.error.data.message);
      reset();
    }
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription className="text-black">
            Log in to your account to continue your journey with RideWave.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
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
          <p className="text-red-500 text-sm">{errorMessage}</p>
        </CardContent>
        <CardFooter>
          {isLoading ? (
            <Spinner />
          ) : (
            <Button onClick={handleSubmit(onSubmit)}>Login</Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default Login;
