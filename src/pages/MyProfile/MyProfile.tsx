import { useEffect, useState } from "react";
import { getRandomColor } from "@/utils/getRandomColor";
import Container from "@/components/ui/Container";
import image from "@/assets/profile.png";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "@/redux/api/user/userApi";
const MyProfile = () => {
  const [css, setCss] = useState(getRandomColor());
  const { data } = useGetProfileQuery("");
  console.log(data?.data);
  // Change gradient when the component mounts
  useEffect(() => {
    setCss(getRandomColor());
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      <Container>
        <div className="lg:w-1/2 mx-auto">
          <SectionHeading title="Profile" text="" width="w-28" />
          <div className="space-y-5 mb-16 p-5  shadow-lg rounded-md">
            {/* profile and image part */}
            <div className="relative mb-10">
              {/* banner */}
              <div
                style={{ background: css }}
                className="h-40 rounded-xl"
              ></div>
              {/* profile image */}
              <div className="bg-accent rounded-full h-[100px] w-[100px] flex items-center justify-center border-4 absolute -bottom-10 left-5">
                <div className="w-[70px]">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* name */}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {data?.data?.name}
              </h1>
              <p>
                <span className="md:text-lg font-semibold mr-2">Address:</span>
                {data?.data?.address}
              </p>
              <p>
                <span className="md:text-lg  font-semibold mr-2">Email:</span>
                {data?.data?.email}
              </p>
              <p>
                <span className="md:text-lg font-semibold mr-2">
                  Phone No.:
                </span>
                {data?.data?.phone}
              </p>
              <Button size="lg" className="">
                <Link to="/dashboard/profile">Edit</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProfile;
