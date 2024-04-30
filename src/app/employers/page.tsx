"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import FlightAttendantForm from "@/components/form/FlightAttendantForm";
import Link from "next/link";
import EmployerForm from "@/components/form/EmployerForm";

const EmployersPage = () => {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-start gap-12 md:gap-24 py-12 px-8 md:px-16 lg:px-32 bg-zinc-900 text-zinc-50">
        <h1 className="mb-12 text-4xl font-semibold text-center">Employers</h1>
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
              Tailored excellence
            </h2>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-md">
                At Avenzu, we understand that every aircraft and owner has
                specific needs and requirements, therefore our key focus is to
                ensure that our staff are a perfect fit for their aviation
                placements. Through this attention to detail, we've created a
                service that keeps both our clients and our crew satisfied and
                comfortable.
              </p>
              <p className="text-md">
                We are very aware that reputation goes a long way, so we pride
                ourselves in our business conduct and are confident in the
                candidates we endorse. We strive to go above and beyond,
                ensuring that through us employers have access to a multitude of
                quality candidates across the aviation industry We also offer
                additional services such as handling VIP jet cabin outfitting
                and support, keeping all your personal requirements in mind and
                leaving no detail unattended.
              </p>
              <button className="bg-red-500 text-zinc-50 hover:brightness-125 transition duration-200 rounded-lg p-2 mt-6 w-full lg:w-1/2">
                <Link href="#">Candidate database</Link>
              </button>
            </div>
          </div>
          <div className="w-3/4 lg:w-1/2 h-[400px] md:h-[500px] relative">
            <Image
              src={"/employers.jpg"}
              fill={true}
              className="rounded-2xl shadow-xl"
              alt="Gulfstream interior"
            />
          </div>
        </motion.div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-start py-12 px-8 md:px-16 lg:px-32 relative h-[56rem] md:h-[40rem]">
        <EmployerForm />
      </section>

      <section className="bg-black min-w-screen h-[800px] bg-[url('../../public/gulfstream-sun.jpg')] bg-no-repeat bg-cover bg-fixed bg-center shadow-blackGulf"></section>
    </main>
  );
};

export default EmployersPage;
