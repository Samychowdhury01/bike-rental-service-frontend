import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    // Main Div 
    <div className="flex md:items-center justify-between mb-10">
      {/* logo */}
      <div>
        <h1 className="text-gradient text-2xl md:text-4xl font-bold">
          RideWave
        </h1>
      </div>

      {/* Menu Items */}
      <div>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
