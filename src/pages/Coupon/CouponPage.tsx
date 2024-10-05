import AddCoupon from "@/components/coupon/AddCoupon";
import CouponTable from "@/components/coupon/CouponTable";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const CouponPage = () => {
  return (
    <Container>
      <SectionHeading title="Coupons" width="w-1/6" text="" />
      <div>
        <AddCoupon />
        <CouponTable />
      </div>
    </Container>
  );
};

export default CouponPage;
