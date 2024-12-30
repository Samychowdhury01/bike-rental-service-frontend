/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SideActiveLink from "./SideActiveLink";
import useDecodeToken from "@/hooks/useDecodeToken";

interface NavItem {
  to: string;
  exact?: boolean;
  label: string;
  adminOnly?: boolean;
}

const NavItem: React.FC<NavItem> = React.memo(({ to, exact, label }) => (
  <li>
    <SideActiveLink to={to} exact={exact}>
      {label}
    </SideActiveLink>
  </li>
));

NavItem.displayName = "NavItem";

const navItems: NavItem[] = [
  { to: "/dashboard", exact: true, label: "Overview" },
  { to: "/dashboard/profile", label: "Profile" },
  { to: "/dashboard/bikes", label: "Bikes", adminOnly: true },
  { to: "/dashboard/rentals", label: "Rentals List" },
  { to: "/dashboard/users", label: "User Management", adminOnly: true },
  { to: "/dashboard/coupons", label: "Coupon", adminOnly: true },
  { to: "/dashboard/cancel-rides", label: "Cancel Rides" },
  { to: "/dashboard/reviews", label: "Reviews" },
  { to: "/dashboard/payment-history", label: "Payment History" },
];

const SideNav: React.FC = () => {
  const user: any = useDecodeToken();

  const filteredNavItems = React.useMemo(
    () => navItems?.filter((item) => !item.adminOnly || user?.role === "admin"),
    [user?.role]
  );

  return (
    <div className="bg-muted h-full p-5">
      <ul className="space-y-5 lg:sticky lg:top-10">
        {filteredNavItems?.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SideNav);