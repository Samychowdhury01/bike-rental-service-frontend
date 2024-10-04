import SectionHeading from "@/components/ui/SectionHeading";
import { useParams } from "react-router-dom";
import { useGetSingleBikeQuery } from "@/redux/api/bike/bikeApi";
import BikeDetailsContainer from "@/components/BikeDetails/BikeDetailsContainer";
import Container from "@/components/ui/Container";

const BikeDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBikeQuery(id);

  return (
    <Container>
      <SectionHeading text="" title="Bike Details" width="w-1/6" />
      {data && (
        <BikeDetailsContainer data={data?.data}/>
      )}
    </Container>
  );
};

export default BikeDetails;
