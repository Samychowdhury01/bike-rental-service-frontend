/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { useNavigate } from "react-router-dom";
import { getErrorData } from "@/utils/getErrorData";
import SocialLogin from "./SocialLogin";
import useToken from "@/hooks/useToken";

const Login = () => {
  // location path
  const navigate = useNavigate();
  // redux
  const [login, { isLoading }] = useLoginMutation();
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  // react-form-hook
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  // type for form-hook error
  const typedErrors = errors as FieldErrors<FieldValues>;
  // error message state
  const [errorMessage, setErrorMessage] = useState("");

  // cookies for testing
  // const [, setCookie] = useCookies(["token"]);
  // custom hook for save the token in localStorage
  const { saveToken } = useToken("token");
  // onSubmit handler
  const onSubmit = async (data: any) => {
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await login(data);
      console.log(response);
      if (response?.data && response?.data?.token) {
        // Store the token directly from the response
        const token = response?.data?.token;

        // Set the cookie with the token
        // setCookie("token", token, {
        //   path: "/",
        //   maxAge: 86400,
        // });
        saveToken(token);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "Login successful!",
        });

        navigate("/"); // Redirect to dashboard
        setErrorMessage(""); // Clear any error messages
      } else {
        // Use getErrorData to extract detailed error information
        const errorData = getErrorData(response.error);
        setErrorMessage(
          errorData?.message || "Login failed. Please check your credentials."
        );
        reset(); // Reset form fields
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  // credentials handler
  const handleCredentials = (type: string) => {
    const newCredentials =
      type === "user"
        ? { email: "user@gmail.com", password: "user1234" }
        : { email: "admin@gmail.com", password: "admin123" };

    setCredentials(newCredentials);
    setValue("email", newCredentials.email);
    setValue("password", newCredentials.password);
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
              defaultValue={credentials.email}
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
              defaultValue={credentials.password}
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
          <div className="space-x-3">
            <p className="text-sm text-center my-2 text-primary">
              click on the any button to fill the inputs
            </p>
            <Button
              onClick={() => handleCredentials("admin")}
              variant="outline"
              size="sm"
            >
              Admin Credentials
            </Button>
            <Button
              onClick={() => handleCredentials("user")}
              variant="outline"
              size="sm"
            >
              User Credentials
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-3">
          <div>
            {isLoading ? (
              <Spinner />
            ) : (
              <Button onClick={handleSubmit(onSubmit)}>Login</Button>
            )}
          </div>
          <div className="flex items-center w-full">
            <div className="h-[2px] bg-black w-full"></div>
            OR
            <div className="h-[2px] bg-black  w-full"></div>
          </div>
          {/* social login */}
          <SocialLogin />
        </CardFooter>
      </Card>
    </>
  );
};

export default Login;

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { FieldErrors, FieldValues, useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { useLoginMutation } from "@/redux/api/auth/authApi";
// import Spinner from "../ui/Spinner";
// import { useState } from "react";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
// import { getErrorData } from "@/utils/getErrorData";
// import SocialLogin from "./SocialLogin";

// const Login = () => {
//   // location path
//   const navigate = useNavigate();
//   // redux
//   const [login, { isLoading }] = useLoginMutation();
//   const [credentials, setCredentials] = useState<{
//     email: string;
//     password: string;
//   }>({
//     email: "",
//     password: "",
//   });

//   // react-form-hook
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     setValue,
//   } = useForm();
//   // type for form-hook error
//   const typedErrors = errors as FieldErrors<FieldValues>;
//   // error message state
//   const [errorMessage, setErrorMessage] = useState("");

//   // cookies for testing
//   const [, setCookie] = useCookies(["token"]);

//   // onSubmit handler
//   const onSubmit = async (data: any) => {
//     console.log(data);
//     setErrorMessage(""); // Clear any previous error messages

//     try {
//       const response = await login(data);

//       if (response.data && response.data.token) {
//         // Store the token directly from the response
//         const token = response.data.token;

//         // Set the cookie with the token
//         setCookie("token", token);

//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: response.data.message || "Login successful!",
//         });

//         navigate("/dashboard"); // Redirect to dashboard
//         setErrorMessage(""); // Clear any error messages
//       } else {
//         // Use getErrorData to extract detailed error information
//         const errorData = getErrorData(response.error);
//         setErrorMessage(
//           errorData?.message || "Login failed. Please check your credentials."
//         );
//         reset(); // Reset form fields
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setErrorMessage("An unexpected error occurred. Please try again.");
//     }
//   };

//   // credentials handler
//   const handleCredentials = (type: string) => {
//     const newCredentials =
//       type === "user"
//         ? { email: "user@gmail.com", password: "user1234" }
//         : { email: "admin@gmail.com", password: "admin123" };

//     setCredentials(newCredentials);
//     setValue("email", newCredentials.email);
//     setValue("password", newCredentials.password);
//   };

//   return (
//     <>
//       <Card>
//         <CardHeader>
//           <CardTitle>Login</CardTitle>
//           <CardDescription className="text-black">
//             Log in to your account to continue your journey with RideWave.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-2">
//           <div className="space-y-1">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               placeholder="Your Email"
//               id="email"
//               type="email"
//               value={credentials.email}
//               {...register("email", { required: true })}
//               onChange={(e) =>
//                 setCredentials({ ...credentials, email: e.target.value })
//               }
//             />
//             {typedErrors.email && (
//               <p className="text-red-500 text-sm">Email is Required</p>
//             )}
//           </div>
//           <div className="space-y-1">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               placeholder="Your password"
//               id="password"
//               type="password"
//               value={credentials.password}
//               {...register("password", {
//                 required: true,
//                 minLength: 8,
//                 maxLength: 16,
//               })}
//               onChange={(e) =>
//                 setCredentials({ ...credentials, password: e.target.value })
//               }
//             />
//             {typedErrors.password && (
//               <p className="text-red-500 text-sm">
//                 Password must be at least 8 characters and not more than 16
//                 characters
//               </p>
//             )}
//           </div>
//           <p className="text-red-500 text-sm">{errorMessage}</p>
//           <div className="space-x-3">
//             <p className="text-sm text-center my-2 text-primary">
//               Click on any button to fill the inputs
//             </p>
//             <Button
//               onClick={() => handleCredentials("admin")}
//               variant="outline"
//               size="sm"
//             >
//               Admin Credentials
//             </Button>
//             <Button
//               onClick={() => handleCredentials("user")}
//               variant="outline"
//               size="sm"
//             >
//               User Credentials
//             </Button>
//           </div>
//         </CardContent>
//         <CardFooter className="flex flex-col items-start space-y-3">
//           <div>
//             {isLoading ? (
//               <Spinner />
//             ) : (
//               <Button onClick={handleSubmit(onSubmit)}>Login</Button>
//             )}
//           </div>
//           <div className="flex items-center w-full">
//             <div className="h-[2px] bg-black w-full"></div>
//             OR
//             <div className="h-[2px] bg-black  w-full"></div>
//           </div>
//           {/* social login */}
//           <SocialLogin />
//         </CardFooter>
//       </Card>
//     </>
//   );
// };

// export default Login;
