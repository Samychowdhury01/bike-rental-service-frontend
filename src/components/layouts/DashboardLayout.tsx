
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

import SideNav from "../dashboard/SideNav";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:h-screen">
          <SideNav />
        </div>
        <div className="lg:col-span-4 lg:mt-5 lg:p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
