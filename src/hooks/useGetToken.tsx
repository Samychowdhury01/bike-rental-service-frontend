
import { useCookies } from "react-cookie";

const useGetToken = () => {
  const [token] = useCookies(["token"]);
  return token;
};

export default useGetToken;
