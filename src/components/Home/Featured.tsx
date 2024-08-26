import BikeCard from "./BikeCard";
import img from "@/assets/header.png";
import test from "@/assets/test.png";
import { Button } from "../ui/button";

const Featured = () => {
  return (
    <div className="space-y-5 mt-16">
      {/* heading */}
      <div className="text-center ">
      <h1 className="text-5xl text-primary font-semibold">
        Featured Bikes
      </h1>
      <div className="bg-secondary h-2 w-1/4 mx-auto rounded-full"></div>
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
