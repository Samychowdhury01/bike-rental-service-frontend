import { Link } from "react-router-dom";
import Container from "./Container";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <>
      <div className="bg-muted">
        <Container>
          <div className="flex md:items-center justify-between">
            {/* logo */}
            <Link to="/">
              <h1 className="text-gradient text-2xl md:text-4xl font-bold">
                RideWave
              </h1>
            </Link>

            {/* Menu Items */}
            <div>
              <NavMenu />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
