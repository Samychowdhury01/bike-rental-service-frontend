import Lottie from "lottie-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import success from '@/assets/success.json'
import { Button } from "@/components/ui/button";

const SuccessPayment = () => {
  const navigate = useNavigate();

    // useEffect(() => {
    //   const referrer = document.referrer;
    //   const expectedReferrer = "https://sandbox.aamarpay.com/payment_page.php";

    //   if (referrer !== expectedReferrer) {
    //     navigate("/"); // Redirect to home if the referrer doesn't match
    //   }
    // }, [navigate]);

  // Render the component if the referrer is valid
  return (
    <div className="flex items-center justify-center">
      <div className="p-5 shadow-2xl rounded-md">
        <div>
            <Lottie animationData={success} loop={true} className="w-[300px]"/>
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold">Congratulations!!</h2>
          <p>Your booking is Confirmed.</p>
          <Button>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>

      </div>
    </div>
  );
};
export default SuccessPayment;
