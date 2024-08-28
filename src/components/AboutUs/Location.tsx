import Lottie from "lottie-react";
import SectionHeading from "../ui/SectionHeading";
import location from '@/assets/location.json'

const Location = () => {
  return (
  <div  className="space-y-5 mt-16 p-5 md:p-0">
  <SectionHeading title="Our Location" text="" width="w-1/6"/>
    <div className="flex flex-col md:flex-row items-center justify-around space-y-5">
      {/* image container */}
      <div>
        <Lottie animationData={location} loop={true} className="md:w-[500px]"/>
      </div>
      {/* details container */}
      <div className="space-y-2">
        <p>We'd love to hear from you! Reach out to us at:</p>
        <div>
          <h3 className="font-semibold">Office Address:</h3>
          <p> Kalatali Junction , Cox's Bazar, Chittagong</p>
        </div>
        <div>
          <h3 className="font-semibold">Phone No.:</h3>
          <p> +880187600221</p>
        </div>
        <div>
          <h3 className="font-semibold">Email:</h3>
          <p> hello@ridewave.com</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Location;
