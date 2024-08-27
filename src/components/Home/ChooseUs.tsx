import selection from "@/assets/selection.json";
import support from "@/assets/support.json";
import Lottie from "lottie-react";
import SectionHeading from "../ui/SectionHeading";
const ChooseUs = () => {
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      {/* heading */}
      <SectionHeading
        title="Why Choose Us"
        text=" Discover what sets us apart in the Why Choose Us section, where we
          highlight our commitment to quality, exceptional service, and a
          passion for providing the best biking experience tailored to your
          needs."
          width="w-1/4"
      />
      {/* body */}
      <div className="space-y-5 mt-5">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* details */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-bold">Wide Selection</h2>
            <ul className="space-y-3 mt-5 list-disc ml-4">
              <li>
                <span className="font-semibold">Extensive Range:</span> Choose
                from a vast collection of bikes, including road, mountain,
                hybrid, and electric options.
              </li>
              <li>
                <span className="font-semibold">Top Brands:</span> We carry
                bikes from leading brands, ensuring you have access to the best
                in the market.
              </li>
              <li>
                <span className="font-semibold">Customization Options:</span>
                Personalize your ride with various accessories and upgrades
                tailored to your preferences.
              </li>
            </ul>
          </div>
          {/* image container */}
          <div className="flex-1">
            <Lottie
              animationData={selection}
              loop={true}
              className="h-[400px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {/* image container */}
          <div className="flex-1">
            <Lottie
              animationData={support}
              loop={true}
              className="h-[400px] w-full"
            />
          </div>
          {/* details */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-bold">Excellent Customer Service</h2>
            <ul className="space-y-3 mt-5 list-disc ml-4">
              <li>
                <span className="font-semibold">Expert Support:</span> Our
                knowledgeable staff is ready to assist you with any questions or
                needs, ensuring you find the perfect bike.
              </li>
              <li>
                <span className="font-semibold">Easy Returns:</span> Hassle-free
                return policy for a smooth shopping experience.
              </li>
              <li>
                <span className="font-semibold">After-Sales Service:</span> We
                offer comprehensive maintenance and support to keep your bike in
                top condition long after your purchase.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
