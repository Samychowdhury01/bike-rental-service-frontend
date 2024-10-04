import { Button } from "../ui/button";
import SectionHeading from "../ui/SectionHeading";
import { useGetAllBikesQuery } from "@/redux/api/bike/bikeApi";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";

const Featured = () => {
  const { data: bikes } = useGetAllBikesQuery({ isAvailable: true });
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
        {bikes?.data && bikes?.data?.map((bike) => (
          <Card key={bike._id}>
            <CardHeader>
              <div className="md:h-[250px] w-full mb-2">
                <img
                  src={bike.image}
                  alt=""
                  className="object-fill h-full w-full rounded-md shadow-md"
                />
              </div>
              <CardTitle>{bike.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <span className="font-semibold mr-1">Description:</span>
                {bike.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button>
                <Link to={`/details/${bike._id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button>
          <Link to="dashboard/bikes">View All Bikes</Link>
        </Button>
      </div>
    </div>
  );
};

export default Featured;
