/* eslint-disable @typescript-eslint/no-explicit-any */
import useDecodeToken from "@/hooks/useDecodeToken";
import Welcome from "../ui/Welcome";
import AdminOverview from "./AdminOverview";
import UserOverview from "./UserOverview";

const Overview = () => {
  const user: any = useDecodeToken();
  return (
    <div>
      <Welcome />
      {user && user.role === "admin" ? <AdminOverview /> : <UserOverview />}
      
    </div>
  );
};

export default Overview;
