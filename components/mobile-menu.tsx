"use client";

import { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
import { Link as ScrollLink } from "react-scroll";

import { navLinks } from "@/constants";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="lg:hidden relative z-20">
      <button type="button" onClick={() => setIsOpen(true)}>
        <GrMenu size={30} />
      </button>
      <nav
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-primary fixed top-0 w-full h-screen text-white transition-all duration-300 flex flex-col justify-center items-center space-y-8 text-xl`}
      >
        <button
          className="absolute top-6 left-6"
          onClick={() => setIsOpen(false)}
        >
          <GrClose size={30} />
        </button>
        <ul className="flex flex-col gap-8">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <ScrollLink
                to={href}
                spy
                offset={-200}
                activeClass="active"
                className="cursor-pointer transition-all duration-300 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};
