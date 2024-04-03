"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, text, icon }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex items-stretch justify-center gap-x-5 p-5 rounded-xl border border-red-500 min-h-48 w-full shadow-md"
    >
      <div>{icon}</div>
      <div className="flex flex-col justify-center gap-y-4">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-zinc-700">{text}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
