"use client";

import { PilotForm } from "@/components/PilotForm";
import { motion } from "framer-motion";
import Image from "next/image";

const PilotsPage = () => {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-start py-12 px-8 md:px-16 lg:px-32 bg-zinc-900 text-zinc-50">
        <h1 className="mb-12 text-4xl font-semibold text-center">Pilots</h1>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.2,
            delay: 0.3,
            stiffness: 100,
          }}
          className="flex items-center justify-between gap-x-12 w-full"
        >
          <div className="flex flex-col gap-y-4 w-1/2">
            <h2 className="text-2xl font-medium">
              Your path to the perfect assignment
            </h2>
            <p className="text-sm">
              At Avenzu we understand the hurdles that pilots face within the
              aviation industry, therefore it is our key objective to match you
              with the perfect full-time, part-time or temporary assignment. We
              trust you will find our recruitment process fast and easy-to-use,
              and we look forward to receiving your application form to start
              your aviation journey with us.
            </p>
          </div>
          <Image
            src={"/pilot.jpg"}
            width={500}
            height={800}
            alt="Pilot"
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-start py-12 px-8 md:px-16 lg:px-32 relative h-[24rem]">
        <h2 className="text-3xl font-medium mb-6 text-center">Apply now</h2>
        <PilotForm />
      </section>

      <section className="bg-black min-w-screen h-screen bg-[url('../../public/gulfstream-sun.jpg')] bg-no-repeat bg-cover bg-fixed bg-center shadow-blackGulf"></section>
    </main>
  );
};

export default PilotsPage;
