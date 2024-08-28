import { useAppSelector } from "@/redux/hook";
import userImg from "@/assets/profile.png";
const Welcome = () => {
  const { user } = useAppSelector((state) => state.userInfo);
  const date = new Date(); // Month is 0-indexed, so 8 is September
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-muted flex justify-between p-5 rounded-md shadow-lg shadow-secondary">
      <div>
        <p>{formattedDate}</p>
        <div className="mt-10">
          <h3 className="text-3xl text-primary font-semibold">
            Welcome back, {user.username}{" "}
          </h3>
          <p>Thank you for choosing us!</p>
        </div>
      </div>
      <div className="">
        <img src={userImg} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
