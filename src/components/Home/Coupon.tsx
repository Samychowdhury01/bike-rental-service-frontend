import SectionHeading from "../ui/SectionHeading";
import WheelComponent from "./WheelComponent";

const Coupon = () => {
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      <div>
        {/* Heading section */}
        <SectionHeading
          title="Coupon"
          text="Unlock exclusive savings with our limited-time coupons! Grab your
          discount now and enjoy unbeatable deals on your next ride."
          width="w-16 md:w-32"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center">
        {/* Usage */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">How to use: </h2>
          <p>
            When the wheel stops spinning and lands on a discount, a pop-up
            modal will appear, revealing your exclusive coupon code. This code
            is your key to savings, and we've made it incredibly simple to use.
            Just click the 'Copy' button within the modal, and your coupon code
            will be instantly copied to your clipboard. You can then paste it at
            checkout to enjoy your discount and make the most of your RideWave
            experience. Don't miss out on these exclusive offers—spin, save, and
            ride!
          </p>
        </div>
        <div className="flex-1">
          {/* Wheel */}
          <WheelComponent />
        </div>
      </div>
    </div>
  );
};

export default Coupon;
