/* eslint-disable @typescript-eslint/no-explicit-any */
import useDecodeToken from "@/hooks/useDecodeToken";
import useIsUserExist from "@/hooks/useIsUserExist";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const user: any = useDecodeToken();
  const isUserExist = useIsUserExist()
  if (!isUserExist) {
    Swal.fire({
      title: "Error",
      text: "You must be logged in to access this page",
      icon: "error",
    });
    navigate("/auth");
  }
  if (user.role !== "admin") {
    Swal.fire({
      title: "Error",
      text: "You do not have permission to access this page",
      icon: "error",
    });
    navigate("/auth");
  }
  return children;
};

export default AdminRoute;
