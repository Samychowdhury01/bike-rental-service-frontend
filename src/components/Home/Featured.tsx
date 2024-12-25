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
  const { data: bikes } = useGetAllBikesQuery('');
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {bikes?.data &&
          bikes?.data?.slice(0,4)?.map((bike) => (
            <Card key={bike._id}>
              <CardHeader>
                <div className="md:h-[200px] w-full mb-2">
                  <img
                    src={bike.image}
                    alt=""
                    className="object-cover h-full w-full rounded-md shadow-md"
                  />
                </div>
                <CardTitle>{bike.name}</CardTitle>
              </CardHeader>
              <CardContent className="md:h-[100px] mb-5">
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
       <Link to='/bikes'>
       <Button>
       View All Bikes
        </Button>
       </Link>
      </div>
    </div>
  );
};

export default Featured;
