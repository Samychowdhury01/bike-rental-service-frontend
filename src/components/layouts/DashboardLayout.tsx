import { Outlet } from "react-router-dom";

import SideNav from "../dashboard/SideNav";
import TopNav from "../dashboard/TopNav";

const DashboardLayout = () => {
  return (
    <>
      <TopNav />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="relative lg:h-screen lg:min-h-full">
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
