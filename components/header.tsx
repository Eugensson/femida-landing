"use client";

import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export const Header = () => {
  const [bg, setBg] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  }, []);

  return (
    <header
      className={twMerge(
        "fixed top-0 z-10 w-full py-8 md:p-8 lg:px-0 transition-all duration-300",
        bg && "bg-white shadow-md py-4"
      )}
    >
      <div className="container max-w-7xl flex items-center justify-between">
        <Logo />
        <Nav />
        <MobileMenu />
      </div>
    </header>
  );
};
