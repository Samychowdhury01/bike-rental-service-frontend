import { useLocation } from "react-router-dom";
import Container from "./Container";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const location = useLocation();
  const dashboardPath = location.pathname.includes("/dashboard");
  return (
    <>
      {!dashboardPath ? (
        <div className="bg-muted">
          <Container>
            <div className="flex md:items-center justify-between p-2">
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
          </Container>
        </div>
      ) : (
        <div className="bg-muted p-5">
          <div className="flex md:items-center justify-between p-2">
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
        </div>
      )}
    </>
  );
};

export default Navbar;
