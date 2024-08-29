import ChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import Coupon from "./Coupon";
import Featured from "./Featured";
import Header from "./Header";
import Testimonials from "./Testimonials";

const HomeContainer = () => {
  return (
    <>
      <Header />
       {/* <Featured /> */}
      <Testimonials />
      <ChooseUs />
     <Coupon />
     <ContactUs/>
    </>
  );
};

export default HomeContainer;
