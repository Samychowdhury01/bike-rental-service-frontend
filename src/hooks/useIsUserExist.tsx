import useDecodeToken from "./useDecodeToken";

const useIsUserExist = () => {
  const user = useDecodeToken();
  // Check if the decoded token contains valid user data
  const isUserValid = user && user.exp && user.exp > Date.now() / 1000; // Ensure the token is not expired
  return Boolean(isUserValid);
};

export default useIsUserExist;