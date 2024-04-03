"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type CardProps = {
  title: string;
  text: string;
  linkOneText: string;
  linkOneHref: string;
  linkTwoText?: string;
  linkTwoHref?: string;
};

const Card = ({
  title,
  text,
  linkOneText,
  linkOneHref,
  linkTwoText,
  linkTwoHref,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 125 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col items-start justify-center gap-y-2 border border-red-500 p-5 rounded-xl w-1/2 min-h-32"
    >
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="text-zinc-700">{text}</p>
      <div className="flex flex-col justify-center">
        <Link
          href={linkOneHref}
          className="hover:text-red-500 transition duration-300 flex items-center gap-x-1 group font-medium"
        >
          {linkOneText}
          <FaLongArrowAltRight
            size={18}
            className="group-hover:translate-x-1 transition duration-200 group-hover:text-red-500"
          />
        </Link>
        {linkTwoText && (
          <Link
            href={linkTwoHref!}
            className="hover:text-red-500 transition duration-300 flex items-center gap-x-1 group font-medium"
          >
            {linkTwoText}
            <FaLongArrowAltRight
              size={18}
              className="group-hover:translate-x-1 transition duration-200 group-hover:text-red-500"
            />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
