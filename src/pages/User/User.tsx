import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import UserTable from "@/components/user/UserTable";


const User = () => {
  return (
    <Container>
      <SectionHeading title="User Management" width="w-1/3" text="" />
      <div>
        <UserTable/>
      </div>
    </Container>
  );
};

export default User;
