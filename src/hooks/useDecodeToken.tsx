import useGetToken from "./useGetToken";
import { jwtDecode } from "jwt-decode";

const useDecodeToken = () => {
  const token = useGetToken();
  if (token) {
    const decodedToken = jwtDecode(token as string);

    return decodedToken;
  } else {
    return {};
  }
};

export default useDecodeToken;
