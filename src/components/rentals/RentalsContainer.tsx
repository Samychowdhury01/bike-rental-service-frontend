import useDecodeToken from "@/hooks/useDecodeToken";
import AdminRentals from "./AdminRentals";
import UserRentals from "./UserRentals";

const RentalsContainer = () => {
  const user = useDecodeToken();
  return (
    <div>{user.role === "admin" ? <AdminRentals /> : <UserRentals />}</div>
  );
};

export default RentalsContainer;
