
import { AuthContext } from "@/Provider/AuthProvider";
import { useGoogleAuthMutation } from "@/redux/api/auth/authApi";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const [, setCookie] = useCookies(["token"]);
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [setGoogleAuth] = useGoogleAuthMutation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async (result) => {
        const loggedInUser = result.user;
        const userData = {
          name: loggedInUser?.displayName,
          email: loggedInUser?.email,
        };
        const response = await setGoogleAuth(userData);
        if (response.data && response.data.token) {
          // Store the token directly from the response
          const token = response.data.token;

          // Set the cookie with the token
          setCookie("token", token);

          Swal.fire({
            icon: "success",
            title: "Success",
            text: response.data.message || "Login successful!",
          });

          navigate("/dashboard"); // Redirect to dashboard
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops",
          text: "Something is wrong, Try Again !!",
          icon: "error",
        });
        console.log(error);
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center gap-2 mt-8 py-3 border-2 rounded-3xl cursor-pointer w-full hover:shadow-2xl transition-all duration-300"
    >
      <FcGoogle className="text-3xl" />
      <span className="text-base">Continue with Google</span>
    </div>
  );
};

export default SocialLogin;
