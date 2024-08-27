import SectionHeading from "../ui/SectionHeading";

const Milestone = () => {
  const historyMilestones = [
    {
      year: 2022,
      event:
        "RideWave was founded with the vision of making eco-friendly transportation accessible to everyone, starting with a small fleet of bikes in [Your City].",
    },
    {
      year: 2023,
      event:
        "Expanded our operations to multiple cities, doubling our fleet and introducing electric bikes to cater to a wider range of riders.",
    },
    {
      year: 2023,
      event:
        "Reached the milestone of 50,000 rides completed, a testament to the growing popularity of our service.",
    },
    {
      year: 2024,
      event:
        "Launched our mobile app, making it easier than ever for users to find, rent, and ride our bikes on the go.",
    },
    {
      year: 2024,
      event:
        "Received recognition as one of the top sustainable startups in the region, further solidifying our commitment to green transportation.",
    },
    {
      year: "Present Day",
      event:
        "We continue to innovate and expand, with plans to introduce new features and services that enhance the rider experience and promote a sustainable future.",
    },
  ];

  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      <SectionHeading title="Our Milestones" text="" width="w-1/4" />
      <div>
        <p className="text-xl font-semibold mb-5">Our Journey:</p>
        <ul className="space-y-2 list-disc">
          {historyMilestones.map((milestone, index) => (
            <li key={index}>
              <p>
                <span className="font-semibold">{milestone.year}:</span>
                {milestone.event}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Milestone;
