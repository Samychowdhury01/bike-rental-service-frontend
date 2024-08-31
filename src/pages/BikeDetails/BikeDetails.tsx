import SectionHeading from "@/components/ui/SectionHeading";
import { useParams } from "react-router-dom";
import { useGetSingleBikeQuery } from "@/redux/api/bike/bikeApi";
import BikeDetailsContainer from "@/components/BikeDetails/BikeDetailsContainer";

const BikeDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBikeQuery(id);

  return (
    <>
      <SectionHeading text="" title="Bike Details" width="w-1/6" />
      {data && (
        <BikeDetailsContainer data={data?.data}/>
      )}
    </>
  );
};

export default BikeDetails;
