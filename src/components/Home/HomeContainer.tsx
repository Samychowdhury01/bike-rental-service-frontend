import ChooseUs from "./ChooseUs";
import Coupon from "./Coupon";
import Featured from "./Featured";
import Header from "./Header";
import Testimonials from "./Testimonials";

const HomeContainer = () => {
  return (
    <>
      <Header />
       <Featured />
      <Testimonials />
      <ChooseUs />
     <Coupon />
    </>
  );
};

export default HomeContainer;
