import TestimonialSlide from "./TestimonialSlide";
const Testimonials = () => {
  return (
    <div className="space-y-5 mt-16">
      {/* heading */}
      <div className="text-center ">
        <h1 className="text-5xl text-primary font-semibold">Testimonials</h1>
        <div className="bg-secondary h-2 w-1/5 mx-auto rounded-full mb-5"></div>
        {/* description */}
        <p className="w-1/2 mx-auto">
          Hear from our satisfied riders in the Testimonials section, where real
          customers share their experiences and stories about their favorite
          rides and the exceptional service they received.
        </p>
      </div>
      {/* slide */}
      <div>
        <TestimonialSlide/>
      </div>
    </div>
  );
};

export default Testimonials;
