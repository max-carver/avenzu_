"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

const FAQAccordion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-medium mb-5">Frequently asked questions</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How can I apply as a candidate?</AccordionTrigger>
          <AccordionContent className="text-sm mb-5">
            You can easily apply on our website by filling out our application
            form.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How do you match candidates with aviation placements?
          </AccordionTrigger>
          <AccordionContent className="text-sm mb-5">
            We use a meticulous matching process that considers the unique needs
            of both our clients and candidates to ensure a perfect fit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What makes Avenzu different from other recruitment agencies??
          </AccordionTrigger>
          <AccordionContent className="text-sm mb-5">
            We prioritize personalized service, professionalism, and attention
            to detail to ensure a seamless experience for both clients and
            candidates.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Is Avenzu only for experienced crew, or can aspiring candidates join
            as well?
          </AccordionTrigger>
          <AccordionContent className="text-sm mb-5">
            Candidates from all levels of experience are welcome to apply
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default FAQAccordion;
