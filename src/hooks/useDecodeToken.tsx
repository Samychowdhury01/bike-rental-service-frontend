
import useGetToken from "./useGetToken";
import { jwtDecode } from "jwt-decode";



const useDecodeToken = () => {
  const token : TUser = useGetToken();
  console.log(token);
  if (token) {
    const decodedToken = jwtDecode(token as string);
    return decodedToken;
  }
  else{
    return {};
  }
};

export default useDecodeToken;
