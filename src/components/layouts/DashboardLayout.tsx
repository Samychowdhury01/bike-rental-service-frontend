import Container from "../ui/Container";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import SideNav from "../dashboard/SideNav";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="grid grid-cols-5 gap-5">
          <div>
            <SideNav />
          </div>
          <div className="col-span-4">
            <Outlet />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default DashboardLayout;
