import MainLayout from "@/components/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Auth from "@/pages/Auth/Auth";
import Home from "@/pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Profile from "@/pages/Profile/Profile";
import Bikes from "@/pages/Bikes/Bikes";

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
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Profile/>,
      },
      {
        path: "/dashboard/bikes",
        element: <Bikes/>,
      },
    ],
  },
]);

export default router;
