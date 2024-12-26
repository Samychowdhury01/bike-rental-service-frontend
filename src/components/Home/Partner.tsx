import img1 from "@/assets/partners/1.png";
import img2 from "@/assets/partners/2.png";
import img3 from "@/assets/partners/3.jpeg";
import img4 from "@/assets/partners/4.png";
import img5 from "@/assets/partners/5.png";
import img6 from "@/assets/partners/6.png";

import SectionHeading from "../ui/SectionHeading";

const Partner = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      <SectionHeading
        title="Brand Partners"
        text="We’re proud to collaborate with industry-leading brands. Together, we deliver exceptional bike rental services. Explore the logos below to see our trusted partners."
        width="w-1/4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center md:gap-0">
        {images.map((img, index) => (
          <div className="w-48 h-56 md:h-32 mx-auto" key={index}>
            <img
              src={img}
              alt="partner"
              className="partner-img object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
