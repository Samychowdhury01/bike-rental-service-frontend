import { useAppSelector } from "@/redux/hook";
import SideActiveLink from "./SideActiveLink";

const SideNav = () => {
  const { user } = useAppSelector((state) => state.userInfo);
  const userNavItem = (
    <>
      <li>
        <SideActiveLink to="/dashboard">Profile</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/bikes">Bikes</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/my-rentals">My Rentals</SideActiveLink>
      </li>
    </>
  );
  const adminNavItem = (
    <>
      <li>
        <SideActiveLink to="/dashboard">Profile</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/bikes">Bikes</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/rentals">Rentals</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/users">User Management</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard/coupons">Coupon</SideActiveLink>
      </li>
    </>
  );
  return (
    <div className="bg-secondary p-5 rounded-md h-full">
      <ul className="space-y-5">
        {user.role === "user" ? userNavItem : adminNavItem}
      </ul>
    </div>
  );
};

export default SideNav;
