"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CandidatesPage = () => {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center gap-12 md:gap-24 py-12 px-8 md:px-16 lg:px-32 text-zinc-900 bg-zinc-50">
        <h1 className="md:-mt-24 mb-12 text-4xl font-semibold text-center">
          Candidates
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
          className="flex items-center md:flex-row flex-col justify-center gap-12 md:gap-16 w-full text-center md:text-start "
        >
          <Link
            href="/flight-attendants/candidates"
            className="flex items-center justify-center w-full p-3 h-24 rounded-xl border bg-red-500 active:scale-95 transition duration-200 shadow-xl hover:brightness-110"
          >
            <h3 className="uppercase text-center font-semibold text-xl text-zinc-50">
              View flight attendants
            </h3>
          </Link>
          <Link
            href="/pilots/candidates"
            className="flex items-center justify-center w-full p-3 h-24 rounded-xl border bg-red-500 active:scale-95 transition duration-200 shadow-xl hover:brightness-110"
          >
            <h3 className="uppercase text-center font-semibold text-xl text-zinc-50">
              View pilots
            </h3>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default CandidatesPage;
