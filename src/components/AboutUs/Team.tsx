import person1 from "@/assets/team/1.jpg";
import person2 from "@/assets/team/2.png";
import person3 from "@/assets/team/3.jpg";
import person4 from "@/assets/team/4.jpg";
import SectionHeading from "../ui/SectionHeading";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Team = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      position: "Developer",
      image: person1,
    },
    {
      id: 2,
      name: "Clarence L. Baker",
      position: "Marketing Head",
      image: person2,
    },
    {
      id: 3,
      name: "William B.",
      position: "Manager",
      image: person3,
    },
    {
      id: 4,
      name: "Robyn A.",
      position: "Security Specialist",
      image: person4,
    },
  ];
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      <SectionHeading title="Meet Our Team" text="" width="w-1/4" />

      <div className="flex flex-col md:flex-row items-center justify-between space-y-5">
      {data.map((person) => (
          <Card key={person.id} className="md:w-[300px] mt-5">
            <CardHeader>
              <div className="md:h-[250px] w-full mb-[6px]">
                <img
                  src={person.image}
                  alt=""
                  className="object-fill h-full w-full rounded-md shadow-md"
                />
              </div>
              <CardTitle className="text-lg">{person.name}</CardTitle>
              <CardDescription className="text-black">
                {person.position}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
       
      </div>
    </div>
  );
};

export default Team;
