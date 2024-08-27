import SectionHeading from "../ui/SectionHeading";

const Mission = () => {
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      {/* heading */}
      <SectionHeading title="Our Mission" text="" width="w-1/6" />
      {/* body */}
      <div>
        <div></div>
        <div className="space-y-5">
          <p>
            At RideWave, our mission is to be a catalyst for positive change,
            empowering individuals and businesses alike by delivering
            exceptional bike rental service. We believe that true empowerment
            comes from providing the tools and resources that allow people to
            unlock their full potential, both personally and professionally.
          </p>

          <p>
            Our commitment to innovation drives us to continuously explore new
            ideas, embrace emerging technologies, and develop cutting-edge
            solutions that meet the ever-evolving needs of our users. We
            understand that trust is the cornerstone of any successful
            relationship, and we work diligently to earn and maintain that trust
            by being transparent, reliable, and consistently delivering on our
            promises.
          </p>
        </div>
      </div>
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

export default Mission;
