import MainLayout from "@/components/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Home from "@/pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        },
      {
        path: "/about",
        element: <AboutUs/>,
        },
      ]
  },
]);

export default router;
