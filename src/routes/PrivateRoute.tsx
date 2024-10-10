import useToken from "@/hooks/useToken";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const {token} = useToken('token');

  if (token) {
    return children;
  } else {
    Swal.fire({
      title: "Error",
      text: "You must be logged in to access this page",
      icon: "error",
    });
    return <Navigate to="/auth"></Navigate>;
  }
};

export default PrivateRoute;
