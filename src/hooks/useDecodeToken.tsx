
import { jwtDecode } from "jwt-decode";
import useToken from "./useToken";

const useDecodeToken = () => {
  // const token = useGetToken();
  const { token } = useToken("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error("Invalid token:", error); // Optional: add logging to help with debugging
      return null; // Return `null` if token decoding fails
    }
  }
  return null; // Return `null` when no token exists
};

export default useDecodeToken;
