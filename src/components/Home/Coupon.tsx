import WheelComponent from "./WheelComponent";

const Coupon = () => {
  return (
    <div className="p-5 md:p-0">
      {/* Heading section */}
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl text-primary font-semibold">Coupon</h1>
        <div className="bg-secondary h-2 w-16 md:w-32 mx-auto rounded-full mb-5"></div>
        {/* description */}
        <p className="md:w-1/2 mx-auto mb-5">
          Unlock exclusive savings with our limited-time coupons! Grab your
          discount now and enjoy unbeatable deals on your next ride.
        </p>
      </div>
      {/* Wheel */}
      <WheelComponent />
      {/* Usage */}
      <div >
        <h2 className="text-3xl font-semibold">How to use: </h2>
        <p>
          When the wheel stops spinning and lands on a discount, a pop-up modal
          will appear, revealing your exclusive coupon code. This code is your
          key to savings, and we've made it incredibly simple to use. Just click
          the 'Copy' button within the modal, and your coupon code will be
          instantly copied to your clipboard. You can then paste it at checkout
          to enjoy your discount and make the most of your RideWave experience.
          Don't miss out on these exclusive offers—spin, save, and ride!
        </p>
      </div>
    </div>
  );
};

export default Coupon;
