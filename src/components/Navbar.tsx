"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <header className="bg-zinc-50 border-b px-8 md:px-16 lg:px-32 text-sm sticky top-0 z-50">
      <nav className="flex items-center justify-between h-16">
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
    </header>
  );
};

export default Navbar;
