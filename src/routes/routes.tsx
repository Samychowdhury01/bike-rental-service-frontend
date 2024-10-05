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
import AdminRoute from "./AdminRoute";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Overview from "@/components/dashboard/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: <Auth />,
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Overview />,
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/bikes",
        element: (
          <PrivateRoute>
            <Bikes />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <User />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/coupons",
        element: (
          <AdminRoute>
            <CouponPage />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/rentals",
        element: (
          <PrivateRoute>
            <Rental />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
