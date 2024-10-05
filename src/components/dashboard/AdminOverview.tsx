import { useGetDashboardDataQuery } from "@/redux/api/user/userApi";
import Chart from "./Chart";
import TopCard from "./TopCard";
import UserTable from "./UserTable";
import Spinner from "../ui/Spinner";

const AdminOverview = () => {
  const { data, isLoading } = useGetDashboardDataQuery("");

  console.log(data?.data);
  return (
    <>
      {/* card */}
      {isLoading ? (
        <div className="flex items-center justify-center mt-16">
          <Spinner />
        </div>
      ) : (
        <div className="mt-10 space-y-10">
          <div className=" flex items-center justify-between gap-5">
            <TopCard title="Total Users" text={data?.data?.totalUsers} />
            <TopCard title="Total Bikes" text={data?.data?.totalBikes} />
            <TopCard title="Total Bookings" text={data?.data?.totalBookings} />
          </div>
          <div className="flex items-center">
            {/* recent users */}
            <div>
              <h3 className="text-center mb-5 text-2xl text-primary font-semibold">
                Recent Users
              </h3>
              <UserTable users={data?.data?.recentUsers} />
            </div>
            {/* chart */}
            <div className="w-1/3 mx-auto">
              <h3 className="mb-5 text-2xl text-primary font-semibold text-center">
                Total paid Users
              </h3>
              <Chart
                amount={data?.data?.averagePaidBookings}
                from={data?.data?.totalBookings}
                type="users"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminOverview;