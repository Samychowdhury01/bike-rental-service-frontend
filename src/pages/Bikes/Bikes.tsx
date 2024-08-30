import { useState } from "react";
import BikeCard from "@/components/ui/BikeCard";
import { useGetAllBikesQuery } from "@/redux/api/bike/bikeApi";
import Spinner from "@/components/ui/Spinner";
import FilterBike from "@/components/bike/FilterBike";
import { Button } from "@/components/ui/button";
import AddBike from "@/components/bike/AddBike";
import useDecodeToken from "@/hooks/useDecodeToken";

const Bikes = () => {
  const [query, setQuery] = useState({});
  const [clear, setClear] = useState(false);
  const { data, isLoading } = useGetAllBikesQuery(query);
  const  user = useDecodeToken()
console.log(user);
 
  const handleClear = () => {
    setQuery({});
    setClear(!clear);
  };
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        {/* add button */}
        <AddBike />
        {/* filter button */}
        <div className="space-x-1">
          <FilterBike setQuery={setQuery} />
          {Object.keys(query).length !== 0 && (
            <Button
              onClick={handleClear}
              size="sm"
              variant="outline"
              className="rounded-lg"
            >
              X
            </Button>
          )}
        </div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {!data.data.length ? (
            <p className="flex items-center justify-center text-red-500">
              No data Found
            </p>
          ) : (
            data?.data.map((item: any) => (
              <BikeCard
                key={item._id}
                item = {item}
                role={user && user.role}
                
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Bikes;
