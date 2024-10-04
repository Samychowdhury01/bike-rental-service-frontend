import SectionHeading from "../ui/SectionHeading";
import faq from "@/assets/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Lottie from "lottie-react";

const FaqSection = () => {
  const faqs = [
    {
      value: "item-1",
      question: "How do I rent a bike?",
      answer:
        "Simply choose your preferred bike, select the rental duration, and complete the payment process online. You'll receive a confirmation with pickup details.",
    },
    {
      value: "item-2",
      question: "What are the rental rates?",
      answer:
        "Our rates vary depending on the bike type and rental duration. You can view detailed pricing on the rental page before confirming your booking.",
    },
    {
      value: "item-3",
      question: "Do I need to bring any documents?",
      answer:
        "Yes, you’ll need to present a valid ID at the time of bike pickup to verify your booking.",
    },
    {
      value: "item-5",
      question: "What happens if the bike gets damaged?",
      answer:
        "If the bike gets damaged, please notify us immediately. Depending on the extent of the damage, charges may apply as per our damage policy.",
    },
  ];

  return (
    <div className="space-y-5 mt-16 p-5 md:p-0">
      <SectionHeading
        title="Frequently Asked"
        text="Check out our FAQs for quick answers on rental processes, pricing, and more!"
        width="w-32 md:w-1/4"
      />
      <div className="flex flex-col-reverse md:flex-row items-center">
        <Accordion type="single" collapsible className="flex-1">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={faq.value}>
              <AccordionTrigger>{faq?.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex-1">
          <Lottie animationData={faq} loop={true} className="h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
