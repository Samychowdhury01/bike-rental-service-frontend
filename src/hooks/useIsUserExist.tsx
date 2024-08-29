
import useDecodeToken from "./useDecodeToken";

const useIsUserExist = () => {
  const user = useDecodeToken()
  return Boolean(Object.keys(user).length);
};

export default useIsUserExist;
