import SectionHeading from "@/components/ui/SectionHeading";
import UserTable from "@/components/user/UserTable";


const User = () => {
  return (
    <>
      <SectionHeading title="User Management" width="w-1/3" text="" />
      <div>
        <UserTable/>
      </div>
    </>
  );
};

export default User;
