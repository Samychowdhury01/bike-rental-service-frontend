import { NavLink } from "react-router-dom";

const SideActiveLink = ({
  children,
  to,
  exact,  // Add an optional exact prop for flexibility
}: {
  children: React.ReactNode;
  to: string;
  exact?: boolean;  // Make exact optional
}) => {
  return (
    <NavLink
      to={to}
      end={exact}  // Use exact matching only when required
      className={({ isActive }) =>
        isActive
          ? "bg-primary px-5 py-2 text-white font-medium rounded-md shadow-2xl hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
          : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default SideActiveLink;
