// import { useState } from "react";
// import ActiveLink from "./ActiveLink";
// import { Button } from "./button";
// import { HiMenuAlt1, HiX } from "react-icons/hi";

// const NavMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const items = (
//     <>
//       <li>
//         <ActiveLink to="/">Home</ActiveLink>
//       </li>
//       <li>
//         <ActiveLink to="/about">About Us</ActiveLink>
//       </li>
//       <li>
//         <ActiveLink to="/dashboard">Dashboard</ActiveLink>
//       </li>
//       <li>
//         <ActiveLink to="/dashboard">Dashboard</ActiveLink>
//       </li>
//       <li>
//         <Button variant="outline">
//           <ActiveLink to="/auth">Login</ActiveLink>
//         </Button>
//       </li>
//     </>
//   );
//   return (
//     <div>
//       <div onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
//         {
//           isOpen ? <HiX /> : <HiMenuAlt1 />
//         }
//         <ul>{isOpen ? items : null}</ul>
//       </div>
//       <div>
//         <ul className="hidden md:flex items-center space-x-5">{items}</ul>
//       </div>
//     </div>
//   );
// };

// export default NavMenu;

import { useState } from "react";
import ActiveLink from "./ActiveLink";
import { Button } from "./button";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/about">About Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      </li>
      <li>
        <Button variant="outline">
          <ActiveLink to="/auth">Login</ActiveLink>
        </Button>
      </li>
    </>
  );

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden"
      >
        <div className="transition-all duration-300 ease-in-out transform">
          {isOpen ? (
            <HiX className="rotate-180" />
          ) : (
            <HiMenuAlt1 className="rotate-0" />
          )}
        </div>
        <ul
          className={`transition-all duration-300 ease-in-out transform ${
            isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
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
