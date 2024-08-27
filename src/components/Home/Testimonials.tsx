import SectionHeading from "../ui/SectionHeading";
import TestimonialSlide from "./TestimonialSlide";
const Testimonials = () => {
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      {/* heading */}

      <SectionHeading
        title="Testimonials"
        text="  Hear from our satisfied riders in the Testimonials section, where real
          customers share their experiences and stories about their favorite
          rides and the exceptional service they received."
          width="w-1/5"
      />
      {/* slide */}
      <div>
        <TestimonialSlide />
      </div>
    </div>
  );
};

export default Testimonials;
