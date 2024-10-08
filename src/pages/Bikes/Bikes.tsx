/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import BikeCard from "@/components/ui/BikeCard";
import { useGetAllBikesQuery } from "@/redux/api/bike/bikeApi";
import Spinner from "@/components/ui/Spinner";
import FilterBike from "@/components/bike/FilterBike";
import { Button } from "@/components/ui/button";
import AddBike from "@/components/bike/AddBike";
import useDecodeToken from "@/hooks/useDecodeToken";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const Bikes = () => {
  const [query, setQuery] = useState({});
  const [clear, setClear] = useState(false);
  const { data, isLoading } = useGetAllBikesQuery(query);
  const user: any = useDecodeToken();
  console.log();
  const handleClear = () => {
    setQuery({});
    setClear(!clear);
  };
  return (
    <Container>
      <SectionHeading title="Bikes" text="" width="w-1/12" />
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          {/* add button */}
          {user?.role === "admin" && <AddBike />}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {!data.data.length ? (
              <p className="flex items-center justify-center text-red-500">
                No data Found
              </p>
            ) : (
              data?.data.map((item: any) => (
                <BikeCard
                  key={item._id}
                  item={item}
                  role={user && user?.role}
                />
              ))
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Bikes;
