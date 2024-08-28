import ActiveLink from "./ActiveLink";
import { Button } from "./button";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import useIsUserExist from "@/hooks/useIsUserExist";
import { addUserInfo } from "@/redux/features/userInfoSlice";
import { useAppDispatch } from "@/redux/hook";

const NavMenu = () => {
  const isUserExist = useIsUserExist();
  const [isOpen, setIsOpen] = useState(false);
  const [, , removeCookie] = useCookies(["token"]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("token");
    dispatch(addUserInfo({})); // Clear user info from Redux store
    navigate("/");
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
