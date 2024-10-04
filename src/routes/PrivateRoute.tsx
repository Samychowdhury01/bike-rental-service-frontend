import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIsUserExist from "@/hooks/useIsUserExist";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isUserExist = useIsUserExist();
  const navigate = useNavigate();

  useEffect(() => {
    // Always check if the user exists when the component mounts
    if (!isUserExist) {
      Swal.fire({
        title: "Error",
        text: "You must be logged in to access this page",
        icon: "error",
      });
      navigate("/auth", { replace: true });
    }
  }, [isUserExist, navigate]);

  // If the user is not authenticated, return null
  if (!isUserExist) return null;

  return children;
};

export default PrivateRoute;
