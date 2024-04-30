"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import FlightAttendantForm from "@/components/form/FlightAttendantForm";

const FlightAttendantsPage = () => {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-start gap-12 md:gap-24 py-12 px-8 md:px-16 lg:px-32 bg-zinc-900 text-zinc-50">
        <h1 className="mb-12 text-4xl font-semibold text-center">
          Flight attendants
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.2,
            delay: 0.3,
            stiffness: 100,
          }}
          className="flex items-center md:flex-row flex-col justify-between gap-12 md:gap-8 w-full text-center md:text-start -mt-24"
        >
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mt-6 md:m-0">
              Unparalleled guidance and mentorship
            </h2>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-md">
                Avenzu is incomparable when it comes to the aviation industry,
                what sets us apart is our focus on matching our exceptional crew
                with the perfect aviation operator.
              </p>
              <p className="text-md">
                We provide you with specific guidance and insight into each
                operator and their personal needs, including tailored personal
                mentorship to equip you for each placement. With us we walk your
                aviation journey together, during every step whether it be
                permanent or freelance placement we will support you.
              </p>
            </div>
          </div>
          <div className="w-3/4 md:w-1/2 lg:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] relative">
            <Image
              src={"/attendant2.jpg"}
              fill={true}
              className="rounded-2xl shadow-xl"
              alt="Flight attendant"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.1,
            stiffness: 60,
          }}
          className="flex items-center md:flex-row-reverse flex-col justify-between gap-12 w-full text-center md:text-start"
        >
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold">Mentorship Programme</h2>
            <p className="text-md">
              The Avenzu mentorship programme is a 5 module course that, upon
              completeion, you will be contacted by our recruitment specialist
              and become part of our database to be considered for the latest
              job opportunities.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 h-[300px] lg:h-[500px] relative">
            <Image
              src={"/attendant.jpg"}
              fill={true}
              className="rounded-2xl shadow-xl"
              alt="Mentoring flight attendant"
            />
          </div>
        </motion.div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-start py-12 px-8 md:px-16 lg:px-32 relative h-[64rem] md:h-[48rem]">
        <h2 className="text-3xl font-medium mb-6 text-center">Apply now</h2>
        <FlightAttendantForm />
      </section>

      <section className="bg-black min-w-screen h-[800px] bg-[url('../../public/gulfstream-sun.jpg')] bg-no-repeat bg-cover bg-fixed bg-center shadow-blackGulf"></section>
    </main>
  );
};

export default FlightAttendantsPage;
