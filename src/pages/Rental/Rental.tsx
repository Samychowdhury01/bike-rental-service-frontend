
import RentalsContainer from "@/components/rentals/RentalsContainer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";


const Rental = () => {
    return (
        <Container>
          <SectionHeading text="" title="Rentals" width="w-1/6"/>  
          <RentalsContainer/>
        </Container>
    );
};

export default Rental;