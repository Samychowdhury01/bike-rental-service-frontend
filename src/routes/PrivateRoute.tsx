
import { useNavigate } from "react-router-dom";
import useGetToken from "@/hooks/useGetToken";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = useGetToken();

  if (!token) {
    Swal.fire({
      title: "Error",
      text: "You must be logged in to access this page",
      icon: "error",
    });
    navigate("/auth", { replace: true });
  }

  return children;
};

export default PrivateRoute;
