/* eslint-disable @typescript-eslint/no-explicit-any */

import BookNow from "./BookNow";
import useIsUserExist from "@/hooks/useIsUserExist";
import useDecodeToken from "@/hooks/useDecodeToken";

const BikeDetailsContainer = ({ data }) => {
  const isUserExist = useIsUserExist();
  const user : any = useDecodeToken();
  const bookingInfo = {
    bikeId: data._id,
    isUserExist,
    userId: user.userId,
    isAvailable: data.isAvailable,
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-around mt-10 space-y-5">
      <div className="md:w-[400px]">
        <img src={data?.image} alt="" className="object-contain w-full h-full" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-5">Bike Details:</h3>
        <div className="space-y-5 mb-5">
          <p>
            <span className="font-semibold mr-2">Name:</span> {data.name}
          </p>
          <p>
            <span className="font-semibold mr-2">Bike Description:</span>
            {data?.description}
          </p>
          <p>
            <span className="font-semibold mr-2">Brand:</span> {data?.brand}
          </p>
          <p>
            <span className="font-semibold mr-2">Model:</span> {data?.model}
          </p>
          <p>
            <span className="font-semibold mr-2">CC:</span> {data?.cc}
          </p>
          <p>
            <span className="font-semibold mr-2">Year:</span> {data?.year}
          </p>
          <p>
            <span className="font-semibold mr-2">Price Per Hour:</span>
            {data?.pricePerHour} BDT
          </p>
          <p>
            <span className="font-semibold mr-2">Available:</span>
            {data?.isAvailable ? "Available" : "Not Available"}
          </p>
        </div>
        <div>
          <BookNow bookingInfo={bookingInfo} />
        </div>
        {!isUserExist && !data.isAvailable && (
          <p className="text-red-500 font-semibold mt-5">
            You need to login first to book the bike!
          </p>
        )}
        {/* {!data.isAvailable && (
          <p className="text-red-500 font-semibold mt-5">
            This bike is not Available for rent
          </p>
        )} */}
      </div>
    </div>
  );
};

export default BikeDetailsContainer;
