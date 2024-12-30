/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDashboardDataQuery } from "@/redux/api/user/userApi";
import Spinner from "../ui/Spinner";
import TopCard from "./TopCard";
import Chart from "./Chart";
import BikesTable from "./BikesTable";

const UserOverview = () => {
  const { data, isLoading } = useGetDashboardDataQuery("");

  const ReturnedBikes = data?.data?.bookings?.filter(
    (booking) => booking?.isReturned
  ).length;

  return (
    <>
      {/* card */}
      {isLoading ? (
        <div className="flex items-center justify-center mt-16">
          <Spinner />
        </div>
      ) : (
        <div className="mt-10 space-y-16">
          <div className=" flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="w-full">
              <TopCard
                title="Total Spent"
                text={`${data?.data?.spentAmounts}$`}
              />
            </div>
            <div className="w-full">
              <TopCard title="Total Ride Hour" text={data?.data?.hours} />
            </div>
            <div className="w-full">
              <TopCard
                title="Average Costing"
                text={`${data?.data?.averageCostPerHour}$`}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center overflow-x-scroll md:overflow-x-hidden">
            {/* recent users */}
            <div>
              <h3 className="text-center mb-5 text-xl md:text-2xl text-primary font-semibold">
                Recent Rented Bikes
              </h3>

              <BikesTable bikes={data?.data?.bookings} />
            </div>
            {/* chart */}
            <div className="w-2/3 lg:w-1/3 mx-auto">
              <h3 className="mb-5 text-xl md:text-2xl text-primary font-semibold text-center">
                Total Returned Bikes
              </h3>
              <Chart
                amount={ReturnedBikes}
                from={(data?.data?.bookings as any)?.length || 100}
                type="bikes"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserOverview;
