import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    // Main Div
    <div className="flex md:items-center justify-between">
      logo
      <div>

      </div>
      {/* Menu Items */}
      <div>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
