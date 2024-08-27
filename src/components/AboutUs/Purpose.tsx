import SectionHeading from "../ui/SectionHeading";

const Purpose = () => {
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      {/* heading */}
      <SectionHeading title="Our Purpose" text="" width="w-1/6" />
      <div>
        <p className="mb-5">
          At RideWave, our purpose is to create a seamless and impactful
          experience for our users. We are committed to:
        </p>
        <ul className="space-y-2 list-disc">
          <li>
            <p>
              <span className="font-semibold">Innovation:</span> Continuously
              improving our platform to meet evolving needs.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Integrity:</span> Building trust
              through transparency and honesty in all our interactions.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Excellence:</span> Delivering
              top-notch quality in every aspect of our service.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Community:</span> Cultivating a
              supportive and engaged community around our platform.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Purpose;
