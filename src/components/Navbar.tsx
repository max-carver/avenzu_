"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Flight attendants",
    href: "/flight-attendants",
  },
  {
    title: "Pilots",
    href: "/pilots",
  },
  {
    title: "Employers",
    href: "/employers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <header className="bg-zinc-50 text-zinc-800 border-b px-8 md:px-16 lg:px-32 text-sm sticky top-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between h-16">
        <h1 className="text-xl">AVENZU</h1>
        <ul className="flex items-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.title}
              className={`${
                pathname === link.href ? "text-red-500" : "text-zinc-700"
              } py-1 px-3 border-b border-transparent hover:border-red-500 transition duration-300 cursor-pointer`}
            >
              <Link href={link.href}>{link.title}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden items-center justify-between h-16">
        <h1 className="text-xl">AVENZU</h1>
        {!navOpen ? (
          <RiMenu3Line
            size={36}
            onClick={() => setNavOpen((prev) => !prev)}
            className="cursor-pointer"
          />
        ) : (
          <IoClose
            size={36}
            onClick={() => setNavOpen((prev) => !prev)}
            className="cursor-pointer"
          />
        )}

        {navOpen && (
          <ul className="absolute top-16 left-0 flex flex-col items-start bg-zinc-50 text-lg w-full h-screen pl-5">
            {navLinks.map((link) => (
              <motion.li
                key={link.title}
                className={`${
                  pathname === link.href ? "text-red-500" : "text-zinc-700"
                } py-1 px-3 border-b border-transparent hover:border-red-500 transition duration-300 cursor-pointer`}
              >
                <Link href={link.href} onClick={() => setNavOpen(false)}>
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
