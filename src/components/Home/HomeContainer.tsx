import Container from "../ui/Container";
import ChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import Coupon from "./Coupon";
import FaqSection from "./FaqSection";
import Featured from "./Featured";
import Header from "./Header";
import Partner from "./Partner";
import Testimonials from "./Testimonials";

const HomeContainer = () => {
  return (
    <>
      <Header />
      <Container>
        <Featured />
        <Testimonials />
        <ChooseUs />
        <Coupon />
        <Partner />
        <FaqSection />
        <ContactUs />
      </Container>
    </>
  );
};

export default HomeContainer;
