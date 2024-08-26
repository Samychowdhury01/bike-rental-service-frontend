import img from "@/assets/header.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div>
      <div
        className="md:h-[768px] bg-contain bg-current flex justify-center pt-40"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-1/2 space-y-5">
          <p className="text-gradient text-5xl font-bold">
            Escape the Ordinary, Ride Extraordinary!
          </p>
          <p>
            Unlock the freedom to explore with our top-quality bikes. Whether
            you're seeking an urban adventure or a scenic escape, we have the
            perfect ride for you. Start your journey today—search for the ideal
            bike and discover the thrill of two wheels. Adventure awaits just a
            click away!
          </p>
          {/* for search bar */}
          <div  className="flex justify-center gap-2">

            <Input placeholder="Search for bikes" className=" shadow-2xl" />
            <Button className="">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
