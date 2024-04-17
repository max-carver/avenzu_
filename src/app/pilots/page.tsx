"use client";

import PilotForm from "@/components/form/PilotForm";
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
          className="flex items-center md:flex-row flex-col justify-between gap-12 w-full text-center md:text-start"
        >
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h2 className="text-2xl font-medium">
              Your path to the perfect assignment
            </h2>
            <p className="text-md">
              At Avenzu we understand the hurdles that pilots face within the
              aviation industry, therefore it is our key objective to match you
              with the perfect full-time, part-time or temporary assignment. We
              trust you will find our recruitment process fast and easy-to-use,
              and we look forward to receiving your application form to start
              your aviation journey with us.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[350px] relative">
            <Image
              src={"/pilot.jpg"}
              fill={true}
              objectFit="cover"
              objectPosition="center"
              className="rounded-2xl shadow-xl"
              alt="Pilot"
            />
          </div>
        </motion.div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-start py-12 px-8 md:px-16 lg:px-32 relative h-[56rem] md:h-[48rem]">
        <h2 className="text-3xl font-medium mb-6 text-center">Apply now</h2>
        <PilotForm />
      </section>

      <section className="bg-black min-w-screen h-[800px] bg-[url('../../public/gulfstream-sun.jpg')] bg-no-repeat bg-cover bg-fixed bg-center shadow-blackGulf"></section>
    </main>
  );
};

export default PilotsPage;
