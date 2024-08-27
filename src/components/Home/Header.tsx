import img from "@/assets/header.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div>
     <div
  className="h-screen md:h-[768px] bg-cover bg-right md:bg-bottom flex justify-center  pt-10 md:pt-28 px-5 md:px-0"
  style={{ backgroundImage: `url(${img})`,}}
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
          {/* for search bar */}
          <div  className="flex justify-center gap-2">

            <Input placeholder="Search for bikes" className=" shadow-2xl placeholder:text-gray-500" />
            <Button className="">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
