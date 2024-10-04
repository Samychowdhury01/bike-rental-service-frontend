import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 py-3 border-2 rounded-3xl cursor-pointer w-full hover:shadow-2xl transition-all duration-300">
      <FcGoogle className="text-3xl" />
      <span className="text-base">Continue with Google</span>
    </div>
  );
};

export default SocialLogin;
