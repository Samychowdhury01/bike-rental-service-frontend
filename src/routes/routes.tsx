import MainLayout from "@/components/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Auth from "@/pages/Auth/Auth";
import Home from "@/pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Profile from "@/pages/Profile/Profile";
import Bikes from "@/pages/Bikes/Bikes";
import User from "@/pages/User/User";
import CouponPage from "@/pages/Coupon/CouponPage";
import Rental from "@/pages/Rental/Rental";
import BikeDetails from "@/pages/BikeDetails/BikeDetails";
import SuccessPayment from "@/pages/SuccessPayment/SuccessPayment";
import FailedPayment from "@/pages/FailedPayment/FailedPayment";
import Welcome from "@/components/ui/Welcome";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/auth",
        element: (
          <PrivateRoute>
            <Auth />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <BikeDetails />,
      },
      {
        path: "/checkout-success",
        element: <SuccessPayment />,
      },
      {
        path: "/checkout-fail",
        element: <FailedPayment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Welcome />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/bikes",
        element: <Bikes />,
      },
      {
        path: "/dashboard/users",
        element: <User />,
      },
      {
        path: "/dashboard/coupons",
        element: <CouponPage />,
      },
      {
        path: "/dashboard/rentals",
        element: <Rental />,
      },
    ],
  },
 
]);

export default router;
