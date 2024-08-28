import useIsUserExist from "@/hooks/useIsUserExist";

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isUserExist = useIsUserExist();

  if (!isUserExist) {
    return children;
  } else {
    <Navigate to="/" />;
  }
};

export default PrivateRoute;
