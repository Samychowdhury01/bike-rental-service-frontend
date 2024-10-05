
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

import SideNav from "../dashboard/SideNav";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-5 gap-5">
        <div className="h-screen">
          <SideNav />
        </div>
        <div className="col-span-4 mt-5 p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
