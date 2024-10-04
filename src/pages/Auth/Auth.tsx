import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "../../components/Auth/Login";
import SignUp from "../../components/Auth/SignUp";
import { useState } from "react";
import Lottie from "lottie-react";
import login from "@/assets/login.json";
import Container from "@/components/ui/Container";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div>
            <Lottie animationData={login} loop={true} className="w-[400px]" />
          </div>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-[400px]"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signUp">Sign-up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Login />
            </TabsContent>
            <TabsContent value="signUp">
              <SignUp setActiveTab={setActiveTab} />
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default Auth;
