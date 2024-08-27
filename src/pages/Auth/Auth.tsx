import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
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
    </>
  );
};

export default Auth;
