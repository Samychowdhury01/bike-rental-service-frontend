import Lottie from "lottie-react";
import contact from "@/assets/contact-us.json";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import SectionHeading from "../ui/SectionHeading";

const ContactUs = () => {
  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      {/* heading */}
      <SectionHeading
        title="Contact Us"
        text="We're here to help with any questions or support you need. Feel free
          to reach out to us anytime—whether it's for feedback, inquiries, or
          assistance with our services. We're just a message away!"
          width="w-1/6"
      />
      {/* form body */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* form */}
        <div className="flex-1 w-full space-y-5">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Name</Label>
            <Input
              placeholder="Your Name"
              id="name"
              type="text"
              className="placeholder:text-gray-500"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Email</Label>
            <Input
              placeholder="Your Email"
              id="email"
              type="email"
              className="placeholder:text-gray-500"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Message</Label>
            <Textarea
              placeholder="Type your message here."
              className="placeholder:text-gray-500"
            />
          </div>
          <Button>Submit</Button>
        </div>
        {/* image */}
        <div className="flex-1 md:h-[400px] ">
          <Lottie animationData={contact} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
