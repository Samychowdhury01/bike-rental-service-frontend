import { useAppSelector } from "@/redux/hook";

const useIsUserExist = () => {
  const user = useAppSelector((state) => state.userInfo.user);
  return Boolean(Object.keys(user).length);
};

export default useIsUserExist;
