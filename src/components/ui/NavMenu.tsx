/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ActiveLink from "./ActiveLink";
import { Button } from "./button";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useContext, useState } from "react";
import useIsUserExist from "@/hooks/useIsUserExist";
import { AuthContext } from "@/Provider/AuthProvider";
import Swal from "sweetalert2";

const NavMenu = () => {
  const isUserExist = useIsUserExist();
  const [isOpen, setIsOpen] = useState(false);
  // @ts-ignore
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logOut();
      // @ts-ignore
      const removedCookie = await removeCookie("token", {
        path: "/",
      });
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

  const items = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/about">About Us</ActiveLink>
      </li>
      <li>
        {isUserExist && <ActiveLink to="/my-profile">My Profile</ActiveLink>}
      </li>
      <li>
        {isUserExist && <ActiveLink to="/dashboard">Dashboard</ActiveLink>}
      </li>
      <li>
        {!isUserExist ? (
          <Button variant="outline">
            <NavLink to="/auth">Login</NavLink>
          </Button>
        ) : (
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
        <div className="transition-all duration-300 ease-in-out transform">
          {isOpen ? (
            <HiX className="rotate-180" />
          ) : (
            <HiMenuAlt1 className="rotate-0" />
          )}
        </div>
        <ul
          className={`transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 max-h-screen p-5"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {items}
        </ul>
      </div>
      <div>
        <ul className="hidden md:flex items-center space-x-5">{items}</ul>
      </div>
    </div>
  );
};

export default NavMenu;
