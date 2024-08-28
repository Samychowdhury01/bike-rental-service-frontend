import SideActiveLink from "./SideActiveLink";

const SideNav = () => {
  const userNavItem = (
    <>
      <li>
        <SideActiveLink to="/dashboard">Profile</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/bikes">Bikes</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/my-rentals">My Rentals</SideActiveLink>
      </li>
    </>
  );
  const adminNavItem = (
    <>
     <li>
        <SideActiveLink to="/dashboard">Profile</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/about">Bikes</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard">Rentals</SideActiveLink>
      </li>
      <li>
        <SideActiveLink to="/dashboard">users</SideActiveLink>
      </li>
    </>
  );
  return (
    <div className="bg-secondary p-5 rounded-md h-full">
        <ul className="space-y-5">
          {userNavItem}
        </ul>
    </div>
  );
};

export default SideNav;
