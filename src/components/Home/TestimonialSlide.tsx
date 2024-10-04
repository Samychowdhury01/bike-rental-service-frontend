import { useKeenSlider } from "keen-slider/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "keen-slider/keen-slider.min.css";
const TestimonialSlide = () => {
  const reviews = [
    {
      name: "Alice M.",
      description: "Fantastic service! The bikes are in excellent condition, and the rental process was super smooth. Highly recommend RideWave for a hassle-free experience.",
      rating: 5.0,
    },
    {
      name: "John D.",
      description: "Great bikes and friendly staff. The only issue I had was with the availability of certain models. Otherwise, a solid experience!",
      rating: 4.5,
    },
    {
      name: "Sophie R.",
      description: "The prices are reasonable, and the bikes are well-maintained. However, I had a slight delay in the return process due to a system error.",
      rating: 4.0,
    },
    {
      name: "Michael T.",
      description: "I had an amazing time exploring the city on a RideWave bike! The booking process was seamless, and the customer service was top-notch.",
      rating: 5.0,
    },
    {
      name: "Emily K.",
      description: "The bike was good, but I found the rental cost a bit high compared to other services. Overall, a decent experience.",
      rating: 3.5,
    }
  ];
  

  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  return (
    <div className="md:bg-muted rounded-xl">
      <div
        ref={sliderRef}
        className="keen-slider md:h-96 bg-muted md:bg-transparent  mb-24 p-2 rounded-xl shadow-2xl"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="keen-slider__slide number-slide1 flex items-center justify-center text-center"
          >
            <div className="md:w-1/2 p-8 md:p-0">
              <p className="mb-2">"{review.description}"</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rating style={{ maxWidth: 100 }} value={4} readOnly />
                <span>{review.rating}</span>
              </div>
              <h3 className="font-bold">- {review.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlide;
