import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-8 md:px-16 lg:px-32 py-8 text-sm bg-zinc-900 text-zinc-100 flex flex-col items-center justify-center gap-y-5">
      <p className="font-light">&#169; 2024 Avenzu. All rights reserved</p>
      <div className="flex items-center gap-x-4">
        <Link
          href="https://www.facebook.com/people/Opulent-Air-Crew/61554746318491/?mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebookF
            size={24}
            className="hover:text-red-500 transition duration-200 cursor-pointer"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/company/opulentaircrew/"
          target="_blank"
        >
          <FaLinkedinIn
            size={24}
            className="hover:text-red-500 transition duration-200 cursor-pointer"
          />
        </Link>
      </div>
      <p className="text-sm text-zinc-600">
        Developed and maintained by{" "}
        <span className="italic cursor-pointer hover:underline transition duration-400">
          devbycarver
        </span>
      </p>
    </footer>
  );
};

export default Footer;
