import errorAnimation from "@/assets/error.json";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-20">
      <div className="md:w-2/3">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold md:text-2xl text-primary mb-12">
          Oops! Something went wrong. The page you're looking for doesn't exist.
          Please check the URL or return to the homepage. Sorry for the
          inconvenience!
        </p>
        <Button>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
