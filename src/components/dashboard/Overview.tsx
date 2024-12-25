/* eslint-disable @typescript-eslint/no-explicit-any */
import useDecodeToken from "@/hooks/useDecodeToken";
import Welcome from "../ui/Welcome";
import AdminOverview from "./AdminOverview";
import UserOverview from "./UserOverview";
import Container from "../ui/Container";

const Overview = () => {
  const user: any = useDecodeToken();
  return (
    <Container>
      <Welcome />
      {user && user?.role === "admin" ? <AdminOverview /> : <UserOverview />}
      
    </Container>
  );
};

export default Overview;
