import { useKeenSlider } from "keen-slider/react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import "keen-slider/keen-slider.min.css";
const TestimonialSlide = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  return (
    <div className="bg-secondary p-5 md:p-0">
      <div
        ref={sliderRef}
        className="keen-slider md:h-96 bg-transparent  mb-24 p-2 rounded-xl shadow-2xl"
      >
        {/* slides */}
        <div className="keen-slider__slide number-slide1 flex items-center justify-center text-center">
          <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
              "MelodyMakers Academy offers guitar lessons that are simply
              exceptional. The instructors possess remarkable talent and
              expertise, guiding students with patience and enthusiasm. The
              practice rooms are well-equipped with high-quality instruments,
              creating an ideal learning environment."
            </p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Rating style={{ maxWidth: 100 }} value={4} readOnly />
              <span>{4.0}</span>
            </div>
            <h3 className="font-bold">- Sarah</h3>
          </div>
        </div>
        {/* slides */}
        <div className="keen-slider__slide number-slide1 flex items-center justify-center text-center">
          <div className="md:w-1/2 p-8 md:p-0">
            <p className="mb-2">
              "MelodyMakers Academy offers guitar lessons that are simply
              exceptional. The instructors possess remarkable talent and
              expertise, guiding students with patience and enthusiasm. The
              practice rooms are well-equipped with high-quality instruments,
              creating an ideal learning environment."
            </p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Rating style={{ maxWidth: 100 }} value={4} readOnly />
              <span>{4.0}</span>
            </div>
            <h3 className="font-bold">- Sarah</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
