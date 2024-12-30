/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useNavigate } from "react-router-dom";
import profileImg from "@/assets/profile.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HandCoins, LogOut } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import useToken from "@/hooks/useToken";
import useDecodeToken from "@/hooks/useDecodeToken";
import { useGetDashboardDataQuery } from "@/redux/api/user/userApi";

const TopNav = () => {
  const user: any = useDecodeToken();
  const {data: dashboardData, isFetching} = useGetDashboardDataQuery('')
  console.log(dashboardData);
  // @ts-ignore
  // const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const { removeToken } = useToken("token");
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logOut();
      // @ts-ignore
      removeToken();
      Swal.fire({
        title: "Logged out",
        text: "You have been logged out",
        icon: "success",
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        title: "Oops",
        text: "Something is wrong, Try Again !!",
        icon: "error",
      });
      console.log(err);
    }
  };
  return (
    <nav className="bg-muted px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-gradient text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              RideWave
            </h1>
          </Link>

          {/* Menu Items */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer">
                  <AvatarImage src={profileImg} alt="user avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                  {user?.role === "admin" ? (
                    "Action"
                  ) : (
                    <div className="flex items-center gap-1">
                      <div className="flex items-center gap-2">
                        <HandCoins />
                        <p>Available Points:</p>
                      </div>
                      <p>{!isFetching && dashboardData?.data?.points  || 0.0}</p>
                    </div>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full"
                  >
                    <LogOut />
                    <span>Logout</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
