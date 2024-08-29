
import img from "@/assets/header.png";
import test from "@/assets/test.png";
import { Button } from "../ui/button";
import SectionHeading from "../ui/SectionHeading";
import { useGetAllBikesQuery } from "@/redux/api/bike/bikeApi";
import BikeCard from "../ui/BikeCard";

const Featured = () => {
  const {data, error, isLoading} = useGetAllBikesQuery('')
  const bikes = data?.data
console.log(bikes);
  return (
    <div className="space-y-5 mt-16 p-5 md:p-9">
      {/* heading */}
      <SectionHeading
        title="Featured Bikes"
        text="Explore our top picks in the Featured Bikes section, showcasing the
          best rides for every adventure. Whether you're cruising through the
          city or hitting the trails, find the perfect bike to match your style
          and performance needs."
          width=" w-1/4"
      />
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
