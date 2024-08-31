import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDecodeToken from "@/hooks/useDecodeToken";
import useIsUserExist from "@/hooks/useIsUserExist";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isUserExist = useIsUserExist();
  const navigate = useNavigate();
  const user = useDecodeToken();

  useEffect(() => {
    if (!isUserExist) {
      Swal.fire({
        title: "Error",
        text: "You must be logged in to access this page",
        icon: "error",
      });
      navigate("/auth", { replace: true });
    }
  }, [isUserExist, navigate]);

  // You can optionally return null if the user is not logged in to avoid rendering the children
  if (!isUserExist) return null;

  return children;
};

export default PrivateRoute;
