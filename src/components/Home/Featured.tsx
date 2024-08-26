import BikeCard from "./BikeCard";
import img from "@/assets/header.png";
import test from "@/assets/test.png";
import { Button } from "../ui/button";

const Featured = () => {
  return (
    <div className="space-y-5 mt-16">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-5xl text-primary font-semibold">Featured Bikes</h1>
        {/* underline */}
        <div className="bg-secondary h-2 w-1/4 mx-auto rounded-full mb-5"></div>
        {/* description */}
        <p className="w-1/2 mx-auto">
          Explore our top picks in the Featured Bikes section, showcasing the
          best rides for every adventure. Whether you're cruising through the
          city or hitting the trails, find the perfect bike to match your style
          and performance needs.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-5">
        <BikeCard img={img} />

        <BikeCard img={test} />
        <BikeCard img={img} />

        <BikeCard img={test} />
        <BikeCard img={img} />

        <BikeCard img={test} />
        <BikeCard img={img} />

        <BikeCard img={test} />
      </div>
      <div className="text-center">
        <Button>View All</Button>
      </div>
    </div>
  );
};

export default Featured;
