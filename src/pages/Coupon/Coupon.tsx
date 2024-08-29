import AddCoupon from "@/components/coupon/AddCoupon";
import CouponTable from "@/components/coupon/CouponTable";
import SectionHeading from "@/components/ui/SectionHeading";

const Coupon = () => {
  return (
    <>
      <SectionHeading title="Coupons" width="w-1/6" text="" />
      <div>
        <AddCoupon />
        <CouponTable />
      </div>
    </>
  );
};

export default Coupon;
