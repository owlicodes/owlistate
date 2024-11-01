import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I start the home buying process?",
      answer:
        "To start the home buying process, first determine your budget and get pre-approved for a mortgage. Then, research areas you're interested in, find a real estate agent, and start viewing properties that meet your criteria.",
    },
    {
      question:
        "What is the difference between a fixed-rate and adjustable-rate mortgage?",
      answer:
        "A fixed-rate mortgage has an interest rate that remains the same for the entire loan term. An adjustable-rate mortgage (ARM) has an interest rate that can change periodically based on market conditions, usually after an initial fixed period.",
    },
    {
      question: "How much down payment do I need to buy a home?",
      answer:
        "The down payment required can vary depending on the type of mortgage and your financial situation. Conventional loans typically require 3-20% down, while FHA loans may allow for as little as 3.5% down. Some VA and USDA loans offer 0% down payment options for eligible buyers.",
    },
    {
      question: "What is a home inspection and why is it important?",
      answer:
        "A home inspection is a thorough examination of a property's condition by a qualified professional. It's important because it can reveal potential issues or necessary repairs, helping you make an informed decision about the purchase and potentially negotiate repairs or price adjustments.",
    },
    {
      question: "How long does the home buying process usually take?",
      answer:
        "The home buying process typically takes 30-60 days from offer acceptance to closing, but it can vary depending on factors such as financing, inspections, and negotiations. The search for the right home can take additional time and varies for each buyer.",
    },
    {
      question: "What are closing costs and who pays them?",
      answer:
        "Closing costs are fees associated with finalizing a real estate transaction, including lender fees, title insurance, appraisals, and more. They typically range from 2-5% of the home's purchase price. Both buyers and sellers usually pay some closing costs, but the exact split can be negotiated.",
    },
  ];

  return (
    <Card className="mx-auto w-full max-w-5xl shadow-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
