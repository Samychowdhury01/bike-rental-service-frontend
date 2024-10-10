import img from "@/assets/header.png";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        className="bg-muted h-screen md:h-[700px] bg-cover bg-right md:bg-bottom flex md:items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <Container>
          <div className="md:w-1/2 space-y-5">
            <p className="text-gradient text-2xl md:text-5xl font-bold">
              Escape the Ordinary, Ride Extraordinary!
            </p>
            <p>
              Unlock the freedom to explore with our top-quality bikes. Whether
              you're seeking an urban adventure or a scenic escape, we have the
              perfect ride for you. Start your journey today—search for the
              ideal bike and discover the thrill of two wheels. Adventure awaits
              just a click away!
            </p>
            {/* for search bar */}
            <div className="flex gap-2">
              <Link to="/bikes">
                <Button className="rounded-full">View Bikes</Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" className="rounded-full text-primary">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;

/*

<>
      <div
        className="h-screen md:h-[700px] bg-cover bg-right md:bg-bottom flex justify-center  pt-10 md:pt-28 px-5 md:px-0"
        style={{ backgroundImage: `url(${img})`, height: "700px" }}
      >
        <div className="md:w-1/2 space-y-5">
          <p className="text-gradient text-2xl md:text-5xl font-bold">
            Escape the Ordinary, Ride Extraordinary!
          </p>
          <p>
            Unlock the freedom to explore with our top-quality bikes. Whether
            you're seeking an urban adventure or a scenic escape, we have the
            perfect ride for you. Start your journey today—search for the ideal
            bike and discover the thrill of two wheels. Adventure awaits just a
            click away!
          </p>
          
          <div className="flex gap-2">
           <Button className="rounded-full">View Bikes</Button>
           <Button variant="outline" className="rounded-full text-primary">Login</Button>
           
          </div>
        </div>
      </div>
    </>




*/
